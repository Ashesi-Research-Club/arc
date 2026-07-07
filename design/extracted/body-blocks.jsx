// Ashesi Review — article body block library (the two real articles).
const ARC_B = window.AshesiResearchClubDesignSystem_cd232d;

// --- Article 1: the block-library exemplar ---
function BodyCS({ P, bg, ink, muted, scale, bodyFont }) {
  const H2 = (t) => <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 30, lineHeight: 1.12, color: ink, margin: '40px 0 18px' }}>{t}</h2>;
  const H3 = (t) => <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 23, lineHeight: 1.15, color: ink, margin: '32px 0 14px' }}>{t}</h3>;
  const Quote = (t) => <blockquote style={{ margin: '0 0 22px', paddingLeft: 20, borderLeft: '2px solid ' + ink, fontFamily: bodyFont, fontSize: 18 * scale, lineHeight: 1.55, color: ink, fontStyle: 'italic' }}>{t}</blockquote>;

  return (
    <div>
      {P('Isaac Osei Nyantakyi isn\'t your typical "all work, no play" academic. Right off the bat, he drops this gem:', true)}
      {Quote('"One fun thing about me is that I\'m an avid gamer. I love video games and have actually created a career path around them. I did a master\'s in e-sports management, organizing gaming tournaments and helping people from the streets find career paths in gaming."')}
      {P('That is incredible! Here\'s a PhD-level researcher who sees gaming as a real way to uplift and motivate young people, overall turning his hobby into opportunities for others. He\'s got a full life outside the lab, and that balance probably fuels his drive.')}

      {H2('Applying Knowledge Is His Guiding Principle')}
      {P(<span>To understand Isaac\'s research philosophy, we need to understand his guiding principle. He puts it perfectly: "Application. Every research project I undertake must have a real-world impact… It\'s a fertile ground to build systems from scratch and create sustainable innovations that actually improve lives." It\'s that same mindset that took him from telecommunications engineering to China for his master\'s and PhD, where he joined <a className="arc-link" href="#">Huawei\'s early 5G team</a>.</span>)}

      <ARC_B.PullQuote cite="Dr. Nyantakyi">I was part of the founding team working on deployment and testing.</ARC_B.PullQuote>

      {P('Now there\'s a man who knows what he wants and how to achieve it; he is truly an inspiration!')}

      <ARC_B.Callout variant="aside">Imagine blending your passions, like gaming or whatever fires you up, with real impact… What could that look like for you?</ARC_B.Callout>

      {H2('He Cites A Paper In A Top Journal as His Biggest Milestone')}
      {P('Isaac isn\'t one to brag, but when asked about his biggest milestone, he quietly points to something pretty impressive: his paper on the Adaptive Conjugate Gradient Algorithm (ACGA), published in a top journal and already racking up solid citations. This algorithm helps with accurate location tracking — finding a lost hiker, guiding drones in crowded airspace — filling gaps where GPS fails.')}
      {Quote('"The ACGA combines two signal processing techniques, Angle of Arrival (AOA) and Time Difference of Arrival (TDOA). By combining these two measurements, we can locate where a signal or object is in space."')}

      {/* Code block with copy */}
      <CodeBlock ink={ink} />

      <ARC_B.PullQuote cite="Dr. Nyantakyi">It\'s especially useful in real-life conditions where data isn\'t clean.</ARC_B.PullQuote>

      {H3('What inspired the impressive algorithm, ACGA?')}
      {P('Upon reading a ton of papers, he saw a gap: most location-tracking methods shine in simulations but flop in noisy real-world settings. Sometimes they\'re just too slow and heavy to be practical.')}
      {P('He rolled up his sleeves, analyzed existing approaches, tested over a hundred implementations, hunted down good datasets (which took months), and iterated until it clicked.')}

      {/* Glossary term demo */}
      {P(<span>The smart part? He added a <span style={{ borderBottom: '1px dotted ' + ink, cursor: 'help' }} title="A subspace built from successive matrix–vector products; lets the solver converge in far fewer steps.">Krylov subspace basis</span> to make the whole thing run efficiently even when the real world is messy and noisy.</span>)}

      {/* Comprehension checkpoint (slot) */}
      <Checkpoint ink={ink} />

      {H3('Tiny Conclusion')}
      {P('Isaac Osei Nyantakyi embodies humble hustle. He\'s a Ghanaian researcher whose guiding ideology is that every project must ask, "Does this solve a real problem better?" What a way to push a field forward without making it about oneself, don\'t you think?')}

      {/* TL;DR callout */}
      <ARC_B.Callout title="TL;DR" variant="tldr">
        <ul style={{ margin: 0, paddingLeft: 18, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: ink }}>
          <li><strong>Who?</strong> Ghanaian researcher blending signal processing, renewables and local fixes.</li>
          <li><strong>Core belief?</strong> Research must deliver real-world impact.</li>
          <li><strong>Big win?</strong> The ACGA algorithm — accurate tracking that handles noise like a champ.</li>
          <li><strong>Why it matters?</strong> Turns complex tech into practical tools for Ghana\'s challenges.</li>
        </ul>
      </ARC_B.Callout>

      {/* Q&A callout */}
      <ARC_B.Callout title="Quick Q&A" variant="note">
        <dl style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: ink }}>
          <dt style={{ fontWeight: 600 }}>How long did the ACGA grind take?</dt>
          <dd style={{ margin: '2px 0 14px', color: muted }}>About eight months total of trial and error — months for datasets, weeks of non-stop runs.</dd>
          <dt style={{ fontWeight: 600 }}>Does he brag about citations?</dt>
          <dd style={{ margin: '2px 0 0', color: muted }}>Nope — quiet confidence. Just notes it\'s been cited multiple times.</dd>
        </dl>
      </ARC_B.Callout>
    </div>
  );
}
window.BodyCS = BodyCS;

function CodeBlock({ ink }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <div style={{ border: '1px solid ' + ink, margin: '0 0 22px', background: 'var(--tint-paper)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid ' + ink, padding: '8px 12px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>python</span>
        <button onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1200); }} style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', color: ink }}>{copied ? 'Copied' : 'Copy'}</button>
      </div>
      <pre style={{ margin: 0, padding: '14px 16px', fontFamily: 'var(--font-mono)', fontSize: 13.5, lineHeight: 1.6, color: '#111', overflowX: 'auto' }}>{`def acga_localize(signal, antennas):
    angle = estimate_aoa(signal, antennas)   # Angle of Arrival
    delay = estimate_tdoa(signal, antennas)  # Time Difference of Arrival
    return krylov_solve(angle, delay)        # efficient in noise`}</pre>
    </div>
  );
}

function Checkpoint({ ink }) {
  const [picked, setPicked] = React.useState(null);
  const correct = 1;
  const opts = ['ACGA fully replaces GPS everywhere', 'ACGA fills the gaps where GPS underperforms', 'ACGA only works in clean lab conditions'];
  return (
    <div style={{ border: '1px solid ' + ink, padding: 20, margin: '8px 0 26px' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ink, marginBottom: 12 }}>Checkpoint</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: ink, marginBottom: 14 }}>How does ACGA relate to GPS?</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {opts.map((o, i) => {
          const isPicked = picked === i;
          const show = picked !== null;
          const good = i === correct;
          return (
            <button key={i} onClick={() => setPicked(i)} style={{
              textAlign: 'left', fontFamily: 'var(--font-sans)', fontSize: 14, padding: '10px 14px', cursor: 'pointer',
              border: '1px solid ' + (show && good ? ink : isPicked ? ink : 'var(--hairline)'),
              background: show && good ? ink : 'transparent',
              color: show && good ? '#fff' : ink,
              fontWeight: show && good ? 600 : 400,
            }}>
              {o}{show && good ? '  ✓' : show && isPicked && !good ? '  ✕' : ''}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// --- Article 2: dense continuous prose ---
function BodyEng({ P }) {
  return (
    <div>
      {P('Curious, determined and ambitious, Elijah Kwaku Adutwum Boateng has made it his mission to utilize computing and intelligent machines to address real-world challenges. From early collaborations with researchers at Ashesi University and University of Ghana, the Ashesi Class of 2023 alum has continually drawn on the technical foundation he built at the university to solve day-to-day challenges that demand both theory and practical insight.', true)}
      {P('His capstone project on facial recognition systems marked a turning point in his academic career, demonstrating his ability to turn academic concepts into functional, real-world solutions. Driven by discomfort, curiosity, and a commitment to meaningful innovation, Elijah continues to deepen his knowledge in interactive machine intelligence as an Intelligent Computing master\'s student at Ashesi University.')}
      {P('His research focused on three components. First, detection: he addressed lighting challenges by improving the system\'s ability to locate faces accurately under varying lighting. Second, feature extraction: he improved the alignment of key facial landmarks using Google\'s FaceNet, a pretrained model that generates robust embeddings even when parts of the face are partially obscured. Finally, classification: he employed distance-based methods and Support Vector Machines (SVMs) to distinguish between individuals\' faces with higher precision. Although the system did not explicitly account for rapid real-time changes in lighting and pose, his final model still achieved roughly 95–96% accuracy.')}
      {P('Building on his capstone, Elijah is exploring the intersection of vision and language — "language-vision models" equipped to both see and understand. He notes existing GPT-based systems are often expensive and inaccessible, motivating him to develop cheaper, smaller, more efficient models that can run locally: a "low-cost, hospital in your pocket" that can listen, see, reduce consultation times, and provide accurate diagnosis for healthcare in Ghana.')}
      {P('Reflecting on his journey, Elijah emphasizes patience as a virtue in research. From professors like Dr. Govindha and Dr. Lumens he learned that thoughtful iteration and attention to detail often lead to more meaningful solutions. His "eureka moments" mainly arose from discomfort and frustration — his capstone was born in the middle of the night when his phone failed to recognize his face and unlock.')}
    </div>
  );
}
window.BodyEng = BodyEng;
