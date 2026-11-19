// Runs before first paint (blocking, external so the strict CSP needs no 'unsafe-inline').
// Reads the shared preference and sets data-theme on <html>. The key and values are shared with wayamesh.xyz.
// Keep the logic in step with src/lib/theme.ts.
(function () {
  try {
    var pref = null
    try { pref = localStorage.getItem('wayamesh-theme') } catch (e) {}
    if (pref !== 'light' && pref !== 'dark') pref = 'system'
    var systemLight = false
    try { systemLight = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) } catch (e) {}
    var dark = pref === 'dark' || (pref === 'system' && !systemLight)
    var root = document.documentElement
    root.setAttribute('data-theme', dark ? 'dark' : 'light')
    root.style.colorScheme = dark ? 'dark' : 'light'
    var meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', dark ? '#07070f' : '#f5f7fa')
  } catch (e) {}
})()
