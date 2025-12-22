import data from "../data/skills.json";
import GlowCard from "../components/GlowCard.jsx";

function SkillItem({ s }) {
  return (
    <div className="skill-item">
      {/* Skill name */}
      <div className="skill__name">
        <span>{s.icon}</span>
        <span>{s.name}</span>
      </div>

      {/* Bar + percentage */}
      <div className="skill-bar-row">
        <div className="skill-item__bar">
          <div
            className="skill__fill"
            style={{ width: `${s.level}%` }}
          />
        </div>
        <span className="skill-percent">{s.level}%</span>
      </div>
    </div>
  );
}

function CategoryPanel({ title, items }) {
  return (
    <GlowCard style={{ padding: 22 }}>
      <h3 className="skill-cat__title">{title}</h3>
      <div className="skill-list">
        {items.map((s, i) => (
          <SkillItem key={title + i} s={s} />
        ))}
      </div>
    </GlowCard>
  );
}

export default function Skills() {
  const frontend = data.filter(s => s.category === "frontend");
  const backend  = data.filter(s => s.category === "backend");
  const tools    = data.filter(s => s.category === "tools");
  const others   = data.filter(s => s.category === "other");

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Skills</h2>

        <div className="skill-cat-grid">
          <CategoryPanel title="Frontend" items={frontend} />
          <CategoryPanel title="Backend" items={backend} />
          <CategoryPanel title="Tools" items={tools} />
          <CategoryPanel title="Others" items={others} />
        </div>
      </div>
    </section>
  );
}
