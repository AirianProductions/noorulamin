import { ArrowUpRight } from "lucide-react";
import Profile from "./components/Profile.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <main className="page">
      <div className="container">
        <header className="topbar">
          <span className="brand">N.</span>
          <span className="digital-card">DIGITAL CARD <span>© 2026</span></span>
        </header>

        <Profile />
        <SocialLinks />
        <div className="separator" />
        <About />
        <div className="separator" />
        <Skills />
        <div className="separator" />
        <Contact />

        <footer className="footer">
          <span>Designed with intention.</span>
          <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            Back to top <ArrowUpRight size={13} />
          </a>
        </footer>
      </div>
    </main>
  );
}
