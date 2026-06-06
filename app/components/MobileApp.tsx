export default function MobileApp() {
  return (
    <section id="mobile-app" className="waya-section">
      <div className="waya-container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '16px', color: '#F5F4F2' }}>
          Money flows offline. Freedom in your pocket.
        </h2>
        <p style={{ fontSize: '18px', color: '#A0A0A0', marginBottom: '60px' }}>
          Available on iOS &amp; Android
        </p>

        <div className="phone-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '24px', marginBottom: '50px' }}>

          {/* ── LEFT PHONE — Dashboard ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#A0A0A0' }}>Dashboard</div>
            <div style={{
              width: '155px', height: '300px', borderRadius: '28px',
              border: '2px solid rgba(62,217,184,0.15)', background: '#0D0D1A',
              position: 'relative', overflow: 'hidden',
              opacity: 0.85, transform: 'scale(0.93) translateY(12px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}>
              {/* Notch */}
              <div style={{ width: '50px', height: '10px', background: '#07070F', border: '1.5px solid rgba(255,255,255,0.08)', borderRadius: '0 0 10px 10px', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }} />
              {/* Screen content */}
              <div style={{ position: 'absolute', inset: 0, padding: '22px 14px 14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px', fontWeight: 700, color: '#3ED9B8' }}>wayamesh</span>
                  <span style={{ fontSize: '7px', color: '#3ED9B8', background: 'rgba(62,217,184,0.15)', padding: '2px 5px', borderRadius: '8px' }}>● Offline</span>
                </div>
                {/* Balance */}
                <div style={{ background: 'rgba(62,217,184,0.08)', border: '1px solid rgba(62,217,184,0.15)', borderRadius: '10px', padding: '10px' }}>
                  <div style={{ fontSize: '7px', color: '#666', marginBottom: '3px' }}>USDC Balance</div>
                  <div style={{ fontSize: '18px', fontWeight: 900, color: '#F5F4F2', letterSpacing: '-0.03em' }}>$245.80</div>
                  <div style={{ fontSize: '7px', color: '#3ED9B8', marginTop: '2px' }}>↑ +$50 pending</div>
                </div>
                {/* Transactions */}
                <div style={{ fontSize: '7px', fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recent</div>
                {[
                  { name: 'Amina K.', amt: '-$20', color: '#F5F4F2' },
                  { name: 'David M.', amt: '+$50', color: '#3ED9B8' },
                  { name: 'Fatou S.', amt: '-$12', color: '#F5F4F2' },
                ].map((tx) => (
                  <div key={tx.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(62,217,184,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', color: '#3ED9B8', fontWeight: 700 }}>{tx.name[0]}</div>
                      <span style={{ fontSize: '8px', color: '#999' }}>{tx.name}</span>
                    </div>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: tx.color }}>{tx.amt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── CENTER PHONE — Send (featured) ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#3ED9B8' }}>Send</div>
            <div style={{
              width: '175px', height: '340px', borderRadius: '28px',
              border: '2px solid rgba(62,217,184,0.35)', background: '#0D0D1A',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(62,217,184,0.15), 0 20px 80px rgba(62,217,184,0.18), 0 30px 70px rgba(0,0,0,0.6)',
            }}>
              <div style={{ width: '50px', height: '10px', background: '#07070F', border: '1.5px solid rgba(255,255,255,0.08)', borderRadius: '0 0 10px 10px', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }} />
              <div style={{ position: 'absolute', inset: 0, padding: '22px 16px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#F5F4F2' }}>Send USDC</span>
                  <span style={{ fontSize: '7px', color: '#3ED9B8', background: 'rgba(62,217,184,0.12)', padding: '2px 6px', borderRadius: '8px', border: '1px solid rgba(62,217,184,0.2)' }}>BLE</span>
                </div>
                {/* Recipient */}
                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg, #3ED9B8 0%, #2775CA 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>J</div>
                  <div>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#F5F4F2' }}>James W.</div>
                    <div style={{ fontSize: '7px', color: '#555', fontFamily: 'monospace' }}>0x4f…c3a1</div>
                  </div>
                  <div style={{ marginLeft: 'auto', width: '8px', height: '8px', borderRadius: '50%', background: '#3ED9B8' }} />
                </div>
                {/* Amount */}
                <div style={{ background: 'rgba(62,217,184,0.06)', border: '1px solid rgba(62,217,184,0.2)', borderRadius: '10px', padding: '12px 10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '7px', color: '#666', marginBottom: '4px' }}>Amount</div>
                  <div style={{ fontSize: '26px', fontWeight: 900, color: '#F5F4F2', letterSpacing: '-0.04em' }}>$50<span style={{ fontSize: '14px', color: '#3ED9B8' }}>.00</span></div>
                  <div style={{ fontSize: '7px', color: '#555', marginTop: '3px' }}>USDC</div>
                </div>
                {/* Mesh indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 8px', background: 'rgba(62,217,184,0.05)', borderRadius: '8px', border: '1px solid rgba(62,217,184,0.1)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3ED9B8', animation: 'pulse 1.8s ease-in-out infinite' }} />
                  <span style={{ fontSize: '7px', color: '#3ED9B8', fontWeight: 600 }}>Routing via Bluetooth mesh</span>
                </div>
                {/* Agent note */}
                <div style={{ fontSize: '7px', color: '#555', textAlign: 'center' }}>Agent validated · 0 fees · Offline</div>
                {/* Send button */}
                <div style={{ background: '#3ED9B8', borderRadius: '10px', padding: '10px', textAlign: 'center', marginTop: 'auto' }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#07070F' }}>Send Payment</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT PHONE — AI Agent ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#A0A0A0' }}>AI Agent</div>
            <div style={{
              width: '155px', height: '300px', borderRadius: '28px',
              border: '2px solid rgba(62,217,184,0.15)', background: '#0D0D1A',
              position: 'relative', overflow: 'hidden',
              opacity: 0.85, transform: 'scale(0.93) translateY(12px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}>
              <div style={{ width: '50px', height: '10px', background: '#07070F', border: '1.5px solid rgba(255,255,255,0.08)', borderRadius: '0 0 10px 10px', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }} />
              <div style={{ position: 'absolute', inset: 0, padding: '22px 14px 14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px', fontWeight: 700, color: '#F5F4F2' }}>AI Agent</span>
                  <span style={{ fontSize: '7px', color: '#3ED9B8', background: 'rgba(62,217,184,0.15)', padding: '2px 5px', borderRadius: '8px' }}>● Active</span>
                </div>
                {/* Model info */}
                <div style={{ background: 'rgba(62,217,184,0.06)', border: '1px solid rgba(62,217,184,0.15)', borderRadius: '8px', padding: '7px 8px' }}>
                  <div style={{ fontSize: '7px', color: '#555' }}>On-device model</div>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: '#3ED9B8' }}>4MB · Offline · Local</div>
                </div>
                {/* Tasks */}
                <div style={{ fontSize: '7px', fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tasks</div>
                {[
                  { label: 'Validate transactions', done: true },
                  { label: 'Estimate Arc fees', done: true },
                  { label: 'Route via BLE mesh', done: true },
                  { label: 'Queue for settlement', active: true },
                ].map((task) => (
                  <div key={task.label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: task.done ? 'rgba(62,217,184,0.2)' : task.active ? 'rgba(62,217,184,0.1)' : 'rgba(255,255,255,0.04)', border: `1px solid ${task.done || task.active ? 'rgba(62,217,184,0.4)' : 'rgba(255,255,255,0.08)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {task.done && <span style={{ fontSize: '6px', color: '#3ED9B8' }}>✓</span>}
                      {task.active && <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#3ED9B8', animation: 'pulse 1.5s ease-in-out infinite' }} />}
                    </div>
                    <span style={{ fontSize: '8px', color: task.done ? '#888' : task.active ? '#3ED9B8' : '#444' }}>{task.label}</span>
                  </div>
                ))}
                {/* Pending count */}
                <div style={{ marginTop: 'auto', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '7px 8px' }}>
                  <div style={{ fontSize: '7px', color: '#555' }}>Pending settlement</div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#F5F4F2' }}>3 <span style={{ fontSize: '7px', color: '#555', fontWeight: 400 }}>transactions</span></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Store buttons */}
        <div className="store-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="download-btn" style={{ minWidth: '180px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1 }}>
              <span style={{ fontSize: '10px', opacity: 0.7, marginBottom: '2px' }}>Download on the</span>
              <span style={{ fontSize: '16px', fontWeight: 700 }}>App Store</span>
            </div>
          </button>

          <button className="download-btn" style={{ minWidth: '180px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M3.18 23.76c.3.17.64.24.99.2L16.79 12 12.29 7.5 3.18 23.76zM20.8 10.39L17.75 8.6l-3.43 3.4 3.43 3.4 3.07-1.78a1.75 1.75 0 0 0 0-3.23zM3 1.05a1.74 1.74 0 0 0-.18.78v20.34c0 .28.06.54.18.78l.09.08 11.38-11.38v-.27L3.09.97 3 1.05zm9.29 12.37L3 23.8l.09.08c.3.16.64.22.99.18l13.67-7.86-4.46-2.78z" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1 }}>
              <span style={{ fontSize: '10px', opacity: 0.7, marginBottom: '2px' }}>Get it on</span>
              <span style={{ fontSize: '16px', fontWeight: 700 }}>Google Play</span>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
