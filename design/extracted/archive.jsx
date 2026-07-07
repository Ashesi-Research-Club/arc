// Ashesi Review — Articles archive with instant search + category filter.
const ARC_AR = window.AshesiResearchClubDesignSystem_cd232d;

function Archive({ onOpenArticle }) {
  const D = window.ARC_DATA;
  const [q, setQ] = React.useState('');
  const [cat, setCat] = React.useState('all');

  const list = D.articles.filter(a => {
    const catOk = cat === 'all' || a.category === cat;
    const hay = (a.title + ' ' + a.excerpt + ' ' + a.tags.join(' ')).toLowerCase();
    return catOk && hay.includes(q.toLowerCase());
  });

  return (
    <main style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 24px 96px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 48, lineHeight: 1.04, color: 'var(--ink)', margin: '0 0 24px' }}>Articles</h1>
      <div style={{ maxWidth: 460, marginBottom: 20 }}>
        <ARC_AR.SearchField value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 8, paddingBottom: 28, borderBottom: '1px solid var(--ink)' }}>
        {D.categories.map(([k, l]) => (
          <ARC_AR.CategoryPill key={k} active={cat === k} onClick={() => setCat(k)}>{l}</ARC_AR.CategoryPill>
        ))}
      </div>

      {list.length === 0 ? (
        <div style={{ padding: '64px 0', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--ink)', marginBottom: 8 }}>Nothing here yet</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--muted)' }}>No articles match “{q}”. Try another keyword or category.</div>
        </div>
      ) : (
        <div>
          {list.map((a) => (
            <article key={a.slug} onClick={() => onOpenArticle(a.slug)} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 28, padding: '28px 0', borderBottom: '1px solid var(--hairline)', cursor: 'pointer', alignItems: 'center' }}>
              <window.Photo ratio="4/3" label={a.categoryLabel} />
              <div>
                <ARC_AR.CategoryEyebrow category={a.category} />
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 28, lineHeight: 1.1, color: 'var(--ink)', margin: '8px 0 8px' }}>{a.title}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.5, color: 'var(--ink)', margin: '0 0 12px', maxWidth: 620 }}>{a.excerpt}</p>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--muted)' }}>By {a.writtenBy} · {a.publishedDate} · {a.readTime} min read</div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
window.Archive = Archive;
