import { useState } from "react";
import data from "../data/projects.json";
import GlowCard from "../components/GlowCard.jsx";
import "./Projects.css";

const FALLBACK_IMG = "/projects/cricket.png";

export default function Projects() {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="title">Projects</h2>

        {/* HORIZONTAL SCROLL */}
        <div className="projects-row">
          {data.map((p, idx) => (
            <GlowCard key={idx} className="project-card">
              <img
                src={p.image || FALLBACK_IMG}
                alt={p.title}
                className="project-thumb"
                onClick={() => setActiveImg(p.image || FALLBACK_IMG)}
                onError={(e) => (e.currentTarget.src = FALLBACK_IMG)}
              />

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              {Array.isArray(p.tech) && (
                <div className="badges">
                  {p.tech.map((t, i) => (
                    <span key={i} className="badge">{t}</span>
                  ))}
                </div>
              )}
            </GlowCard>
          ))}
        </div>
      </div>

      {/* IMAGE FULL VIEW */}
      {activeImg && (
        <div className="img-modal" onClick={() => setActiveImg(null)}>
          <img src={activeImg} alt="preview" />
        </div>
      )}
    </section>
  );
}
