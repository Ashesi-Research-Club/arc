// Ashesi Review — Team roster & Researcher profile (editorial layouts).
const ARC_T = window.AshesiResearchClubDesignSystem_cd232d;

function Team({ onNav }) {
  const D = window.ARC_DATA;
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px 96px' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>The masthead</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 52, lineHeight: 1.04, color: 'var(--ink)', margin: '12px 0 8px' }}>Who runs the Club</h1>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.55, color: 'var(--ink)', maxWidth: 600, marginBottom: 8 }}>The editorial desk — students who commission, write, fact-check, and design every profile.</p>
      <div style={{ marginTop: 40 }}>
        {D.team.sort((a, b) => a.order - b.order).map((m, i) => (
          <div key={m.name}>
            {i > 0 && <hr className="arc-rule" />}
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 24, alignItems: 'center', padding: '24px 0' }}>
              <ARC_T.Avatar name={m.name} size={64} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--ink)', lineHeight: 1.1 }}>{m.name}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--ink)', margin: '4px 0 8px' }}>{m.role}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--muted)', maxWidth: 460 }}>{m.description}</div>
              </div>
              <div style={{ textAlign: 'right', fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--muted)', whiteSpace: 'nowrap' }}>
                <div style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--ink)' }}>{m.specialization}</div>
                <div style={{ marginTop: 4 }}>{m.year}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
window.Team = Team;

function Researcher({ slug, onNav, onOpenArticle }) {
  const D = window.ARC_DATA;
  const r = D.researchers[slug] || Object.values(D.researchers)[0];
  const articles = D.articles.filter(a => a.researcher === r.slug);
  return (
    <main style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px 96px' }}>
      <a onClick={() => onNav('home')} style={{ cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--muted)', textDecoration: 'none' }}>← Ashesi Research Club</a>
      <div style={{ display: 'flex', gap: 28, alignItems: 'center', margin: '28px 0 12px' }}>
        <ARC_T.Avatar name={r.name} size={96} />
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Researcher</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 46, lineHeight: 1.04, color: 'var(--ink)', margin: '6px 0' }}>{r.name}</h1>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--muted)' }}>{r.program} · {r.yearOfStudy}</div>
        </div>
      </div>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.6, color: 'var(--ink)', maxWidth: 640, margin: '20px 0 28px' }}>{r.bio}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
        {r.interests.map(t => <ARC_T.Tag key={t}>{t}</ARC_T.Tag>)}
      </div>

      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', paddingBottom: 16, borderBottom: '1px solid var(--ink)' }}>Featured in</div>
      {articles.map((a) => (
        <article key={a.slug} onClick={() => onOpenArticle(a.slug)} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, padding: '22px 0', borderBottom: '1px solid var(--hairline)', cursor: 'pointer', alignItems: 'center' }}>
          <div>
            <ARC_T.CategoryEyebrow category={a.category} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 26, lineHeight: 1.12, color: 'var(--ink)', margin: '8px 0 6px' }}>{a.title}</h2>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--muted)' }}>By {a.writtenBy} · {a.publishedDate} · {a.readTime} min</div>
          </div>
          <div style={{ width: 120 }}><window.Photo ratio="4/3" label="" /></div>
        </article>
      ))}
    </main>
  );
}
window.Researcher = Researcher;
