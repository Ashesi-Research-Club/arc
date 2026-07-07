// Ashesi Review — Apply form (sectioned, square inputs, success/error states).
const ARC_AP = window.AshesiResearchClubDesignSystem_cd232d;

function Apply({ onNav }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [consent, setConsent] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  if (submitted) {
    return (
      <main style={{ maxWidth: 680, margin: '0 auto', padding: '90px 24px', textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: '9999px', border: '1px solid var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.6"><path d="M4 12.5l5 5L20 6"/></svg>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 40, lineHeight: 1.08, color: 'var(--ink)', margin: '0 0 14px' }}>Application received</h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55, color: 'var(--ink)', maxWidth: 480, margin: '0 auto 28px' }}>Thank you. The editorial desk reviews pitches on a rolling basis — expect to hear back within two weeks.</p>
        <ARC_AP.Button variant="secondary" onClick={() => onNav('home')}>Back to the magazine</ARC_AP.Button>
      </main>
    );
  }

  const submit = (e) => {
    e.preventDefault();
    if (!consent) { setShowError(true); return; }
    setSubmitted(true);
  };

  const sectionHead = (n, t) => (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, margin: '36px 0 18px', paddingBottom: 12, borderBottom: '1px solid var(--ink)' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)' }}>{n}</span>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 24, color: 'var(--ink)', margin: 0 }}>{t}</h2>
    </div>
  );

  return (
    <main style={{ maxWidth: 680, margin: '0 auto', padding: '48px 24px 96px' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Join the club</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 48, lineHeight: 1.05, color: 'var(--ink)', margin: '12px 0 14px' }}>Pitch your research</h1>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.55, color: 'var(--ink)', maxWidth: 580 }}>Tell us about the work and why it matters. Strong pitches lead with a real-world problem.</p>

      <form onSubmit={submit}>
        {sectionHead('01', 'About you')}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          <ARC_AP.Field label="Full name" htmlFor="ap-name" required><ARC_AP.Input id="ap-name" placeholder="Your name" /></ARC_AP.Field>
          <ARC_AP.Field label="Email" htmlFor="ap-email" required><ARC_AP.Input id="ap-email" type="email" placeholder="you@ashesi.edu.gh" /></ARC_AP.Field>
          <ARC_AP.Field label="Phone" htmlFor="ap-phone"><ARC_AP.Input id="ap-phone" placeholder="+233…" /></ARC_AP.Field>
          <ARC_AP.Field label="Program" htmlFor="ap-prog" required><ARC_AP.Input id="ap-prog" placeholder="e.g. Computer Science" /></ARC_AP.Field>
          <ARC_AP.Field label="Year of study" htmlFor="ap-year"><ARC_AP.Input id="ap-year" placeholder="e.g. Year 3" /></ARC_AP.Field>
          <ARC_AP.Field label="Research advisor" htmlFor="ap-adv"><ARC_AP.Input id="ap-adv" placeholder="Supervisor name" /></ARC_AP.Field>
        </div>

        {sectionHead('02', 'The research')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <ARC_AP.Field label="Research title" htmlFor="ap-title" required><ARC_AP.Input id="ap-title" placeholder="Working title is fine" /></ARC_AP.Field>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            <ARC_AP.Field label="Category" htmlFor="ap-cat"><ARC_AP.Input id="ap-cat" placeholder="e.g. Engineering" /></ARC_AP.Field>
            <ARC_AP.Field label="Project stage" htmlFor="ap-stage"><ARC_AP.Input id="ap-stage" placeholder="e.g. In progress" /></ARC_AP.Field>
          </div>
          <ARC_AP.Field label="Abstract" htmlFor="ap-abs" hint="A short summary of the work — 150–300 words." required>
            <ARC_AP.Textarea id="ap-abs" rows={5} placeholder="What did you investigate, and what did you find?" />
          </ARC_AP.Field>
          <ARC_AP.Field label="Real-world impact" htmlFor="ap-impact" required>
            <ARC_AP.Textarea id="ap-impact" rows={3} placeholder="Who benefits, and how?" />
          </ARC_AP.Field>
          <ARC_AP.Field label="Why you want to publish" htmlFor="ap-mot">
            <ARC_AP.Textarea id="ap-mot" rows={3} />
          </ARC_AP.Field>
          <ARC_AP.Field label="Supporting materials" htmlFor="ap-url" hint="Link to a paper, repo, or slides.">
            <ARC_AP.Input id="ap-url" placeholder="https://" />
          </ARC_AP.Field>
        </div>

        {sectionHead('03', 'Consent')}
        <div style={{ border: showError ? '2px solid var(--ink)' : '1px solid var(--hairline)', padding: 18 }}>
          <ARC_AP.Checkbox id="ap-consent" checked={consent} onChange={e => { setConsent(e.target.checked); setShowError(false); }}
            label="I confirm the information provided is accurate and consent to being contacted by the editorial desk." />
          {showError && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, color: 'var(--ink)', marginTop: 10 }}>Please confirm consent before submitting.</div>}
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
          <ARC_AP.Button variant="primary" size="lg" type="submit">Submit application</ARC_AP.Button>
          <ARC_AP.Button variant="text" onClick={() => onNav('home')}>Cancel</ARC_AP.Button>
        </div>
      </form>
    </main>
  );
}
window.Apply = Apply;
