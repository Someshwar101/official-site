import Note from "../../components/Note.jsx";
import Umesh from "../../assets/accounting/Umesh.avif";
import Rita from "../../assets/accounting/Rita.avif";
import Indira from "../../assets/accounting/Indira.avif";

import "./css/Committee.css";
import "./css/ASC.css";

export default function AccountingSupervisoryCommittee() {
  const members = [
    { name: "Mr. Umesh Bhujel", role: "Co-ordinator", img: Umesh },
    { name: "Mrs. Rita Magar", role: "Member", img: Rita },
    { name: "Mrs. Indira Nepal", role: "Member", img: Indira },
  ];

  return (
    <section className="container">
      <div className="section-title">
        <h2>
          Audit <span className="highlight">Supervisory Committee</span>
        </h2>
        <p className="section-subtitle">
          Ensuring financial integrity and compliance
        </p>
      </div>

      <div className="members-grid">
        {members.map((m) => (
          <article
            key={m.name}
            className="member-card small-card"
            aria-label={`${m.name} — ${m.role}`}
            tabIndex="0"
          >
            <div className="member-image-container">
              <img
                src={m.img}
                alt={`${m.name} — ${m.role}`}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="member-info">
              <h3 className="member-name">{m.name}</h3>
              <p className="member-role">{m.role}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Note Section */}
      <Note type="AccountingSupervisoryCommittee" />
    </section>
  );
}
