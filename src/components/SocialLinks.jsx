import { Github, Instagram, Linkedin, Mail, Globe } from "lucide-react";
import { profile } from "../data/profile.js";

const links = [
  { name: "LinkedIn", icon: Linkedin, url: profile.social.linkedin },
  { name: "GitHub", icon: Github, url: profile.social.github },
  { name: "Instagram", icon: Instagram, url: profile.social.instagram },
  { name: "Email", icon: Mail, url: `mailto:${profile.email}` },
  { name: "Website", icon: Globe, url: profile.website }
];

function isPlaceholder(url) {
  return !url || url.includes("YOUR_USERNAME") || url.includes("YOUR_DOMAIN") || url.includes("YOUR_EMAIL");
}

export default function SocialLinks() {
  const visibleLinks = links.filter((link) => !isPlaceholder(link.url));

  return (
    <section className="social-section">
      <h2>Find me elsewhere</h2>
      <div className="social-grid">
        {visibleLinks.map(({ name, icon: Icon, url }) => (
          <a
            key={name}
            href={url}
            target={url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="social-link"
          >
            <Icon size={18} />
            <span>{name}</span>
          </a>
        ))}
        {visibleLinks.length === 0 && (
          <p className="empty-note">Add your social links in <code>src/data/profile.js</code>.</p>
        )}
      </div>
    </section>
  );
}
