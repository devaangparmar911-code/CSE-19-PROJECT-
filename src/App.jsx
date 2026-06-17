import { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

  const projects = [
    {
      name: "Calculator",
      desc: "A simple calculator made using HTML, CSS and JavaScript.",
      tech: "HTML, CSS, JS",
    },
    {
      name: "To-Do List",
      desc: "A to-do list app where you can add and delete tasks.",
      tech: "React",
    },
    {
      name: "Portfolio Website",
      desc: "This portfolio website made as part of Web Designing Workshop.",
      tech: "React",
    },
  ];

  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
        <span className="logo">My Portfolio</span>
        <div className="nav-links">
          {["home", "skills", "projects", "contact"].map((s) => (
            <button
              key={s}
              className={activeSection === s ? "active" : ""}
              onClick={() => setActiveSection(s)}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Home */}
      {activeSection === "home" && (
        <div className="section">
          <h1>Hi, I'm Your Name 👋</h1>
          <p>I am a Computer Science student learning web development.</p>
          <p>I know HTML, CSS, JavaScript and React.</p>
          <br />
          <button className="btn" onClick={() => setActiveSection("projects")}>
            See My Projects
          </button>
        </div>
      )}

      {/* Skills */}
      {activeSection === "skills" && (
        <div className="section">
          <h2>My Skills</h2>
          <p>Here are the technologies I have learned so far:</p>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {activeSection === "projects" && (
        <div className="section">
          <h2>My Projects</h2>
          <div className="projects-list">
            {projects.map((p) => (
              <div key={p.name} className="project-card">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <small>Tech used: {p.tech}</small>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact */}
      {activeSection === "contact" && (
        <div className="section">
          <h2>Contact Me</h2>
          <p>You can reach me at:</p>
          <br />
          <p>📧 Email: yourname@email.com</p>
          <p>🐙 GitHub: github.com/yourname</p>
          <p>📍 Location: Your City, India</p>
        </div>
      )}

    </div>
  );
}

export default App;
