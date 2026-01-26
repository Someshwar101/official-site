import Dil from "../../assets/committee/Dil.avif";
import Naresh from "../../assets/committee/Naresh.avif";
import Sankar from "../../assets/committee/Sankar.avif";
import Bipana from "../../assets/committee/Bipana.avif";
import Uma from "../../assets/committee/Uma.avif";
import Phurbi from "../../assets/committee/Phurbi.avif";
import Bhola from "../../assets/committee/Bhola.avif";
import Mano from "../../assets/committee/Mano.avif";
import Parwat from "../../assets/committee/Parwat.avif";;
import noFace from "../../assets/noFace.avif";
import "./css/Committee.css";

export default function Committee() {
  const chairman = { name: "Mrs. Bhola Shah", role: "Chairman", img: Bhola };

  const members = [
    { name: "Mrs. Bipana Rai", role: "Vice-Chairman", img: Bipana },
    { name: "Mr. Sankar Shah", role: "Secretary", img: Sankar },
    { name: "Mr. Naresh Kumar Pariyar", role: "Treasurer", img: Naresh },
    { name: "Mrs. Phurbi Sherpa", role: "Member", img: Phurbi },
    { name: "Mrs. Uma Devi Acharye", role: "Member", img: Uma },
    { name: "Mrs. Mano Devi Sardar", role: "Member", img: Mano },
    { name: "Mr. Parwat Paudar", role: "Member", img: Parwat },
    { name: "Mr. Dil Raj Shrestha", role: "Member", img: Dil },

  ];

  return (
    <section className="container">
      <div className="section-title">
        <h2>
          Our<span className="highlight"> Committee</span>
        </h2>
        <p className="section-subtitle">
          Dedicated professionals guiding our organization
        </p>
      </div>

      {/* Chairman Card */}
      <div className="chairman-card">
        <div className="member-image-container large">
          <img
            src={chairman.img}
            alt={`${chairman.name} — ${chairman.role}`}
            loading="lazy"
          />
        </div>
        <div className="member-info">
          <h3 className="member-name">{chairman.name}</h3>
          <p className="member-role">{chairman.role}</p>
        </div>
      </div>

      {/* Other Members */}
      <div className="members-grid">
        {members.map((m) => (
          <div key={m.name} className="member-card small-card">
            <div className="member-image-container">
              <img src={m.img} alt={`${m.name} — ${m.role}`} loading="lazy" />
            </div>
            <div className="member-info">
              <h3 className="member-name">{m.name}</h3>
              <p className="member-role">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
