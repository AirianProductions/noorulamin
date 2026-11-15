import { Code2 } from "lucide-react";
import { profile } from "../data/profile.js";

export default function Skills() {
  return <section className="section-wrap section-block" id="skills">
    <div className="section-kicker"><span>02</span> SKILLS & INTERESTS</div>
    <div className="skills-head"><h2>Tools I'm learning<br/><em>and exploring.</em></h2><p>My current learning toolkit. I'm always adding new skills and looking for opportunities to put them into practice.</p></div>
    <div className="skill-grid">{profile.skills.map((skill, i) => <div className="skill-item" key={skill}><span>0{i + 1}</span><Code2 size={17}/><b>{skill}</b><i>↗</i></div>)}</div>
    <div className="interest-row"><span>ALSO INTERESTED IN</span>{profile.interests.map(item => <b key={item}>{item}</b>)}</div>
  </section>;
}