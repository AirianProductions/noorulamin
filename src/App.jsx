import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Instagram, Facebook, Mail, MapPin, Menu, X, Sparkles, Code2, Cpu, Orbit, Send, Download, ExternalLink } from 'lucide-react';
import { profile } from './data/profile';
import './index.css';

const socials = [
  { label: 'GitHub', href: profile.social.github, Icon: Github },
  { label: 'LinkedIn', href: profile.social.linkedin, Icon: Linkedin },
  { label: 'Instagram', href: profile.social.instagram, Icon: Instagram },
  { label: 'Facebook', href: profile.social.facebook, Icon: Facebook },
];
const skills = ['C#', 'Python', 'JavaScript', 'React', 'HTML / CSS', 'SQL', 'Kotlin', 'Racket'];
const interests = ['Software development', 'Creative technology', 'Automation', 'Astronomy', 'Philosophy', 'Poetry'];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    }), { threshold: 0.12 });
    nodes.forEach(node => io.observe(node));
    return () => io.disconnect();
  }, []);
}

function Magnetic({ children, className = '', href, ...props }) {
  const ref = useRef(null);
  const onMove = e => {
    const r = ref.current?.getBoundingClientRect(); if (!r) return;
    const x = e.clientX - r.left - r.width / 2; const y = e.clientY - r.top - r.height / 2;
    ref.current.style.transform = `translate(${x * 0.09}px, ${y * 0.12}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = 'translate(0,0)'; };
  const Tag = href ? 'a' : 'button';
  return <Tag ref={ref} href={href} className={className} onMouseMove={onMove} onMouseLeave={reset} {...props}>{children}</Tag>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['About', '#about'], ['Skills', '#toolkit'], ['Contact', '#contact']];
  return <header className="nav-wrap">
    <a className="brand" href="#home" aria-label="Noor home">Noor<span>.</span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
  </header>;
}

function FloatingScene() {
  return <div className="floating-scene" aria-hidden="true">
    <div className="scene-glow" />
    <div className="cube cube-back"><i/><b/><em/></div>
    <div className="cube cube-main"><i/><b/><em/></div>
    <div className="cube cube-low"><i/><b/><em/></div>
    <div className="light-orb" />
    <div className="dark-cylinder" />
    <div className="floor-shadow" />
  </div>;
}

function Hero() {
  return <section className="hero" id="home">
    <FloatingScene />
    <div className="hero-copy">
      <p className="hero-kicker">SOFTWARE DEVELOPER&nbsp;&nbsp; | &nbsp;&nbsp;COMPUTER SCIENCE STUDENT</p>
      <h1>I'M <span>NOOR UL AMIN</span></h1>
      <p className="hero-description">BUILDING WITH CODE&nbsp; | &nbsp;CURIOUS BY NATURE&nbsp; | &nbsp;ALWAYS LEARNING</p>
      <div className="hero-actions"><Magnetic href="#toolkit" className="button button-primary">Explore my work <ArrowDown size={16}/></Magnetic><Magnetic href="#contact" className="button button-ghost">Get in touch <ArrowUpRight size={16}/></Magnetic></div>
    </div>
    <a className="scroll-cue" href="#about" aria-label="Scroll to about"><span>↓</span></a>
    <div className="hero-location">{profile.location.toUpperCase()} <i/> PORTFOLIO / 2026</div>
  </section>;
}

function SectionHead({ number, label, title, accent }) {
  return <div className="section-head reveal"><div className="section-label"><span>{number}</span><i/>{label}</div><h2>{title} <span className="gradient-text">{accent}</span></h2></div>;
}

function About() {
  return <section className="section about-section" id="about">
    <SectionHead number="01" label="A LITTLE INTRODUCTION" title="More than a" accent="title."/>
    <div className="about-layout">
      <div className="about-main reveal"><span className="quote-mark">“</span><p className="about-lead">I like understanding how things work — and then imagining how they could work <span>better.</span></p><p className="body-copy">{profile.bio}</p><div className="about-signature">NOOR UL AMIN <span>— ALWAYS IN PROGRESS</span></div></div>
      <div className="about-side reveal"><div className="info-card card-glass"><div className="card-icon"><Orbit size={20}/></div><span className="micro-label">CURRENT CHAPTER</span><h3>Learning by<br/>building.</h3><p>{profile.role}</p><div className="card-rule"/><span className="micro-label">STUDYING AT</span><p className="uni-name">{profile.university}</p></div><div className="mini-stat"><span className="stat-number">∞</span><span>Curiosity<br/>level</span><Sparkles size={19}/></div></div>
    </div>
  </section>;
}

function Toolkit() {
  const [active, setActive] = useState('All');
  const groups = { All: skills, Languages: ['C#', 'Python', 'JavaScript', 'Kotlin', 'Racket'], 'Web & Data': ['React', 'HTML / CSS', 'SQL'] };
  return <section className="section toolkit-section" id="toolkit">
    <SectionHead number="02" label="TOOLS IN MY TOOLBOX" title="Curiosity, meet" accent="capability."/>
    <div className="toolkit-intro reveal"><p className="body-copy">A growing toolkit, built one concept and one project at a time. These are the technologies I'm learning and exploring.</p><div className="filter-tabs">{Object.keys(groups).map(tab => <button key={tab} className={active === tab ? 'filter active' : 'filter'} onClick={() => setActive(tab)}>{tab}</button>)}</div></div>
    <div className="skill-grid" key={active}>{groups[active].map((skill, i) => <div className="skill-card reveal" style={{ '--delay': `${i * 55}ms` }} key={skill}><span className="skill-index">0{i + 1}</span><span className="skill-name">{skill}</span><ArrowUpRight className="skill-arrow" size={18}/><div className="skill-line"/></div>)}</div>
    <div className="interest-row reveal"><span className="micro-label">ALSO EXPLORING</span><div>{interests.map(item => <span className="interest-pill" key={item}>{item}</span>)}</div></div>
  </section>;
}

function Contact() {
  return <section className="section contact-section" id="contact">
    <div className="contact-panel reveal"><div className="contact-orb"/><div className="section-label"><span>03</span><i/> OPEN CHANNEL</div><p className="contact-overline">HAVE AN IDEA, QUESTION OR JUST WANT TO SAY HI?</p><h2>Let's make<br/><span className="gradient-text">something matter.</span></h2><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={20}/></a><div className="contact-bottom"><div className="social-links">{socials.map(({label, href, Icon}) => <a href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}><Icon size={18}/></a>)}</div><a className="whatsapp-link" href={profile.whatsapp} target="_blank" rel="noreferrer"><Send size={15}/> MESSAGE ON WHATSAPP</a></div></div>
  </section>;
}

export default function App() {
  useReveal();
  useEffect(() => {
    const move = e => { document.documentElement.style.setProperty('--mx', `${e.clientX}px`); document.documentElement.style.setProperty('--px', `${(e.clientX / window.innerWidth - .5) * 18}px`); document.documentElement.style.setProperty('--py', `${(e.clientY / window.innerHeight - .5) * 14}px`); };
    window.addEventListener('pointermove', move); return () => window.removeEventListener('pointermove', move);
  }, []);
  return <main className="site-shell"><div className="ambient-cursor"/><div className="noise"/><div className="site-container"><Navbar/><Hero/><About/><Toolkit/><Contact/><footer className="footer"><a className="brand" href="#home"><span className="brand-mark">N</span><span>NOOR<span className="accent">.</span></span></a><span>DESIGNED WITH CURIOSITY. BUILT WITH PURPOSE.</span><span>© 2026 NOOR UL AMIN</span></footer></div></main>;
}
