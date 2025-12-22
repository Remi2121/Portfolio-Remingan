import data from '../data/projects.json'
import GlowCard from '../components/GlowCard.jsx'

const FALLBACK_IMG = '/projects/cricket.png' // make sure this exists in /public/projects/

export default function Projects(){
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="title">Projects</h2>
        <br/>
        <br/>
        <div className="grid grid--3">
          {data.map((p, idx) => (
            <GlowCard key={idx}>
              {/* Thumb with robust fallback */}
              <img
                src={p.image || FALLBACK_IMG}
                alt={p.title || 'Project'}
                className="project-thumb"
                loading="lazy"
                onError={(e) => {
                  if (e.currentTarget.src !== window.location.origin + FALLBACK_IMG) {
                    e.currentTarget.src = FALLBACK_IMG
                  }
                }}
              />

              {/* Title + desc */}
              {p.title && <h3 style={{ margin: '10px 0 6px' }}>{p.title}</h3>}
              {p.desc && <p className="subtitle" style={{ margin: 0 }}>{p.desc}</p>}

              {/* Tech badges (optional) */}
              {Array.isArray(p.tech) && p.tech.length > 0 && (
                <div className="badges" style={{ marginTop: 8 }}>
                  {p.tech.map((t, i) => (
                    <span key={i} className="badge">{t}</span>
                  ))}
                </div>
              )}

              {/* Actions (only show if present) */}
              <div style={{ marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {p.code && (
                  <a className="btn" href={p.code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                )}
                {p.live && (
                  <a className="btn" href={p.live} target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                )}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
