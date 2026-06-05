export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(62,217,184,0.1)', padding: '50px 0', marginTop: '80px' }}>
      <div className="waya-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ fontWeight: 700, fontSize: '16px', color: '#F5F4F2' }}>wayamesh</div>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="footer-social">
            <i className="ti ti-brand-x" style={{ fontSize: '24px' }} />
          </a>
        </div>
        <div style={{ textAlign: 'center', fontSize: '12px', color: '#A0A0A0' }}>
          © 2026 Wayamesh. Offline-first USDC payments on Arc.
        </div>
      </div>
    </footer>
  );
}
