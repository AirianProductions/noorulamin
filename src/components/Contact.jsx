import { ArrowUpRight, Download, Mail } from "lucide-react";
import { profile } from "../data/profile.js";
import { downloadContact } from "../utils/downloadContact.js";

export default function Contact() {
  const emailReady = profile.email && !profile.email.includes("YOUR_EMAIL");

  return (
    <section className="contact-section">
      <span className="section-label">03 / CONNECT</span>
      <h2>Let's connect.</h2>
      <p>Have an interesting idea, opportunity, or just want to say hello? I'd be happy to hear from you.</p>

      {emailReady ? (
        <a className="contact-button" href={`mailto:${profile.email}`}>
          <Mail size={18} /> Send me an email <ArrowUpRight size={17} />
        </a>
      ) : (
        <p className="setup-note">Add your email address in <code>src/data/profile.js</code> to enable email contact.</p>
      )}

      <button className="save-button" onClick={downloadContact}>
        <Download size={18} /> Save my contact
      </button>
    </section>
  );
}
