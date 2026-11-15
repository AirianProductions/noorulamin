import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [["Home", "#home"], ["About", "#about"], ["Skills", "#skills"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="navbar">
    <a className="logo" href="#home">NOOR<span>.</span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    <nav className={open ? "nav-links open" : "nav-links"}>
      {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <span>↗</span></a>
    </nav>
  </header>;
}