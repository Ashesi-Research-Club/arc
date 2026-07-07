// Ashesi Review — shared chrome: Masthead, Footer, Photo placeholder, ScrollProgress.
// Loaded as text/babel; assigns components to window.

const ARC = window.AshesiResearchClubDesignSystem_cd232d;

// --- Inline line icons (currentColor, 1.7px) ---
const Icon = {
  Menu: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>,
  Close: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M5 5l14 14M19 5L5 19"/></svg>,
  Search: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>,
  Settings: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M5 7h10M5 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 17h4M5 17h6M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M19 7h-2"/></svg>,
  Clap: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M11 11V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M14 10V4.5a1.5 1.5 0 0 1 3 0V12"/><path d="M17 11.5V7a1.5 1.5 0 0 1 3 0v6a7 7 0 0 1-7 7h-1.5a6 6 0 0 1-5-2.7L4 13a1.6 1.6 0 0 1 2.7-1.7L8 13V6.5a1.5 1.5 0 0 1 3 0V11"/></svg>,
  Play: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M7 5v14l11-7z"/></svg>,
  Arrow: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
};
window.Icon = Icon;

// --- Photo placeholder (no real imagery in sources) ---
function Photo({ ratio = '16/9', label = 'Photograph', tone = 'light', style }) {
  const bg = tone === 'dark' ? '#1a1a1a' : '#ebe9e4';
  const fg = tone === 'dark' ? '#777' : '#a59f93';
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: ratio, background: bg, overflow: 'hidden', ...style }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke={fg} strokeWidth="1.2">
          <rect x="3" y="4" width="18" height="16"/><circle cx="9" cy="10" r="2"/><path d="M3 17l5-4 4 3 3-3 6 5"/>
        </svg>
      </div>
      <span style={{ position: 'absolute', left: 10, bottom: 8, fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: fg }}>{label}</span>
    </div>
  );
}
window.Photo = Photo;

// --- Masthead ---
function Masthead({ onNav, active = 'home', onApply }) {
  const [open, setOpen] = React.useState(false);
  const links = [['articles', 'Articles'], ['researchers', 'Researchers'], ['team', 'Team'], ['about', 'About']];
  return (
    <header style={{ borderBottom: '1px solid var(--ink)', background: 'var(--canvas)', position: 'sticky', top: 0, zIndex: 30 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--gutter-desktop)', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', minHeight: 76 }}>
        <nav style={{ display: 'flex', gap: 22, alignItems: 'center' }} className="arc-nav-desktop">
          {links.map(([k, l]) => (
            <a key={k} onClick={() => onNav(k)} style={{ cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 700, letterSpacing: '0.02em', color: 'var(--ink)', textDecoration: active === k ? 'underline' : 'none', textUnderlineOffset: 5 }}>{l}</a>
          ))}
        </nav>
        <a onClick={() => onNav('home')} style={{ cursor: 'pointer', textAlign: 'center', textDecoration: 'none' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 24, letterSpacing: '0.01em', color: 'var(--ink)', lineHeight: 1 }}>Ashesi Research Club</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--ink)', marginTop: 4 }}>Student Research Magazine</div>
        </a>
        <div style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: 8 }}>
          <ARC.Button variant="primary" size="sm" onClick={onApply || (() => onNav('apply'))}>Apply</ARC.Button>
        </div>
      </div>
    </header>
  );
}
window.Masthead = Masthead;

// --- Footer (black band) ---
function Footer({ onNav }) {
  const col = (head, items) => (
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>{head}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((it) => <a key={it} onClick={() => onNav && onNav('articles')} style={{ cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, color: '#cfcfcf', textDecoration: 'none' }}>{it}</a>)}
      </div>
    </div>
  );
  return (
    <footer style={{ background: 'var(--ink)', color: '#fff', padding: '48px var(--gutter-desktop)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.4fr', gap: 40 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: '#fff' }}>Ashesi Research Club</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: '#bdbdbd', maxWidth: 320, marginTop: 12 }}>
            Student research, told as a magazine. Published by the Ashesi Research Club, Berekuso, Ghana.
          </p>
        </div>
        {col('Sections', ['Computer Science', 'Engineering', 'Business', 'Humanities'])}
        {col('Club', ['About', 'Team', 'Apply', 'Contact'])}
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>Newsletter</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#bdbdbd', marginBottom: 12 }}>New profiles, in your inbox.</p>
          <div style={{ display: 'flex', border: '1px solid #fff' }}>
            <input placeholder="Email address" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 14, padding: '11px 12px' }} />
            <button style={{ background: '#fff', color: '#000', border: 'none', padding: '0 16px', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Join</button>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '32px auto 0', paddingTop: 20, borderTop: '1px solid #333', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: 12, color: '#8c8c8c' }}>
        <span>© 2026 Ashesi Research Club</span>
        <span>Berekuso · Ghana</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
