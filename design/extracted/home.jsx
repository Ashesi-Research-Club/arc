// Ashesi Review — Home (the magazine grid). Sparse state: cover + one secondary.
const ARC_H = window.AshesiResearchClubDesignSystem_cd232d;

function Home({ onNav, onOpenArticle }) {
  const D = window.ARC_DATA;
  const cover = D.articles.find(a => a.featured);
  const secondary = D.articles.filter(a => !a.featured);
  const r = (slug) => D.researchers[slug];

  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--gutter-desktop) 80px' }}>
      {/* Cover hero */}
      <article className="arc-reveal" style={{ paddingTop: 40, cursor: 'pointer' }} onClick={() => onOpenArticle(cover.slug)}>
        <div style={{ position: 'relative' }}>
          <window.Photo ratio="16/9" label="Cover · Dr. Nyantakyi" />
        </div>
        <div style={{ maxWidth: 820, marginTop: 26 }}>
          <ARC_H.CategoryEyebrow category={cover.category} />
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 60, lineHeight: 1.04, letterSpacing: '-0.01em', color: 'var(--ink)', margin: '14px 0 0' }}>
            {cover.title}
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.5, color: 'var(--ink)', margin: '18px 0 0', maxWidth: 720 }}>
            {cover.excerpt}
          </p>
          <div style={{ marginTop: 22 }}>
            <ARC_H.Byline writer={cover.writtenBy} writerHref="#" date={cover.publishedDate} readTime={cover.readTime} />
          </div>
        </div>
      </article>

      <hr className="arc-rule" style={{ margin: '56px 0' }} />

      {/* Secondary row + rail */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 56 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 22 }}>Latest</div>
          {secondary.map((a) => (
            <article key={a.slug} onClick={() => onOpenArticle(a.slug)} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 28, cursor: 'pointer', alignItems: 'start' }}>
              <window.Photo ratio="4/3" label={a.categoryLabel} />
              <div>
                <ARC_H.CategoryEyebrow category={a.category} />
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 30, lineHeight: 1.1, color: 'var(--ink)', margin: '10px 0 0' }}>{a.title}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.55, color: 'var(--ink)', margin: '12px 0 0' }}>{a.excerpt}</p>
                <div style={{ marginTop: 16 }}>
                  <ARC_H.Byline writer={a.writtenBy} date={a.publishedDate} readTime={a.readTime} size="sm" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Researcher rail */}
        <aside style={{ borderLeft: '1px solid var(--hairline)', paddingLeft: 32 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 22 }}>Profiled researchers</div>
          {Object.values(D.researchers).map((p, i) => (
            <div key={p.slug}>
              <div onClick={() => onNav('researcher', p.slug)} style={{ display: 'flex', gap: 14, cursor: 'pointer', padding: '4px 0' }}>
                <ARC_H.Avatar name={p.name} size={48} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, lineHeight: 1.15, color: 'var(--ink)' }}>{p.name}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--muted)', marginTop: 3 }}>{p.program} · {p.yearOfStudy}</div>
                </div>
              </div>
              {i === 0 && <hr className="arc-rule" style={{ margin: '18px 0' }} />}
            </div>
          ))}
          <div style={{ marginTop: 28 }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>Join the desk</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.55, color: 'var(--ink)', marginBottom: 16 }}>Researching something worth telling? Pitch it to the club.</p>
            <ARC_H.Button variant="secondary" onClick={() => onNav('apply')}>Apply to publish</ARC_H.Button>
          </div>
        </aside>
      </div>
    </main>
  );
}
window.Home = Home;
