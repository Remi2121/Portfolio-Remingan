import { useState } from 'react'
import data from '../data/certificates.json'
import GlowCard from '../components/GlowCard.jsx'

export default function Certificates() {

  const [activeImg, setActiveImg] = useState(null)

  return (
    <section className="section" id="certificates">
      <div className="container">
        <h2 className="title">Certificates</h2>
        <br />

        <div className="grid grid--2">
          {data.map((c, idx) => (
            <GlowCard key={idx}>
              <div className="cert">

                {/* CLICKABLE IMAGE */}
                <img
                  src={c.image}
                  alt={c.title}
                  className="cert-img clickable"
                  onClick={() => setActiveImg(c.image)}
                />

                <div className="cert-info">
                  <h3>{c.title}</h3>
                  <p className="subtitle">
                    {c.issuer} • {c.year}
                  </p>
                  {c.note && <p className="note">{c.note}</p>}
                </div>

              </div>
            </GlowCard>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL */}
      {activeImg && (
        <div className="img-modal" onClick={() => setActiveImg(null)}>
          <span className="close-btn">×</span>
          <img src={activeImg} alt="Certificate Preview" />
        </div>
      )}
    </section>
  )
}
