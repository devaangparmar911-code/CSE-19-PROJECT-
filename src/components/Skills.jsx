import { useState } from "react";
import "./Skills.css";

const skills = [
  { name: "HTML5", level: 90, category: "Frontend" },
  { name: "CSS3", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 75, category: "Frontend" },
  { name: "React.js", level: 70, category: "Frontend" },
  { name: "Python", level: 65, category: "Backend" },
  { name: "Git & GitHub", level: 80, category: "Tools" },
  { name: "Responsive Design", level: 85, category: "Frontend" },
  { name: "VS Code", level: 90, category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

export default function Skills() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? skills : skills.filter(s => s.category === active);

  return (
    <section className="skills section" id="skills">
      <div className="section-label">What I Know</div>
      <h2 className="section-title">My Skills</h2>
      <div className="skill-filters">
        {categories.map(c => (
          <button key={c} className={`filter-btn ${active === c ? "active" : ""}`} onClick={() => setActive(c)}>{c}</button>
        ))}
      </div>
      <div className="skills-grid">
        {filtered.map(skill => (
          <div key={skill.name} className="skill-card">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-pct">{skill.level}%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
            </div>
            <span className="skill-cat">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
