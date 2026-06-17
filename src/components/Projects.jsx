import "./Projects.css";

const projects = [
  {
    title: "Weather App",
    desc: "A real-time weather application that fetches data from OpenWeatherMap API and displays temperature, humidity, and conditions for any city.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    color: "#7c6aff",
  },
  {
    title: "Todo List App",
    desc: "A feature-rich todo application with task filtering, priority levels, and local storage persistence built with React hooks.",
    tags: ["React", "CSS", "useState"],
    color: "#ff6a9d",
  },
  {
    title: "Portfolio Website",
    desc: "This very portfolio — a fully responsive personal website built with React and CSS to showcase my skills and projects.",
    tags: ["React", "CSS", "Responsive"],
    color: "#6af0ff",
  },
  {
    title: "Quiz App",
    desc: "An interactive quiz application with multiple categories, score tracking, timer, and result summary using vanilla JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#ffa96a",
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-label">What I've Built</div>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card" style={{ "--card-accent": p.color }}>
            <div className="project-top">
              <div className="project-icon" style={{ background: p.color + "22", color: p.color }}>
                {p.title[0]}
              </div>
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
