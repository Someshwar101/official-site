import { useState } from "react";
import Note from "../components/Note.jsx";
import "./css/Contact.css";

// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    alert("Message submitted (no backend yet)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <div className="section-title">
        <h2>
          Contact<span className="highlight"> Us</span>
        </h2>
        <p>
          Do not hesitate to reach out. Just fill in the contact form here and
          we'll be sure to reply as fast as possible.
        </p>
      </div>

      <div className="contact-content">
        {/* Left Side - Address */}
        <div className="contact-info">
          <h3 className="info-title">Get in Touch</h3>
          <div className="address-card">
            <div className="address-item">
              <span className="address-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <div>
                <h4 className="address-title">Address</h4>
                <p className="address-text">
                  Ramdhuni 5, Sunsari
                  <br />
                  Province No. 1, Nepal
                </p>
              </div>
            </div>

            <div className="address-item">
              <span className="address-icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <div>
                <h4 className="address-title">Phone</h4>
                <p className="address-text">9709110697 9709110698 </p>
              </div>
            </div>

            <div className="address-item">
              <span className="address-icon" title="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <div>
                <h4 className="address-title">WhatsApp</h4>
                <p className="address-text">
                  <a
                    href="https://wa.me/9709110698"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    9709110698
                  </a>
                </p>
              </div>
            </div>

            <div className="address-item">
              <span className="address-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <div>
                <h4 className="address-title">Email</h4>
                <p className="address-text">someshwarudrakshya@gmail.com </p>
              </div>
            </div>

            <div className="address-item">
              <span className="address-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              <div>
                <h4 className="address-title">Website</h4>
                <p className="address-text">
                  <a
                    href="https://www.someshwarudrakshya.coop.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Website-link"
                  ></a>www.someshwarudrakshya.coop.np</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="form-textarea"
                placeholder="Type your message here..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps Iframe Section */}
      <div className="map-section">
        <h3 className="map-title">Our Location</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113880.099900366!2d87.225498!3d26.663722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c2f92b5e7a5%3A0x6a5e9b3b3c8b0b0b!2sItahari%2C%20Sunsari%2C%20Nepal!5e0!3m2!1sen!2sus!4v1633024000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Itahari, Sunsari, Nepal"
            className="google-map"
          ></iframe>
        </div>
      </div>

      {/* Note Section */}
      <Note type="Contact" />
    </div>
  );
}
