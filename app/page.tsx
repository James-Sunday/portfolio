import Link from 'next/link';
import {projects} from '@/lib/projects';

const capabilities=[
  {number:'01',title:'AI systems',description:'Grounded and governed model behavior.',skills:['LLM integration','RAG','Embeddings','Hybrid retrieval','Agentic workflows','Structured outputs','Evaluation & regression gates','Human-in-the-loop AI']},
  {number:'02',title:'Backend & data',description:'Typed services and durable application state.',skills:['Python','FastAPI','Pydantic','SQLAlchemy','Alembic','Async workflows','REST APIs','PostgreSQL','pgvector','Redis']},
  {number:'03',title:'Safety & reliability',description:'Explicit boundaries around probabilistic systems.',skills:['RBAC','Multi-tenant isolation','OIDC & JWT','Audit trails','Idempotency','Rate limiting','Prompt-injection defense','Failure recovery']},
  {number:'04',title:'Cloud & delivery',description:'Reproducible builds with operational visibility.',skills:['Docker','Docker Compose','CI/CD','GitHub Actions','OpenTelemetry','Prometheus','Azure architecture','Kubernetes']},
  {number:'05',title:'Product engineering',description:'Usable interfaces around complex systems.',skills:['Next.js','React','TypeScript','API integration','Responsive UI','Technical documentation']},
  {number:'06',title:'Applied ML',description:'Additional engineering depth beyond language models.',skills:['NumPy','Computer vision','Temporal smoothing','Kalman filtering','Deterministic metrics','Synthetic evaluation data']}
];

export default function Home(){
  const featured=projects.slice(1,6);
  return <main>
    <section className="home-hero">
      <div className="page home-hero-grid">
        <div className="hero-main">
          <div className="hero-identity"><strong>James Sunday Akam</strong><div className="availability"><span/>Senior AI/ML Engineer · Abuja, Nigeria</div></div>
          <h1>Engineering AI<br/>that works <em>beyond</em><br/>the model call.</h1>
          <p>I design and build production AI systems across LLMs, retrieval, agents, backend services, evaluation, security, cloud infrastructure and reliability.</p>
          <div className="actions"><Link className="button hero-primary" href="/projects">Explore the work <span>↗</span></Link><Link className="button hero-secondary" href="/contact">Start a conversation</Link></div>
        </div>
        <aside className="engineering-map" aria-label="Production AI system layers">
          <div className="map-head"><span>Production AI system</span><i>Operational</i></div>
          <div className="map-core"><p>Model boundary</p><strong>Grounded intelligence</strong><small>Provider abstraction · retrieval · structured output</small></div>
          <div className="map-grid"><div><span>01</span><b>APIs</b><small>Typed contracts</small></div><div><span>02</span><b>Data</b><small>Durable state</small></div><div><span>03</span><b>Control</b><small>Policy + approval</small></div><div><span>04</span><b>Evidence</b><small>Evals + telemetry</small></div></div>
          <div className="map-foot"><span>Deterministic guardrails</span><span>Human authority</span></div>
        </aside>
      </div>
      <div className="page hero-proof"><div><strong>11</strong><span>documented engineering projects</span></div><div><strong>10</strong><span>public source repositories</span></div><div><strong>01</strong><span>live flagship product</span></div><p>Every public claim is tied to implemented or directly observable evidence.</p></div>
    </section>

    <section className="flagship flagship-premium"><div className="page flagship-grid">
      <div className="flagship-copy"><p className="kicker inverse">01 · Flagship product</p><h2>ConverlyAI</h2><p>AI support agents grounded in business-owned knowledge—configured, tested, deployed to a website and operated through a conversation workspace.</p><ul className="flagship-features"><li>Knowledge sources</li><li>Agent configuration</li><li>Pre-launch playground</li><li>Website widget</li><li>Conversation review</li><li>Human handoff</li></ul><div className="actions"><Link className="button mint" href="/projects/converlyai">Read the case study</Link><a className="quiet-link" href="https://converlyai.com/">Open live product ↗</a></div></div>
      <div className="system-card elevated"><div className="system-top"><span>ConverlyAI / Agent workspace</span><b><i/> Live</b></div><div className="agent-preview"><div className="agent-sidebar"><span/><span/><span/><span/></div><div className="agent-body"><small>AGENT OVERVIEW</small><h3>Support assistant</h3><div className="agent-stat"><span>Knowledge</span><b>Sources connected</b><i>Ready</i></div><div className="agent-stat"><span>Behavior</span><b>Instructions configured</b><i>Ready</i></div><div className="agent-chat"><p>How can I help your customer?</p><span>Grounded answer preview</span></div></div></div><small className="visual-note">Interface abstraction based on verified public capabilities—not a fabricated product screenshot.</small></div>
    </div></section>

    <section className="page section work-section"><div className="section-title"><div><p className="kicker">Selected systems</p><h2>Built as evidence.</h2><p className="section-intro">Each project isolates a production concern: grounded retrieval, durable agents, governed decisions, document evidence or safe support.</p></div><Link href="/projects">All 11 projects →</Link></div><div className="featured-grid featured-refined">{featured.map(project=><Link href={`/projects/${project.slug}`} className="featured-card" key={project.slug}><span>{String(project.order).padStart(2,'0')} · {project.category}</span><h3>{project.name}</h3><p>{project.short}</p><div>{project.stack.slice(0,3).map(item=><i key={item}>{item}</i>)}</div><b>View engineering case ↗</b></Link>)}</div></section>

    <section className="skills-section" id="skills"><div className="page"><div className="skills-heading"><div><p className="kicker inverse">Technical capabilities</p><h2>A complete production<br/>AI engineering stack.</h2></div><p>Skills are grouped by system responsibility and backed by the projects in this portfolio—not presented as an unqualified keyword cloud.</p></div><div className="capability-grid">{capabilities.map(group=><article key={group.number}><div className="capability-title"><span>{group.number}</span><div><h3>{group.title}</h3><p>{group.description}</p></div></div><ul>{group.skills.map(skill=><li key={skill}>{skill}</li>)}</ul></article>)}</div></div></section>

    <section className="page principles principle-refined"><p className="kicker">Engineering position</p><h2>Use deterministic software where it is sufficient. Introduce probabilistic systems only where they add measurable value.</h2><div><p>Ground factual generation.</p><p>Constrain every tool.</p><p>Design failure paths first.</p><p>Keep people in control.</p></div></section>
    <section className="contact-cta"><div className="page"><p className="kicker inverse">Build responsibly</p><h2>Need an AI system that has to work outside the demo?</h2><Link className="button mint" href="/contact">Let’s talk about the system ↗</Link></div></section>
  </main>
}
