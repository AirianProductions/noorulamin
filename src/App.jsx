import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return <main className="site-shell">
    <div className="top-line"/>
    <div className="site-container">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      <footer className="footer"><a className="logo" href="#home">NOOR<span>.</span></a><p>Designed with curiosity. Built with purpose.</p><span>© 2026 NOOR UL AMIN</span></footer>
    </div>
  </main>;
}