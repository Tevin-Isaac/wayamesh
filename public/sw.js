// WayaMesh service worker: keeps the app usable with no connection.
// Strategy: network first for page assets, fall back to the last cached copy. API calls are never cached.
//
// It works at the site root ("/") and when the wallet is mounted under a sub-path (wayamesh.xyz/app):
//   registered as  <worker url>?base=<asset base>   with the page path as its scope.
// `base` is where the built files live ("/" or "/app-static/"); the scope is where pages live ("/" or "/app").
const params = new URL(self.location.href).searchParams
const BASE = (params.get('base') || '/').replace(/\/?$/, '/')
const SCOPE_PATH = new URL(self.registration.scope).pathname.replace(/\/+$/, '') // "" at root, "/app" when mounted
const SHELL_URL = SCOPE_PATH + '/' // page the app is served from
const CACHE = 'wayamesh-shell-v3' + SCOPE_PATH.replace(/\W/g, '-')

// Paths that must always go to the network and are never cached.
const NEVER_CACHE = ['/api/', '/ramp-api/', '/.netlify/', '/_next/data/']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      // addAll is all-or-nothing, so a missing optional file must not block the install.
      .then((cache) => Promise.allSettled([SHELL_URL, BASE + 'manifest.webmanifest', BASE + 'icon.svg'].map((u) => cache.add(u))))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      // only touch this worker's own caches
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('wayamesh-shell-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return
  const sameOrigin = url.origin === self.location.origin
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com'
  if (!sameOrigin && !isFont) return
  // Never cache API calls, or anything that is not a plain page asset.
  if (sameOrigin && NEVER_CACHE.some((p) => url.pathname.startsWith(p))) return
  if (req.headers.has('range')) return // media range requests cannot be cached as a whole

  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.ok && (res.type === 'basic' || isFont)) {
          const copy = res.clone()
          caches.open(CACHE).then((cache) => cache.put(req, copy))
        }
        return res
      })
      .catch(async () => {
        const cached = await caches.match(req)
        if (cached) return cached
        if (req.mode === 'navigate') {
          const shell = (await caches.match(SHELL_URL)) || (await caches.match(SCOPE_PATH || '/'))
          if (shell) return shell
        }
        return Response.error()
      }),
  )
})
