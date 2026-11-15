import { useState } from "react";
import { MapPin, Sparkles } from "lucide-react";
import { profile } from "../data/profile.js";

export default function Profile() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="profile">
      <div className="profile-image-wrapper">
        {!photoFailed ? (
          <img
            src={profile.photo}
            alt={`${profile.name} portrait`}
            className="profile-image"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <div className="image-fallback">{profile.firstName.charAt(0)}</div>
        )}
      </div>

      <div className="profile-info">
        <span className="eyebrow"><Sparkles size={13} /> PERSONAL DIGITAL IDENTITY</span>
        <h1>{profile.name}</h1>
        <p className="profile-role">{profile.role}</p>
        <div className="location"><MapPin size={14} /> {profile.location}</div>
      </div>
    </section>
  );
}
