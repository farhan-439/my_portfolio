import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Copy, Github, Linkedin, Mail, Search, X } from 'lucide-react';
import joblinkDemo from '../assets/demo1.mp4';
import avianDemo from '../assets/demo2.mp4';
import tableTalkDemo from '../assets/demo3.mp4';
import traderDemo from '../assets/demo4.mp4';
import realEstateDemo from '../assets/demo5.mp4';
import resumeDemo from '../assets/demo6.mp4';
import './PortfolioContent.css';

type Project = {
  name: string;
  label: string;
  category: 'AI & ML' | 'Product' | 'Engineering' | 'Data';
  description: string;
  stack: string[];
  href?: string;
  video?: string;
  win?: string;
  story?: { problem: string; build: string; edge: string };
};

const projects: Project[] = [
  {
    name: 'AvianAlert', label: 'Agricultural AI · 2025', category: 'AI & ML', win: '1st place · Cornell Digital Agriculture Hackathon',
    description: 'Early poultry disease signals from sound and image analysis, surfaced in a zone-level monitoring dashboard.',
    stack: ['PyTorch', 'TensorFlow', 'CUDA', 'CNN', 'Audio'],
    href: 'https://github.com/farhan-439/avian_alert', video: avianDemo,
    story: {
      problem: 'Help farmers see potential flock illness sooner using signals already available on a farm.',
      build: 'A dual-stream CNN combines RGB frames with audio spectrograms. CUDA-optimized training and inference support the acoustic pipeline, with results surfaced in a monitoring dashboard.',
      edge: 'The resume reports 92% precision on farm anomaly detection. The public repository separately reports 91.38% audio accuracy and 100% sensitivity for its unhealthy class.'
    }
  },
  {
    name: 'MedStick', label: 'Offline medical AI · 2026', category: 'AI & ML', win: '1st place · Claude Hackathon',
    description: 'Medical guidance designed to run entirely on a device, with trusted retrieval and explicit safety checks.',
    stack: ['MedGemma 4B', 'llama.cpp', 'Node.js', 'Next.js', 'SQLite'],
    story: {
      problem: 'Make useful medical guidance available when connectivity and compute are limited.',
      build: 'Quantized MedGemma 4B runs on-device through llama.cpp with a vision projector and a token-streaming Node.js proxy. Keyword-scored SQLite retrieval searches WHO/MSF PDFs without an embedding model.',
      edge: 'A deterministic contraindication layer checks dosing safety between retrieval and generation, with the behavior pinned by CI tests.'
    }
  },
  {
    name: 'Kindred', label: 'Private local AI · 2026', category: 'AI & ML',
    description: 'An offline conversation memory system with evidence-linked facts, grounded recall, and a people graph.',
    stack: ['Bonsai', 'SQLite FTS5', 'Node.js', 'llama.cpp'],
    href: 'https://github.com/farhan-439/offline_agent'
  },
  {
    name: 'JobLink', label: 'Product · 2025', category: 'Product',
    description: 'A Gmail-connected AI job tracker that organizes applications; selected for Beta University.',
    stack: ['React', 'Flask', 'PostgreSQL', 'NLP', 'OAuth'],
    href: 'https://joblink.one', video: joblinkDemo
  },
  {
    name: 'TableTalk', label: 'Data product · 2025', category: 'Product',
    description: 'Restaurant review analysis combining collection, sentiment modeling, and clustering.',
    stack: ['Flask', 'Selenium', 'SQL', 'PCA'],
    href: 'https://github.com/Cornell-Data-Strategy/Project-Rest', video: tableTalkDemo
  },
  {
    name: 'OCaml Trader', label: 'Engineering · 2025', category: 'Engineering',
    description: 'A functional trading simulator with asynchronous market data, portfolios, and persistence.',
    stack: ['OCaml', 'Lwt', 'Financial APIs'],
    href: 'https://github.com/farhan-439/ocaml_trader', video: traderDemo
  },
  {
    name: 'Real Estate Agent Ranking', label: 'Applied ML · 2025', category: 'Data',
    description: 'MLS-based volume, growth, and efficiency features for agent recruiting insights.',
    stack: ['Python', 'scikit-learn', 'Pandas'],
    video: realEstateDemo
  },
  {
    name: 'Resume AI Matching', label: 'NLP · 2025', category: 'Product',
    description: 'Resume-to-job matching with skills, semantic similarity, and experience analysis.',
    stack: ['Python', 'TypeScript', 'NLP'],
    href: 'https://github.com/farhan-439/resume_job_scoring_engine', video: resumeDemo
  },
  {
    name: 'Rock–Paper–Scissors ML', label: 'Computer vision · 2025', category: 'AI & ML',
    description: 'A Siamese ResNet-34 solution with attention and staged fine-tuning; 6th of 94 teams.',
    stack: ['PyTorch', 'ResNet-34', 'Computer Vision'],
    href: 'https://github.com/farhan-439/ml_competition'
  },
  {
    name: 'SmartTrace', label: 'Algorithms · 2025', category: 'Engineering',
    description: 'Interactive image selection using weighted pixel graphs and Dijkstra pathfinding.',
    stack: ['Java', 'Dijkstra', 'Image Processing'],
    href: 'https://github.com/farhan-439/smart_trace'
  },
  {
    name: 'Walmart Sales Workshop', label: 'Teaching · 2026', category: 'Data',
    description: 'A hands-on retail data workshop from cleaning through four visual analyses.',
    stack: ['Pandas', 'NumPy', 'Matplotlib'],
    href: 'https://github.com/farhan-439/visualization_workshop'
  }
];

const roles = [
  { organization: 'Microsoft', title: 'Software Engineering Intern · Dynamics 365', date: 'May – Aug 2026', detail: 'Shipped a C# / TypeScript rule simulator that cut diagnosis from days to under five seconds. Designed Cosmos DB and SQL storage for 130K+ daily events, reducing storage 97%; built asynchronous Dataverse history and owned the feature-flagged rollout.' },
  { organization: 'Simulacrum', title: 'Software Engineering Intern', date: 'Jun – Aug 2025', detail: 'Built a distributed forecasting API for LSTM, Transformer, and XGBoost. Ran 500+ experiments, cut training time 40%, and deployed inference on Vertex AI with Docker and Kubernetes.' },
  { organization: 'Cornell University', title: 'Research Assistant · AEA Replication Lab', date: 'Aug 2025 – May 2026', detail: 'Reproduced R, Stata, and MATLAB pipelines on Linux clusters and automated validation. Parallelized cluster workflows, improving utilization 25%.' },
  { organization: 'Cornell University', title: 'Teaching Assistant · Machine Learning', date: 'Aug 2025 – Present', detail: 'Lead office hours and grading for 250+ students across two ML courses; author assignments and debug implementations live.' },
  { organization: 'BRAC bKash', title: 'Software Engineering Intern', date: 'Jun – Aug 2024', detail: 'Built a Spring Boot and DynamoDB reservation backend with concurrency control for 400+ users; load-tested REST services at 5K+ queries per day.' },
];
const categories = ['All', 'AI & ML', 'Product', 'Engineering', 'Data'] as const;
const searchStopWords = new Set(['a', 'an', 'and', 'at', 'about', 'did', 'do', 'for', 'in', 'is', 'me', 'my', 'of', 'on', 'show', 'the', 'to', 'what', 'where', 'which', 'who', 'with', 'you', 'your']);
const projectSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

type SearchItem = { kind: 'project' | 'role' | 'section'; title: string; detail: string; index?: number; id?: string; text: string };
const searchItems: SearchItem[] = [
  ...projects.map((project, index): SearchItem => ({ kind: 'project', title: project.name, detail: project.label, index, text: [project.name, project.label, project.category, project.description, project.win, ...project.stack, project.story?.problem, project.story?.build, project.story?.edge].filter(Boolean).join(' ').toLowerCase() })),
  ...roles.map((role, index): SearchItem => ({ kind: 'role', title: role.organization, detail: role.title, index, text: `${role.organization} ${role.title} ${role.date} ${role.detail}`.toLowerCase() })),
  { kind: 'section', title: 'About', detail: 'Cornell · Computer Science & Economics · May 2027', id: 'about', text: 'about farhan mashrur cornell computer science economics ai may 2027' },
  { kind: 'section', title: 'Research & leadership', detail: 'Cornell Data Strategy · TempusBench', id: 'more', text: 'research leadership cornell data strategy tempusbench neurips bert2s publication 25 developers 40 latency chess poker films bowling' },
  { kind: 'section', title: 'Recognition', detail: 'Economics Olympiad · Beta University · Valedictorian', id: 'awards', text: 'recognition awards honors economics olympiad bronze bangladesh beta university joblink valedictorian' },
  { kind: 'section', title: 'Contact', detail: 'Email · LinkedIn · GitHub', id: 'contact', text: 'contact email fm454 cornell linkedin github collaboration' },
  { kind: 'section', title: 'Earlier campus work', detail: 'JobLink · Cornell · campus organizations', id: 'experience', text: 'earlier campus work joblink co-founder full-stack engineer flask react postgresql nlp cornell student developer fintech club event services international student association' },
];

function PreviewVideo({ src, name }: { src: string; name: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.preload = 'auto';
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, { threshold: 0.1, rootMargin: '100px' });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return <video ref={videoRef} src={src} muted loop playsInline preload="none" controls aria-label={`${name} demo`} />;
}

export default function PortfolioContent() {
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const [sortByName, setSortByName] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeResult, setActiveResult] = useState(0);
  const [shareCopied, setShareCopied] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const rawTerms = searchQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const usefulTerms = rawTerms.filter(term => !searchStopWords.has(term));
  const terms = usefulTerms.length ? usefulTerms : rawTerms;
  const matches = terms.length ? searchItems.filter(item => terms.every(term => item.text.includes(term))) : [];
  const visibleProjectIndices = projects.map((_, index) => index).filter(index => category === 'All' || projects[index].category === category).sort((a, b) => sortByName ? projects[a].name.localeCompare(projects[b].name) : a - b);

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      const pastHero = entry.boundingClientRect.bottom <= 0;
      setIsPastHero(pastHero);
      if (!pastHero) setSearchOpen(false);
    }, { threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!searchContainerRef.current?.contains(event.target as Node)) setSearchOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setActiveProject(null); setSearchOpen(false); }
      if (isPastHero && ((event.key === '/' && !['INPUT', 'TEXTAREA'].includes((event.target as HTMLElement)?.tagName)) || ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k'))) {
        event.preventDefault();
        searchRef.current?.focus();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isPastHero]);

  const openSearchItem = (item: SearchItem) => {
    setSearchOpen(false);
    setSearchQuery('');
    setActiveResult(0);
    if (item.kind === 'project' && item.index !== undefined) {
      setCategory('All');
      setActiveProject(item.index);
      window.setTimeout(() => document.getElementById(`project-${projectSlug(projects[item.index!].name)}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0);
    }
    if (item.kind === 'role' && item.index !== undefined) {
      const role = document.getElementById(`role-${item.index}`) as HTMLDetailsElement | null;
      if (role) { role.open = true; role.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    }
    if (item.kind === 'section' && item.id) document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const openMail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = `mailto:fm454@cornell.edu?subject=${encodeURIComponent('Hello from your portfolio')}&body=${encodeURIComponent(message)}`;
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText('fm454@cornell.edu');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const copyProjectLink = async (index: number) => {
    await navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#project-${projectSlug(projects[index].name)}`);
    setShareCopied(true);
    window.setTimeout(() => setShareCopied(false), 1800);
  };

  return <main className="portfolio-body">
    <section className="intro-section portfolio-width" id="about">
      <div className="intro-overline"><span>FARHAN MASHRUR</span><span>CORNELL · MAY 2027</span></div>
      <div className="intro-layout"><h2>About me<span>.</span></h2><div><p>I study Computer Science and Economics at Cornell University. My work spans software engineering, machine learning, and research.</p><a href="#projects" className="inline-link">View projects <ArrowUpRight size={17}/></a></div></div>
    </section>

    <section className="projects-section" id="projects"><div className="portfolio-width">
      <div className="section-heading"><div><span className="section-marker">{String(projects.length).padStart(2, '0')} PROJECTS</span><h2>Projects<span>.</span></h2></div><a href="https://github.com/farhan-439" target="_blank" rel="noopener noreferrer" className="inline-link">All repositories <ArrowUpRight size={16}/></a></div>
      <div className="project-tools"><div className="project-category-tabs" role="group" aria-label="Filter projects by category">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}<span>{item === 'All' ? projects.length : projects.filter(project => project.category === item).length}</span></button>)}</div><button className="project-sort" type="button" onClick={() => setSortByName(value => !value)} aria-label={`Sort projects ${sortByName ? 'in featured order' : 'alphabetically'}`}>Sort: {sortByName ? 'A–Z' : 'Featured'} <ChevronDown size={14}/></button></div>
      <div className="all-projects">{visibleProjectIndices.map(index => { const project = projects[index]; const expanded = activeProject === index; return <article className={`project-tile ${expanded ? 'is-expanded' : ''}`} id={`project-${projectSlug(project.name)}`} key={project.name}>
        <div className="project-tile-media">{project.video ? <PreviewVideo src={project.video} name={project.name} /> : <button type="button" className="project-tile-placeholder" onClick={() => setActiveProject(expanded ? null : index)} aria-label={`${expanded ? 'Collapse' : 'Expand'} ${project.name} details`} aria-expanded={expanded}><span>{project.category}</span><strong>{project.name}</strong></button>}</div>
        <button type="button" className="project-tile-open" onClick={() => { setActiveProject(expanded ? null : index); setShareCopied(false); }} aria-label={`${expanded ? 'Collapse' : 'Expand'} ${project.name} details`} aria-expanded={expanded} aria-controls={`project-details-${index}`}><span className="project-tile-meta">{String(index + 1).padStart(2, '0')} / {project.label}</span><span className="project-tile-heading"><strong>{project.name}</strong><ChevronDown size={17}/></span><span className="project-tile-description">{project.description}</span>{project.win && <span className="project-tile-win">{project.win}</span>}</button>
        {expanded && <div className="project-inline-detail" id={`project-details-${index}`}><div className="project-detail-intro"><span className="section-marker">{project.label}</span><h3>{project.name}</h3><p>{project.description}</p>{project.win && <strong>{project.win}</strong>}</div><div className="project-detail-main">{project.story && <div className="project-detail-story"><div><strong>Problem</strong><p>{project.story.problem}</p></div><div><strong>Approach</strong><p>{project.story.build}</p></div><div><strong>Result</strong><p>{project.story.edge}</p></div></div>}<div className="project-detail-stack"><strong>TECH STACK</strong><div>{project.stack.map(item => <span key={item}>{item}</span>)}</div></div><div className="project-detail-links">{project.href && <a href={project.href} target="_blank" rel="noopener noreferrer">View project <ArrowUpRight size={16}/></a>}<button type="button" onClick={() => { void copyProjectLink(index); }}>{shareCopied ? <Check size={15}/> : <Copy size={15}/>} {shareCopied ? 'Copied link' : 'Copy link'}</button></div></div></div>}
      </article> })}</div>
    </div></section>

    <section className="experience-section portfolio-width" id="experience"><div className="section-heading"><div><span className="section-marker">WORK HISTORY</span><h2>Experience<span>.</span></h2></div></div><div className="role-list">{roles.map((role, index) => <details className="role-item" id={`role-${index}`} key={role.organization + role.title}><summary><span className="role-org">{role.organization}</span><span className="role-title">{role.title}</span><time>{role.date}</time><ChevronDown size={17}/></summary><p>{role.detail}</p></details>)}</div><details className="more-experience"><summary>Earlier product and campus work <span>+</span></summary><div><p><strong>JobLink / Co-Founder and Full-Stack Engineer.</strong> Built a Gmail-connected job tracker with Flask, React, PostgreSQL, and NLP.</p><p><strong>Cornell / Student Developer.</strong> Built conference, housing, and event systems.</p><p><strong>Cornell Fintech Club, Event Services, and International Student Association.</strong> Contributed to software and campus events.</p></div></details></section>

    <section className="more-section" id="more"><div className="portfolio-width more-grid"><div><span className="section-marker">CORNELL & BEYOND</span><h2>Research &amp; leadership<span>.</span></h2></div><div className="more-items"><article><span>LEADERSHIP</span><h3>Cornell Data Strategy</h3><p>As VP of Technology, I lead 25+ developers across three pods. I standardized code review, CI/CD, and DevOps practices and helped cut pipeline latency 40%.</p></article><article><span>PUBLICATION</span><h3>TempusBench</h3><p>Co-authored a benchmark for time-series foundation models, accepted to the NeurIPS 2025 BERT2S workshop.</p></article><article><span>INTERESTS</span><h3>Outside work</h3><p>Chess, poker, films, and bowling. <em>12 Angry Men</em> is a favorite.</p></article></div></div></section>

    <section className="recognition-section portfolio-width" id="awards"><div className="section-heading"><div><span className="section-marker">HONORS</span><h2>Recognition<span>.</span></h2></div></div><div className="recognition-list"><div><span>2× BRONZE</span><strong>International Economics Olympiad</strong><p>Represented Bangladesh internationally.</p></div><div><span>2025</span><strong>Beta University</strong><p>JobLink selected for the accelerator.</p></div><div><span>2023</span><strong>Valedictorian</strong><p>Highest academic honors in high school.</p></div></div></section>

    <section className="contact-section" id="contact"><div className="portfolio-width"><div className="contact-heading"><span className="section-marker">CONTACT</span><h2>Contact<span>.</span></h2><p>Email me about engineering, research, or collaboration.</p></div><div className="contact-grid"><div className="social-links"><a href="mailto:fm454@cornell.edu"><Mail size={17}/> Email</a><button type="button" onClick={() => { void copyEmail(); }}>{copied ? <Check size={17}/> : <Copy size={17}/>} {copied ? 'Copied' : 'Copy email'}</button><a href="https://www.linkedin.com/in/farhanmashrur/" target="_blank" rel="noopener noreferrer"><Linkedin size={17}/> LinkedIn</a><a href="https://github.com/farhan-439" target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub</a></div><form onSubmit={openMail}><label htmlFor="portfolio-message">OR WRITE A NOTE</label><textarea id="portfolio-message" placeholder="Tell me what you're working on..." value={message} onChange={event => setMessage(event.target.value)} required/><button type="submit">OPEN EMAIL DRAFT <ArrowUpRight size={17}/></button></form></div><footer><span>© {new Date().getFullYear()} Farhan Mashrur</span><a href="#top">Back to top ↑</a></footer></div></section>

    {isPastHero && <div className={`site-search ${searchOpen ? 'is-open' : ''}`} ref={searchContainerRef}>
      {searchOpen && <div className="site-search-results" id="site-search-results" aria-live="polite">{terms.length ? matches.length ? <><div className="search-results-label">{matches.length} {matches.length === 1 ? 'RESULT' : 'RESULTS'} FOR “{searchQuery.trim()}”</div>{matches.map((item, index) => <button type="button" className={activeResult === index ? 'is-active' : ''} key={`${item.kind}-${item.index ?? item.id}-${index}`} onMouseEnter={() => setActiveResult(index)} onClick={() => openSearchItem(item)}><span className="result-kind">{item.kind}</span><span className="result-copy"><strong>{item.title}</strong><small>{item.detail}</small></span><ArrowUpRight size={16}/></button>)}</> : <p className="search-empty">No matches. Try a project, company, skill, or award.</p> : <div className="search-suggestions"><span>QUICK SEARCH</span>{['Hackathon', 'Microsoft', 'PyTorch', 'Cornell'].map(term => <button key={term} type="button" onClick={() => { setSearchQuery(term); setActiveResult(0); searchRef.current?.focus(); }}>{term}</button>)}</div>}</div>}
      <form role="search" className="site-search-form" onSubmit={event => { event.preventDefault(); if (matches[activeResult]) openSearchItem(matches[activeResult]); }}><Search size={17} aria-hidden="true"/><input ref={searchRef} type="search" value={searchQuery} onChange={event => { setSearchQuery(event.target.value); setActiveResult(0); setSearchOpen(true); }} onFocus={() => setSearchOpen(true)} onKeyDown={event => { if (event.key === 'ArrowDown' && matches.length) { event.preventDefault(); setActiveResult(index => (index + 1) % matches.length); } if (event.key === 'ArrowUp' && matches.length) { event.preventDefault(); setActiveResult(index => (index - 1 + matches.length) % matches.length); } }} placeholder="Search projects, roles, skills…" aria-label="Search this portfolio" aria-controls="site-search-results" aria-expanded={searchOpen}/>{searchQuery ? <button className="search-clear" type="button" onClick={() => { setSearchQuery(''); setActiveResult(0); searchRef.current?.focus(); }} aria-label="Clear search"><X size={15}/></button> : <span className="search-shortcut">/</span>}<button className="search-submit" type="submit" aria-label="Open selected search result" disabled={!matches.length}><ArrowRight size={16}/></button></form>
    </div>}
  </main>;
}
