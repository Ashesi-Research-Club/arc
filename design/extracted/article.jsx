// Ashesi Review — Article page (the most important screen) with feature slots.
const ARC_A = window.AshesiResearchClubDesignSystem_cd232d;

function Article({ slug, onNav }) {
  const D = window.ARC_DATA;
  const a = D.articles.find(x => x.slug === slug) || D.articles[0];
  const r = D.researchers[a.researcher];
  const [progress, setProgress] = React.useState(0);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [claps, setClaps] = React.useState(128);
  const [clapped, setClapped] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [serif, setSerif] = React.useState(true);
  const [tint, setTint] = React.useState('white');
  const [scale, setScale] = React.useState(1);
  const scrollRef = React.useRef(null);

  const onScroll = (e) => {
    const el = e.target;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
  };

  const bg = tint === 'warm' ? 'var(--tint-warm)' : tint === 'dark' ? 'var(--dark-bg)' : 'var(--canvas)';
  const ink = tint === 'dark' ? 'var(--dark-ink)' : 'var(--ink)';
  const muted = tint === 'dark' ? 'var(--dark-muted)' : 'var(--muted)';
  const bodyFont = serif ? 'var(--font-body)' : 'var(--font-sans)';
  const P = (children, lead) => <p style={{ fontFamily: bodyFont, fontSize: (lead ? 19 : 17) * scale, lineHeight: 1.62, color: ink, margin: '0 0 22px' }}>{children}</p>;

  const isCS = a.slug === 'did-dr-nyantakyi-just-replace-gps';

  return (
    <div style={{ position: 'relative', background: bg, transition: 'background var(--dur-base) var(--ease-out)' }}>
      {/* Scroll progress (slot) */}
      <div style={{ position: 'sticky', top: 0, height: 3, background: tint === 'dark' ? '#333' : 'var(--hairline)', zIndex: 20 }}>
        <div style={{ height: '100%', width: (progress * 100) + '%', background: ink, transition: 'width 80ms linear' }} />
      </div>

      <article ref={scrollRef} onScroll={onScroll} style={{ maxHeight: 'calc(100vh - 79px)', overflowY: 'auto' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '48px 24px 96px' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <ARC_A.CategoryEyebrow category={a.category} href="#" />
            {/* Language switcher (slot) */}
            <div style={{ display: 'flex', gap: 2, fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600 }}>
              {['EN', 'FR', 'Twi'].map((l, i) => (
                <span key={l} style={{ padding: '4px 8px', color: i === 0 ? ink : muted, borderBottom: i === 0 ? '2px solid ' + ink : '2px solid transparent', cursor: 'pointer' }}>{l}</span>
              ))}
            </div>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 46, lineHeight: 1.05, letterSpacing: '-0.01em', color: ink, margin: '0 0 20px' }}>{a.title}</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 21, lineHeight: 1.45, color: ink, margin: '0 0 26px', fontStyle: 'italic' }}>{a.excerpt}</p>

          {/* Byline row + tools */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14, paddingBottom: 22, borderBottom: '1px solid ' + (tint === 'dark' ? 'var(--dark-hairline)' : 'var(--hairline)') }}>
            <ARC_A.Byline writer={a.writtenBy} writerHref="#" date={a.publishedDate} readTime={a.readTime} />
            <div style={{ display: 'flex', gap: 6 }}>
              <ARC_A.IconButton label="Listen to this article" shape="circle" variant="outline" onClick={() => setPlaying(p => !p)}>
                <window.Icon.Play />
              </ARC_A.IconButton>
              <ARC_A.IconButton label="Reader settings" shape="circle" variant={settingsOpen ? 'filled' : 'outline'} onClick={() => setSettingsOpen(o => !o)}>
                <window.Icon.Settings />
              </ARC_A.IconButton>
            </div>
          </div>

          {/* Audio player (slot) */}
          {playing && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, border: '1px solid ' + ink, padding: '12px 16px', marginTop: 18 }}>
              <ARC_A.IconButton label="Pause" shape="circle" variant="filled" size={36} onClick={() => setPlaying(false)}>
                <span style={{ fontSize: 12 }}>❚❚</span>
              </ARC_A.IconButton>
              <div style={{ flex: 1 }}>
                <div style={{ height: 3, background: tint === 'dark' ? '#333' : 'var(--hairline)' }}><div style={{ width: '34%', height: '100%', background: ink }} /></div>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: muted }}>1:48 / {a.readTime}:00</span>
            </div>
          )}

          {/* Reader settings panel (slot) */}
          {settingsOpen && (
            <div style={{ border: '1px solid ' + ink, padding: 18, marginTop: 18, background: bg }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ink, marginBottom: 14 }}>Reader settings</div>
              <Row label="Body type" ink={ink}>
                <Seg options={[['Serif', true], ['Sans', false]]} value={serif} onChange={setSerif} ink={ink} />
              </Row>
              <Row label="Text size" ink={ink}>
                <Seg options={[['A−', 0.9], ['A', 1], ['A+', 1.15]]} value={scale} onChange={setScale} ink={ink} />
              </Row>
              <Row label="Background" ink={ink}>
                <Seg options={[['White', 'white'], ['Warm', 'warm'], ['Dark', 'dark']]} value={tint} onChange={setTint} ink={ink} />
              </Row>
            </div>
          )}

          {/* Hero image */}
          <div style={{ margin: '30px 0 8px' }}>
            <window.Photo ratio="16/9" label="Featured image" tone={tint === 'dark' ? 'dark' : 'light'} />
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: muted, marginTop: 8 }}>{r.name} — {r.program}. Photograph for the Ashesi Research Club.</div>
          </div>

          {/* View count (slot) */}
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: muted, margin: '18px 0 30px' }}>2,481 views · {a.readTime} min read</div>

          {/* BODY */}
          {isCS ? <BodyCS P={P} bg={bg} ink={ink} muted={muted} scale={scale} bodyFont={bodyFont} /> : <BodyEng P={P} />}

          {/* Applause (slot) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, margin: '56px 0', paddingTop: 40, borderTop: '1px solid ' + (tint === 'dark' ? 'var(--dark-hairline)' : 'var(--hairline)') }}>
            <ARC_A.IconButton label="Applaud" shape="circle" variant={clapped ? 'filled' : 'outline'} size={56}
              onClick={() => { if (!clapped) { setClaps(c => c + 1); setClapped(true); } }}>
              <window.Icon.Clap />
            </ARC_A.IconButton>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: ink }}>{claps} applause</div>
          </div>

          {/* Funding fine print */}
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: muted, borderTop: '1px solid ' + (tint === 'dark' ? 'var(--dark-hairline)' : 'var(--hairline)'), paddingTop: 16 }}>
            Collaborators: Huawei 5G testing team · Funding: self-directed research
          </div>

          {/* Researcher card */}
          <div onClick={() => onNav('researcher', r.slug)} style={{ display: 'flex', gap: 18, alignItems: 'center', border: '1px solid ' + ink, padding: 20, marginTop: 28, cursor: 'pointer' }}>
            <ARC_A.Avatar name={r.name} size={64} />
            <div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: muted }}>The researcher</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: ink, margin: '4px 0' }}>{r.name}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: muted }}>{r.program} · {r.yearOfStudy} →</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function Row({ label, children, ink }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: ink }}>{label}</span>
      {children}
    </div>
  );
}
function Seg({ options, value, onChange, ink }) {
  return (
    <div style={{ display: 'flex', border: '1px solid ' + ink }}>
      {options.map(([l, v], i) => (
        <button key={l} onClick={() => onChange(v)} style={{
          fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, padding: '6px 12px', cursor: 'pointer',
          border: 'none', borderLeft: i ? '1px solid ' + ink : 'none',
          background: value === v ? ink : 'transparent', color: value === v ? (ink === 'var(--dark-ink)' ? '#111' : '#fff') : ink,
        }}>{l}</button>
      ))}
    </div>
  );
}
window.Article = Article;
