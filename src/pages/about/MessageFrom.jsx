import chairman from "/src/assets/chairman.avif";
import Note from "../../components/Note.jsx";
import "./css/MessageFrom.css";

export default function MessageFrom() {
  return (
    <section className="container">
      <div className="message-page">
        {/* Chairman Portrait */}
        <div className="message-hero">
          <img src={chairman} alt="Chairman portrait" loading="lazy" />
          <div className="section-title hero-text">
            <h2>
              Message from <span className="highlight">the Chairman</span>
            </h2>
            <p className="sub-title">
              A tradition of service, a future of growth.
            </p>
          </div>
        </div>

        {/* Full Message */}
        <div className="message-content">
          <p>Dear Members,</p>
          <p>
            It gives me great pleasure to extend my warm greetings to all our
            valued members. Our cooperative was founded with the vision of
            fostering financial security, sustainable growth and community
            empowerment. With your continued trust and participation, we remain
            committed to delivering transparent, reliable and member-focused
            services.
          </p>

          <p>
            Over the years, our cooperative has grown not only in numbers but
            also in strength and values. Together, we have created an
            institution that reflects the principles of unity, inclusiveness
            and collective progress. Every achievement we have celebrated is the
            result of your unwavering faith and active participation.
          </p>

          <p>
            Looking ahead, our priority remains to build resilience, embrace
            digital transformation and provide opportunities that empower
            families and future generations. We are dedicated to expanding our
            services, strengthening community programs, and ensuring that each
            decision we take contributes positively to the lives of our members.
          </p>

          <p>
            On behalf of the board and management team, I thank you once again
            for your commitment, trust and partnership. It is through our
            shared vision and collective effort that we can continue shaping a
            brighter and more prosperous future for all.
          </p>
          <p>Let us move forward with unity, vision and purpose.</p>

          <p className="signature">
            – Chairman
            <br />
            Mr. <span className="highlight">Bhola Shah</span>
          </p>
        </div>
      </div>

      {/* Note Section */}
      <Note type="MessageFromChairman" />
    </section>
  );
}
