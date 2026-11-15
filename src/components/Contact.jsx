import { ArrowUpRight, Download, Mail, MessageCircle, Phone } from "lucide-react";
import { profile } from "../data/profile.js";
import { downloadContact } from "../utils/downloadContact.js";

export default function Contact() {
  const socials = [
    ["Instagram", profile.social.instagram],
    ["Facebook", profile.social.facebook],
    ["LinkedIn", profile.social.linkedin],
    ["GitHub", profile.social.github]
  ];
  return <section className="section-wrap contact-section" id="contact">
    <div className="section-kicker"><span>03</span> CONTACT</div>
    <div className="contact-grid">
      <div><p className="contact-overline">HAVE A QUESTION OR AN IDEA?</p><h2>Let's make<br/><em>something happen.</em></h2><p className="contact-copy">I'm always happy to connect, exchange ideas, and hear about interesting opportunities.</p>
        <a className="primary-btn" href={`mailto:${profile.email}`}>Send me an email <ArrowUpRight size={17}/></a>
      </div>
      <div className="contact-details">
        <div className="detail-row"><Mail/><div><small>EMAIL</small><a href={`mailto:${profile.email}`}>{profile.email}</a></div></div>
        <div className="detail-row"><Phone/><div><small>PHONE</small><a href={`tel:${profile.phone}`}>{profile.phone}</a></div></div>
        <div className="detail-row"><MessageCircle/><div><small>WHATSAPP</small><a href={profile.whatsapp} target="_blank" rel="noreferrer">Message me on WhatsApp ↗</a></div></div>
        <div className="social-list"><small>FOLLOW ALONG</small>{socials.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name}<ArrowUpRight size={14}/></a>)}</div>
        <button className="save-contact" onClick={downloadContact}><Download size={17}/> Save my contact</button>
      </div>
    </div>
  </section>;
}