import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, Copy, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import joblinkDemo from '../assets/demo1-preview.mp4';
import avianDemo from '../assets/demo2.mp4';
import tableTalkDemo from '../assets/demo3.mp4';
import traderDemo from '../assets/demo4.mp4';
import realEstateDemo from '../assets/demo5-preview.mp4';
import resumeDemo from '../assets/demo6-preview.mp4';
import pebbleDemo from '../assets/pebble-demo.mp4';
import maternalPreview from '../assets/maternal-preview.mp4';
import './PortfolioContent.css';

type Project = {
  name: string;
  label: string;
  category: 'AI & ML' | 'Product' | 'Engineering' | 'Data';
  description: string;
  stack: string[];
  href?: string;
  demoHref?: string;
  eventHref?: string;
  video?: string;
  win?: string;
  story?: { problem: string; build: string; edge: string };
};

const projects: Project[] = [
  {
    name: 'Cornell Digital Ag Hackathon', label: 'Agricultural AI · 2025', category: 'AI & ML', win: '1st place · Cornell Digital Agriculture Hackathon',
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
    href: 'https://devpost.com/software/medstick', demoHref: 'https://youtu.be/tSVXw5g-zuo',
    story: {
      problem: 'Make useful medical guidance available when connectivity and compute are limited.',
      build: 'Quantized MedGemma 4B runs on-device through llama.cpp with a vision projector and a token-streaming Node.js proxy. Keyword-scored SQLite retrieval searches WHO/MSF PDFs without an embedding model.',
      edge: 'A deterministic contraindication layer checks dosing safety between retrieval and generation, with the behavior pinned by CI tests.'
    }
  },
  {
    name: 'Maternal', label: 'Qatar precision health · 2025', category: 'Product', win: 'Selected - International Hackathon by Cornell',
    description: 'A postpartum depression screening prototype built with medical students in Doha after Cornell selected me for its Precision Health AI Hackathon.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Local storage'],
    href: 'https://github.com/farhan-439/postpartum_web',
    eventHref: 'https://hackathon.cornell.edu/qatar', video: maternalPreview,
    story: {
      problem: 'Explore earlier postpartum depression risk screening with clinicians and medical students.',
      build: 'The public prototype has consent and patient onboarding, baseline and weekly questionnaires, rule-based risk scores, and patient and clinician dashboards.',
      edge: 'Cornell selected me to join computer science and Weill Cornell Medicine-Qatar medical students in Doha. The public repository is a frontend prototype, not a clinically validated prediction model.'
    }
  },
  {
    name: 'Pebble', label: 'Multilingual local AI · 2026', category: 'AI & ML',
    description: 'Offline multilingual conversation memory that retrieves beyond a model’s context window and cites the original speech.',
    stack: ['Argmax', 'Bonsai 4B', 'SQLite FTS5', 'Swift', 'Node.js', 'Electron'],
    href: 'https://github.com/farhan-439/offline_agent',
    demoHref: pebbleDemo, video: pebbleDemo,
    story: {
      problem: 'Keep useful details from conversations available across languages and over time without sending private speech to a cloud service.',
      build: 'Argmax transcribes and separates speakers; multilingual Whisper retains original speech alongside English translations. Bonsai extracts evidence-linked facts into layered SQLite memory, then pages relevant records into a bounded context during recall.',
      edge: 'Answers cite the utterances, clips or photos used. The desktop app also supports live translation and spoken replies in four tested languages.'
    }
  },
  {
    name: 'JobLink', label: 'Product · 2025', category: 'Product',
    description: 'A Gmail-connected AI job tracker that organizes applications and keeps status changes in one place.',
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
  { organization: 'Microsoft', title: 'Software Engineering Intern · Dynamics 365', date: 'May – Aug 2026', detail: 'Shipped a C# / TypeScript full-stack product that cut diagnosis from days to under five seconds. Designed Cosmos DB and SQL storage for 130K+ daily events, built asynchronous Dataverse history, and owned the feature-flagged rollout.' },
  { organization: 'Simulacrum', title: 'Software Engineering Intern', date: 'Jun – Aug 2025', detail: 'Built a distributed forecasting API for LSTM, Transformer, and XGBoost. Ran 500+ experiments, cut training time 40%, and deployed inference on Vertex AI with Docker and Kubernetes.', publication: 'Co-authored TempusBench, a time-series foundation model benchmark accepted to the NeurIPS 2025 BERT2S workshop.' },
  { organization: 'Cornell University', title: 'Research Assistant · AEA Replication Lab', date: 'Aug 2025 – May 2026', detail: 'Reproduced published results for economics journals.' },
  { organization: 'Cornell University', title: 'Teaching Assistant · Machine Learning', date: 'Aug 2025 – Present', detail: 'Lead office hours and grading for 250+ students across two ML courses; author assignments and debug implementations live.' },
  { organization: 'BRAC bKash', title: 'Software Engineering Intern', date: 'Jun – Aug 2024', detail: 'Built a reservation backend with Spring Boot and DynamoDB, using concurrency controls and load testing to keep the service reliable under demand.' },
];
const logoFor = (organization: string) => `https://www.google.com/s2/favicons?domain=${organization === 'Microsoft' ? 'microsoft.com' : organization === 'Simulacrum' ? 'smlcrm.com' : organization === 'BRAC bKash' ? 'bkash.com' : 'cornell.edu'}&sz=128`;
const categories = ['All', 'AI & ML', 'Product', 'Engineering', 'Data'] as const;
const projectSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

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
  const conceptPreview = name === 'Maternal';
  return <video ref={videoRef} src={src} muted loop playsInline preload="none" aria-label={`${name} ${conceptPreview ? 'animated concept preview' : 'demo'}`} />;
}

function YouTubePreview({ id, name }: { id: string; name: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nearby, setNearby] = useState(false);
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setNearby(true); }, { rootMargin: '250px' });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);
  return <div className="pebble-video" ref={containerRef}>{nearby ? <iframe title={`${name} demo`} src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1&controls=0&rel=0`} allow="autoplay; encrypted-media; picture-in-picture" loading="lazy" tabIndex={-1}/> : <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={`${name} video preview`} loading="lazy"/>}</div>;
}

function ContactRobot() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches);
  useEffect(() => {
    const media = window.matchMedia('(max-width: 760px)');
    const update = () => setIsMobile(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  if (isMobile) return null;
  return <div className="contact-robot" aria-label="Interactive robot">{(
    // @ts-expect-error Spline viewer is a custom element.
    <spline-viewer loading="eager" url="https://prod.spline.design/WIl33gpqqNooodtF/scene.splinecode" style={{ width: '100%', height: '100%' }}/>
  )}</div>;
}

export default function PortfolioContent() {
  const [copied, setCopied] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const [sortByName, setSortByName] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const visibleProjectIndices = projects.map((_, index) => index).filter(index => category === 'All' || projects[index].category === category).sort((a, b) => sortByName ? projects[a].name.localeCompare(projects[b].name) : a - b);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

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
      <div className="intro-layout"><h2>Hey, I’m Farhan<span>.</span></h2><div><p>I’m a senior undergraduate student at Cornell University. I’ve worked on software at Microsoft, Simulacrum, and bKash; built products with Cornell teams; and helped reproduce results for economics journals. You’ll find more details below.</p><a href="#projects" className="inline-link">View projects <ArrowUpRight size={17}/></a></div></div>
      <div className="about-quick"><div><span className="section-marker">AT CORNELL</span><div className="about-quick-row"><img src={logoFor('Cornell University')} alt=""/><div><strong>Cornell University</strong></div></div></div><div><span className="section-marker">PREVIOUSLY</span><div className="about-quick-logos"><span><img src={logoFor('Microsoft')} alt=""/>Microsoft</span><span><img src={logoFor('Simulacrum')} alt=""/>Simulacrum</span><span><img src={logoFor('BRAC bKash')} alt=""/>bKash</span></div></div></div>
    </section>

    <section className="projects-section" id="projects"><div className="portfolio-width">
      <div className="section-heading"><div><span className="section-marker">{String(projects.length).padStart(2, '0')} PROJECTS</span><h2>Projects<span>.</span></h2></div><a href="https://github.com/farhan-439" target="_blank" rel="noopener noreferrer" className="inline-link">All repositories <ArrowUpRight size={16}/></a></div>
      <div className="project-tools"><div className="project-category-tabs" role="group" aria-label="Filter projects by category">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}<span>{item === 'All' ? projects.length : projects.filter(project => project.category === item).length}</span></button>)}</div><button className="project-sort" type="button" onClick={() => setSortByName(value => !value)} aria-label={`Sort projects ${sortByName ? 'in featured order' : 'alphabetically'}`}>Sort: {sortByName ? 'A–Z' : 'Featured'} <ChevronDown size={14}/></button></div>
      <div className="all-projects">{visibleProjectIndices.map(index => { const project = projects[index]; const expanded = activeProject === index; return <article className={`project-tile ${expanded ? 'is-expanded' : ''} ${project.video || project.name === 'MedStick' ? '' : 'no-media'}`} id={`project-${projectSlug(project.name)}`} key={project.name}>
        {(project.video || project.name === 'MedStick') && <div className="project-tile-media">{project.name === 'MedStick' ? <YouTubePreview id="tSVXw5g-zuo" name="MedStick"/> : <PreviewVideo src={project.video!} name={project.name} />}</div>}
        <button type="button" className="project-tile-open" onClick={() => { setActiveProject(expanded ? null : index); setShareCopied(false); }} aria-label={`${expanded ? 'Collapse' : 'Expand'} ${project.name} details`} aria-expanded={expanded} aria-controls={`project-details-${index}`}><span className="project-tile-meta">{String(index + 1).padStart(2, '0')} / {project.label}</span><span className="project-tile-heading"><strong>{project.name}</strong><ChevronDown size={17}/></span><span className="project-tile-description">{project.description}</span>{project.win && <span className={`project-tile-win ${project.name === 'Maternal' ? 'is-selected' : ''}`}>{project.win}</span>}</button>
        {expanded && <div className="project-inline-detail" id={`project-details-${index}`}><div className="project-detail-intro"><span className="section-marker">{project.label}</span><h3>{project.name}</h3><p>{project.description}</p>{project.win && <strong>{project.win}</strong>}</div><div className="project-detail-main">{project.story && <div className="project-detail-story"><div><strong>Problem</strong><p>{project.story.problem}</p></div><div><strong>Approach</strong><p>{project.story.build}</p></div><div><strong>Result</strong><p>{project.story.edge}</p></div></div>}<div className="project-detail-stack"><strong>TECH STACK</strong><div>{project.stack.map(item => <span key={item}>{item}</span>)}</div></div><div className="project-detail-links">{project.href && <a href={project.href} target="_blank" rel="noopener noreferrer">View project <ArrowUpRight size={16}/></a>}{project.demoHref && <a href={project.demoHref} target="_blank" rel="noopener noreferrer">Watch demo <ArrowUpRight size={16}/></a>}{project.eventHref && <a href={project.eventHref} target="_blank" rel="noopener noreferrer">Cornell event <ArrowUpRight size={16}/></a>}<button type="button" onClick={() => { void copyProjectLink(index); }}>{shareCopied ? <Check size={15}/> : <Copy size={15}/>} {shareCopied ? 'Copied link' : 'Copy link'}</button></div></div></div>}
      </article> })}</div>
    </div></section>

    <section className="experience-section" id="experience"><div className="portfolio-width more-grid experience-layout"><div><span className="section-marker">WORK HISTORY</span><h2>Experience<span>.</span></h2></div><div className="more-items experience-items">{roles.map((role, index) => <article id={`role-${index}`} key={role.organization + role.title}><time>{role.date}</time><div><h3><img src={logoFor(role.organization)} alt="" loading="lazy"/>{role.organization}</h3><p className="experience-role-title">{role.title}</p><p>{role.detail}</p></div>{'publication' in role && role.publication && <><span className="experience-publication-label">NeurIPS publication</span><p className="experience-publication-text">{role.publication}</p></>}</article>)}<article><time>EARLIER WORK</time><div><h3>Product &amp; campus work</h3><p>Co-founded JobLink, a Gmail-connected job tracker built with Flask, React, PostgreSQL, and NLP. Built conference, housing, and event systems at Cornell and contributed to Fintech Club, Event Services, and the International Student Association.</p></div></article></div></div></section>

    <section className="more-section" id="more"><div className="portfolio-width more-grid"><div><span className="section-marker">CORNELL & BEYOND</span><h2>Research &amp; leadership<span>.</span></h2></div><div className="more-items"><article><span>LEADERSHIP</span><h3>Cornell Data Strategy</h3><p>As VP of Technology, I lead a team of 35+ developers building client products, including restaurant review analysis systems, a real estate agent ranking tool, a customer portal for managing sales, and Snowflake data lake projects. I also organize member learning programs and formal events with recruiters.</p></article><article><span>PUBLICATION</span><h3>TempusBench</h3><p>Co-authored a benchmark for time-series foundation models, accepted to the NeurIPS 2025 BERT2S workshop.</p></article><article><span>INTERESTS</span><h3>Outside work</h3><p>Chess, poker, films, and bowling. <em>12 Angry Men</em> is a favorite.</p></article></div></div></section>

    <section className="recognition-section portfolio-width" id="awards"><div className="section-heading"><div><span className="section-marker">RECOGNITION</span><h2>Hackathons &amp; competitions<span>.</span></h2></div></div><div className="recognition-list"><a href="#project-medstick"><span>1ST PLACE · 2026</span><strong>Claude Hackathon</strong><p>MedStick · offline clinical guidance with local retrieval and safety checks.</p></a><a href="#project-cornell-digital-ag-hackathon"><span>1ST PLACE · 2025</span><strong>Cornell Digital Agriculture Hackathon</strong><p>Poultry disease detection from audio and images.</p></a><a href="#project-maternal"><span>Selected - International Hackathon by Cornell</span><strong>Maternal</strong><p>Built a postpartum depression screening prototype with medical students in Doha.</p></a><a href="#project-rock-paper-scissors-ml"><span>6TH OF 94 TEAMS</span><strong>Machine learning competition</strong><p>Rock–Paper–Scissors image matching with a Siamese ResNet.</p></a><div><span>2× BRONZE</span><strong>International Economics Olympiad</strong><p>Represented Bangladesh in 2021 and 2022.</p></div></div></section>

    <section className="contact-section" id="contact"><div className="portfolio-width"><div className="contact-split"><div><div className="contact-heading"><h2>Contact<span>.</span></h2><p>Email me about engineering, research, or collaboration.</p></div><div className="contact-grid"><div className="social-links"><a href="mailto:fm454@cornell.edu"><Mail size={17}/> Email</a><button type="button" onClick={() => { void copyEmail(); }}>{copied ? <Check size={17}/> : <Copy size={17}/>} {copied ? 'Copied' : 'Copy email'}</button><a href="https://www.linkedin.com/in/farhanmashrur/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={17}/> LinkedIn</a><a href="https://github.com/farhan-439" target="_blank" rel="noopener noreferrer"><FaGithub size={17}/> GitHub</a></div></div></div><ContactRobot/></div><footer><span>© {new Date().getFullYear()} Farhan Mashrur</span><a href="#top">Back to top ↑</a></footer></div></section>


  </main>;
}
