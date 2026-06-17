import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-badge">Available for Projects</div>
      <h1 className="hero-title">
        Hi, I'm <span className="gradient-text">Your Name</span><br />
        Web Developer
      </h1>
      <p className="hero-sub">
        A passionate Computer Science student building clean, interactive web experiences
        using HTML, CSS, JavaScript, and React.
      </p>
      <div className="hero-btns">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#contact" className="btn btn-ghost">Contact Me</a>
      </div>
      <div className="hero-stats">
        <div className="stat"><span className="stat-num">2+</span><span className="stat-label">Years Learning</span></div>
        <div className="stat-divider" />
        <div className="stat"><span className="stat-num">10+</span><span className="stat-label">Projects Built</span></div>
        <div className="stat-divider" />
        <div className="stat"><span className="stat-num">5+</span><span className="stat-label">Technologies</span></div>
      </div>
      <div className="hero-glow" />
    </section>
  );
}
