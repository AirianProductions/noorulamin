import { profile } from "../data/profile.js";

export default function Skills() {
  return (
    <section className="content-section">
      <span className="section-label">02 / TECHNOLOGY</span>
      <h2>Things I work with.</h2>
      <div className="skills">
        {profile.skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}
      </div>
    </section>
  );
}
