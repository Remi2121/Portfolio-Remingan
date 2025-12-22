import data from '../data/certificates.json'
import GlowCard from '../components/GlowCard.jsx'

export default function Certificates(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Certificates</h2>
        <br/>
        <br/>
        <div className="grid grid--2">
          {data.map((c,idx)=>(
            <GlowCard key={idx}>
              <div className="cert">
                <img src={`/src/assets/certificates/${c.image}`} alt={c.title} />
                <div>
                  <h3 style={{margin:'0 0 4px'}}>{c.title}</h3>
                  <p className="subtitle" style={{margin:0}}>{c.issuer} • {c.year}</p>
                  {c.note && <p style={{marginTop:8}}>{c.note}</p>}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
