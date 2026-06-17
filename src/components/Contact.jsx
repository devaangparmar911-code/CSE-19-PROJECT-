import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact section" id="contact">
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-intro">
            I'm currently open to internships, projects, and collaborations.
            Feel free to reach out — I'd love to connect!
          </p>
          <div className="info-items">
            <div className="info-item"><span className="info-icon">📧</span><span>yourname@email.com</span></div>
            <div className="info-item"><span className="info-icon">📍</span><span>Your City, India</span></div>
            <div className="info-item"><span className="info-icon">🎓</span><span>B.Tech Computer Science</span></div>
          </div>
          <div className="social-links">
            <a href="#" className="social-btn">GitHub</a>
            <a href="#" className="social-btn">LinkedIn</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {sent && <div className="success-msg">✅ Message sent! I'll get back to you soon.</div>}
          <div className="form-group">
            <label>Name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message..." rows={5} required />
          </div>
          <button type="submit" className="btn btn-primary submit-btn">Send Message →</button>
        </form>
      </div>
    </section>
  );
}
