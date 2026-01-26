import { NavLink } from "react-router-dom";
import Dil from "../assets/committee/Dil.avif";
import Naresh from "../assets/committee/Naresh.avif";
import Sankar from "../assets/committee/Sankar.avif";
import Bipana from "../assets/committee/Bipana.avif";


import "./css/Committee.css";

export default function Committee() {
  const members = [
    { name: "Mrs. Bipana Rai", role: "Vice-Chairman", img: Bipana },
    { name: "Mr. Sankar Shah", role: "Secretary", img: Sankar },
    { name: "Mr. Naresh Kumar Pariyar", role: "Treasurer", img: Naresh },
    { name: "Mr. Dil Raj Shrestha", role: "Member", img: Dil },
  ];

  return (
    <div className="fluid-background">
      <div className="container">
        <section className="section">
          <div className="section-title">
            <h2>
              Our<span className="highlight"> Committee</span>
            </h2>
            <p className="section-subtitle">
              Dedicated professionals guiding our organization
            </p>
          </div>

          <div className="members-grid">
            {members.map((m) => (
              <div key={m.name} className="member-card small-card">
                <div className="member-image-container">
                  <img
                    src={m.img}
                    alt={`${m.name} — ${m.role}`}
                    loading="lazy"
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{m.name}</h3>
                  <p className="member-role">{m.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Better View All Button */}
          <div className="view-all-container">
            <NavLink to="/About/Team" className="view-all-btn">
              View All <span className="arrow">→</span>
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
}
