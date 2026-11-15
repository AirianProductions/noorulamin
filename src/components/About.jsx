import { profile } from "../data/profile.js";

export default function About() {
  return (
    <section className="content-section">
      <span className="section-label">01 / ABOUT</span>
      <h2>A little about me.</h2>
      <p className="about-text">{profile.bio}</p>
      <div className="interests">
        {profile.interests.map((interest) => <span key={interest} className="tag">{interest}</span>)}
      </div>
    </section>
  );
}
