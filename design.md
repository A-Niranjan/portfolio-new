<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>InstaCut — Case Study</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --black: #000000;
    --white: #ffffff;
    --mid: #888888;
    --light: #e8e8e8;
    --lighter: #f5f5f5;
  }

  html { font-size: 16px; }

  body {
    background: var(--white);
    color: var(--black);
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Layout ── */
  .container {
    max-width: 760px;
    margin: 0 auto;
    padding: 0 32px;
  }

  /* ── Sections ── */
  section {
    padding: 80px 0;
    border-top: 1px solid var(--light);
  }

  section:first-of-type { border-top: none; }

  /* ── Eyebrow label ── */
  .eyebrow {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--mid);
    margin-bottom: 32px;
    display: block;
  }

  /* ── Display heading ── */
  h2 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(28px, 5vw, 40px);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.01em;
    margin-bottom: 28px;
  }

  h3 {
    font-family: 'DM Serif Display', serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 12px;
    margin-top: 48px;
  }

  h3:first-of-type { margin-top: 0; }

  p {
    font-size: 15px;
    color: #1a1a1a;
    line-height: 1.8;
    margin-bottom: 16px;
  }

  p:last-child { margin-bottom: 0; }

  /* ── Overview strip ── */
  .meta-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border: 1px solid var(--light);
    margin-bottom: 80px;
  }

  .meta-item {
    padding: 24px 28px;
    border-right: 1px solid var(--light);
  }

  .meta-item:last-child { border-right: none; }

  .meta-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--mid);
    display: block;
    margin-bottom: 6px;
  }

  .meta-value {
    font-size: 14px;
    font-weight: 400;
    color: var(--black);
    line-height: 1.4;
  }

  /* ── Problem list ── */
  .friction-list {
    list-style: none;
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .friction-list li {
    font-size: 15px;
    color: #1a1a1a;
    padding: 16px 0;
    border-bottom: 1px solid var(--lighter);
    display: flex;
    align-items: flex-start;
    gap: 16px;
    line-height: 1.6;
  }

  .friction-list li::before {
    content: '—';
    color: var(--mid);
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* ── Insight cards ── */
  .insights {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 28px;
  }

  .insight {
    padding: 32px 0;
    border-bottom: 1px solid var(--light);
  }

  .insight:last-child { border-bottom: none; }

  .insight-num {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--mid);
    margin-bottom: 10px;
    display: block;
  }

  .insight-title {
    font-family: 'DM Serif Display', serif;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .insight p {
    font-size: 14px;
    color: #444;
  }

  /* ── HMW callout ── */
  .hmw {
    background: var(--black);
    color: var(--white);
    padding: 48px 52px;
    margin: 48px 0 0;
  }

  .hmw-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #888;
    display: block;
    margin-bottom: 20px;
  }

  .hmw-text {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(20px, 4vw, 28px);
    font-weight: 400;
    line-height: 1.35;
    color: var(--white);
    font-style: italic;
  }

  /* ── Conversation examples ── */
  .prompts {
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .prompt {
    background: var(--lighter);
    padding: 16px 20px;
    font-size: 14px;
    color: #1a1a1a;
    line-height: 1.5;
    font-style: italic;
  }

  /* ── Flow ── */
  .flow {
    display: flex;
    align-items: center;
    gap: 0;
    margin-top: 40px;
    flex-wrap: wrap;
    row-gap: 4px;
  }

  .flow-step {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--black);
    white-space: nowrap;
  }

  .flow-arrow {
    font-size: 12px;
    color: var(--mid);
    margin: 0 14px;
  }

  /* ── Features grid ── */
  .features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--light);
    border: 1px solid var(--light);
    margin-top: 28px;
  }

  .feature-cell {
    background: var(--white);
    padding: 28px 28px 32px;
  }

  .feature-name {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--mid);
    margin-bottom: 10px;
    display: block;
  }

  .feature-desc {
    font-family: 'DM Serif Display', serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.4;
    color: var(--black);
  }

  /* ── Interface panels ── */
  .panels {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border: 1px solid var(--light);
    margin-top: 28px;
  }

  .panel-item {
    padding: 28px 24px;
    border-right: 1px solid var(--light);
  }

  .panel-item:last-child { border-right: none; }

  .panel-name {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--black);
    margin-bottom: 10px;
    display: block;
  }

  .panel-desc {
    font-size: 13px;
    color: #555;
    line-height: 1.6;
  }

  /* ── Decisions ── */
  .decisions {
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .decision {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 40px;
    padding: 28px 0;
    border-bottom: 1px solid var(--lighter);
    align-items: start;
  }

  .decision:last-child { border-bottom: none; }

  .decision-label {
    font-family: 'DM Serif Display', serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.3;
    padding-top: 2px;
  }

  .decision-desc {
    font-size: 14px;
    color: #444;
    line-height: 1.75;
    margin: 0;
  }

  /* ── Learnings ── */
  .learnings {
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 0;
    border: 1px solid var(--light);
  }

  .learning {
    padding: 24px 28px;
    border-bottom: 1px solid var(--light);
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  .learning:last-child { border-bottom: none; }

  .learning-dot {
    width: 6px;
    height: 6px;
    background: var(--black);
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 8px;
  }

  .learning-text {
    font-size: 15px;
    color: #1a1a1a;
    line-height: 1.7;
    margin: 0;
  }

  /* ── Reflection ── */
  .reflection-quote {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(22px, 4vw, 34px);
    font-weight: 400;
    line-height: 1.3;
    font-style: italic;
    color: var(--black);
    border-left: 2px solid var(--black);
    padding-left: 32px;
    margin-top: 28px;
  }

  /* ── Footer nav ── */
  .case-footer {
    padding: 60px 0;
    border-top: 1px solid var(--light);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-back {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--black);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .footer-back:hover { opacity: 0.5; }

  .footer-label {
    font-size: 12px;
    color: var(--mid);
    font-weight: 300;
  }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .container { padding: 0 20px; }
    section { padding: 56px 0; }
    .meta-strip { grid-template-columns: 1fr; }
    .meta-item { border-right: none; border-bottom: 1px solid var(--light); }
    .meta-item:last-child { border-bottom: none; }
    .features-grid { grid-template-columns: 1fr; }
    .panels { grid-template-columns: 1fr; }
    .panel-item { border-right: none; border-bottom: 1px solid var(--light); }
    .panel-item:last-child { border-bottom: none; }
    .decision { grid-template-columns: 1fr; gap: 8px; }
    .hmw { padding: 36px 28px; }
    .flow { gap: 0; }
    .flow-arrow { margin: 0 8px; }
  }

  @media (prefers-reduced-motion: no-preference) {
    section { opacity: 0; transform: translateY(18px); transition: opacity 0.5s ease, transform 0.5s ease; }
    section.visible { opacity: 1; transform: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    section { opacity: 1; transform: none; }
  }
</style>
</head>
<body>

<div class="container">

  <!-- Meta -->
  <div class="meta-strip">
    <div class="meta-item">
      <span class="meta-label">Role</span>
      <span class="meta-value">Product Designer · Co-Founder</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Duration</span>
      <span class="meta-value">2025</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Team</span>
      <span class="meta-value">Kishore · Niranjan</span>
    </div>
  </div>

  <!-- Overview -->
  <section>
    <span class="eyebrow">Overview</span>
    <h2>Editing through conversation</h2>
    <p>Video editing is still one of the biggest bottlenecks in content creation. While AI has made editing faster, most tools either automate too little or take away too much control.</p>
    <p>InstaCut explores a different approach — letting creators edit videos simply by describing what they want. Instead of navigating complex timelines and menus, users interact with an AI assistant that understands editing intent and performs the work automatically.</p>
  </section>

  <!-- Problem -->
  <section>
    <span class="eyebrow">The Problem</span>
    <h2>Powerful tools, overwhelming experience</h2>
    <p>Modern video editors are built for professionals. Solo creators who publish regularly face a different kind of challenge — not complexity, but repetition.</p>

    <ul class="friction-list">
      <li>Time lost removing pauses, filler words, and repetitive mistakes</li>
      <li>Complex interfaces that demand technical editing knowledge</li>
      <li>Re-applying the same editing style across every video from scratch</li>
      <li>Exporting the same content separately for each social platform</li>
    </ul>

    <div class="hmw">
      <span class="hmw-label">Design Question</span>
      <p class="hmw-text">How might we reduce editing time while keeping creators in control of the final output?</p>
    </div>
  </section>

  <!-- Research -->
  <section>
    <span class="eyebrow">Research</span>
    <h2>Three things that kept coming up</h2>
    <p>I explored existing editing workflows, AI video tools, and creator communities to understand how people currently edit content. Three patterns emerged consistently.</p>

    <div class="insights">
      <div class="insight">
        <span class="insight-num">Finding 01</span>
        <p class="insight-title">Editing is repetitive work, not creative work</p>
        <p>Most editing time isn't spent making creative decisions. It's spent trimming silences, adding captions, creating jump cuts, and resizing for each platform — over and over.</p>
      </div>
      <div class="insight">
        <span class="insight-num">Finding 02</span>
        <p class="insight-title">Interfaces create friction before any edit is made</p>
        <p>Traditional editing software exposes every professional control upfront. For everyday creators, that learning curve is a wall, not a ramp.</p>
      </div>
      <div class="insight">
        <span class="insight-num">Finding 03</span>
        <p class="insight-title">Creators have a style — AI tools ignore it</p>
        <p>Creators develop consistent pacing, transitions, and caption styles over time. Existing AI tools generate generic edits instead of adapting to what a person has already built.</p>
      </div>
    </div>
  </section>

  <!-- Solution -->
  <section>
    <span class="eyebrow">Solution</span>
    <h2>Replace the workflow with a conversation</h2>
    <p>InstaCut replaces complicated editing workflows with natural language. Users upload a video and simply describe the result they want.</p>

    <div class="prompts">
      <div class="prompt">"Remove all pauses and add captions."</div>
      <div class="prompt">"Turn this into a 30-second Instagram Reel."</div>
      <div class="prompt">"Use my usual editing style and export for YouTube Shorts."</div>
    </div>

    <div class="flow" style="margin-top: 48px;">
      <span class="flow-step">Upload</span>
      <span class="flow-arrow">→</span>
      <span class="flow-step">Describe</span>
      <span class="flow-arrow">→</span>
      <span class="flow-step">Generate</span>
      <span class="flow-arrow">→</span>
      <span class="flow-step">Review</span>
      <span class="flow-arrow">→</span>
      <span class="flow-step">Export</span>
    </div>
  </section>

  <!-- Features -->
  <section>
    <span class="eyebrow">Core Features</span>
    <h2>What the product actually does</h2>

    <div class="features-grid">
      <div class="feature-cell">
        <span class="feature-name">AI Editing Assistant</span>
        <p class="feature-desc">Edit videos using natural language. No menus, no timelines to learn.</p>
      </div>
      <div class="feature-cell">
        <span class="feature-name">Smart Automation</span>
        <p class="feature-desc">Silence removal, jump cuts, captions, zooms, B-roll, and multi-platform exports.</p>
      </div>
      <div class="feature-cell">
        <span class="feature-name">Style Memory</span>
        <p class="feature-desc">Remembers pacing, transitions, and caption preferences. Gets better over time.</p>
      </div>
      <div class="feature-cell">
        <span class="feature-name">Everywhere Export</span>
        <p class="feature-desc">One video, every format. Presets for YouTube, Reels, Shorts, and TikTok.</p>
      </div>
    </div>
  </section>

  <!-- Interface -->
  <section>
    <span class="eyebrow">Interface Design</span>
    <h2>Three panels, one focus</h2>
    <p>The workspace balances AI interaction with familiar editing concepts — without overwhelming either side.</p>

    <div class="panels">
      <div class="panel-item">
        <span class="panel-name">Media Panel</span>
        <p class="panel-desc">Manage uploaded videos, assets, and project files in one place.</p>
      </div>
      <div class="panel-item">
        <span class="panel-name">Preview Window</span>
        <p class="panel-desc">Review edits in real time without leaving the conversation.</p>
      </div>
      <div class="panel-item">
        <span class="panel-name">AI Workspace</span>
        <p class="panel-desc">Type instructions, review suggestions, and iterate naturally through dialogue.</p>
      </div>
    </div>
  </section>

  <!-- Design Decisions -->
  <section>
    <span class="eyebrow">Design Decisions</span>
    <h2>The thinking behind the choices</h2>

    <div class="decisions">
      <div class="decision">
        <p class="decision-label">Conversation over complexity</p>
        <p class="decision-desc">Instead of forcing users to learn editing terminology, the interface understands everyday language. Anyone who can describe what they want can edit a video.</p>
      </div>
      <div class="decision">
        <p class="decision-label">AI with human control</p>
        <p class="decision-desc">Automation speeds up the work, but creators always review, refine, and approve the final result. The AI never makes irreversible changes without confirmation.</p>
      </div>
      <div class="decision">
        <p class="decision-label">Minimal visual hierarchy</p>
        <p class="decision-desc">A distraction-free dark interface keeps the user's attention on the content — not on the software. The tool disappears when it's working well.</p>
      </div>
    </div>
  </section>

  <!-- Challenges -->
  <section>
    <span class="eyebrow">Challenges</span>
    <h2>Balancing automation with trust</h2>
    <p>The biggest design challenge wasn't making the AI capable — it was making it trustworthy. Users needed confidence that an automated system wouldn't make changes they couldn't undo or understand.</p>
    <p>This shaped the entire workflow: previews before commits, editable results at every step, and conversational iteration rather than one-click automation. The AI becomes a collaborator, not a black box.</p>
  </section>

  <!-- Learnings -->
  <section>
    <span class="eyebrow">What I Learned</span>
    <h2>Designing for AI taught me more than AI</h2>

    <div class="learnings">
      <div class="learning">
        <div class="learning-dot"></div>
        <p class="learning-text">Automation alone isn't enough — great AI experiences explain their actions and preserve user control.</p>
      </div>
      <div class="learning">
        <div class="learning-dot"></div>
        <p class="learning-text">Reducing complexity doesn't mean hiding functionality. It means surfacing the right thing at the right moment.</p>
      </div>
      <div class="learning">
        <div class="learning-dot"></div>
        <p class="learning-text">When conversation becomes the primary interface, the rules of interaction design shift entirely — words carry the weight that UI components used to.</p>
      </div>
    </div>
  </section>

  <!-- Reflection -->
  <section>
    <span class="eyebrow">Reflection</span>
    <h2>What this pointed toward</h2>
    <p>InstaCut is a bet that the future of creative tools isn't more buttons — it's better dialogue. The shift from UI-first to conversation-first changes not just the interface, but the relationship between a creator and their tools.</p>

    <blockquote class="reflection-quote">
      Rather than replacing creativity, the product removes repetitive work so creators can spend more time telling better stories.
    </blockquote>
  </section>

  <!-- Footer -->
  <div class="case-footer">
    <a href="#" class="footer-back">← Back to Work</a>
    <span class="footer-label">InstaCut · 2025</span>
  </div>

</div>

<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.08 });

  document.querySelectorAll('section').forEach(s => observer.observe(s));
</script>

</body>
</html>