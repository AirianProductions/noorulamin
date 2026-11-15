import { GraduationCap, Lightbulb, Code2 } from "lucide-react";
import { profile } from "../data/profile.js";

export default function About() {
  return <section className="section-wrap section-block" id="about">
    <div className="section-kicker"><span>01</span> ABOUT ME</div>
    <div className="about-grid">
      <div><h2>A curious mind,<br/><em>building what's next.</em></h2></div>
      <div className="about-copy">
        <p>{profile.bio}</p>
        <div className="education-card">
          <div className="edu-icon"><GraduationCap size={22}/></div>
          <div><small>MY EDUCATION</small><h3>BSc Computer Science</h3><p>{profile.university}</p><span>Eger, Hungary</span></div>
        </div>
      </div>
    </div>
    <div className="value-cards">
      <article><span className="value-icon"><Code2/></span><small>01 / TECHNOLOGY</small><h3>Learning by building</h3><p>Exploring programming and software development through practice and personal projects.</p></article>
      <article><span className="value-icon"><Lightbulb/></span><small>02 / CURIOSITY</small><h3>Always exploring</h3><p>Interested in ideas that connect technology, science, philosophy, and everyday life.</p></article>
    </div>
  </section>;
}