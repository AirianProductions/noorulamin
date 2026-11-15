import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile.js";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  return <section className="hero section-wrap" id="home">
    <div className="hero-content">
      <div className="availability"><i/> OPEN TO MEETING NEW PEOPLE & OPPORTUNITIES</div>
      <p className="hello">HELLO, I'M</p>
      <h1>Noor Ul<br/><span>Amin.</span></h1>
      <h2>{profile.role}</h2>
      <p className="hero-desc">{profile.bio}</p>
      <div className="hero-actions">
        <a className="primary-btn" href="#contact">Get in touch <ArrowUpRight size={17}/></a>
        <a className="text-btn" href="#about">Explore my profile <ArrowDown size={15}/></a>
      </div>
      <div className="hero-location"><MapPin size={15}/>{profile.location}</div>
    </div>
    <div className="hero-visual">
      <div className="photo-backdrop"/>
      {!photoFailed
        ? <img className="hero-photo" src={profile.photo} alt={profile.name} onError={() => setPhotoFailed(true)}/>
        : <div className="photo-placeholder">N<span>.</span></div>}
      <div className="photo-note"><span>COMPUTER SCIENCE</span><b>STUDENT · CREATOR · CURIOUS MIND</b></div>
      <div className="vertical-text">PERSONAL PORTFOLIO — 2026</div>
    </div>
  </section>;
}