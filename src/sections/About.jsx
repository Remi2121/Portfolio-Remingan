import OrbitPhoto from '../components/OrbitPhoto.jsx'
import GlowCard from '../components/GlowCard.jsx'
import me from "../assets/photos/me.jpeg"; 
import cv from "../assets/sample-cv.pdf";

export default function About(){
  return (
    <section
      className="section"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',  // full screen height
      }}
    >
      <div
        className="container about-grid"
        style={{
          display: 'grid',
          gap: 32,
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        {/* orbit photo */}
        <div style={{ gridArea: 'photo', display: 'grid', placeItems: 'center' }}>
          <OrbitPhoto src={me} />
        </div>

        {/* about card */}
        <GlowCard
          style={{
            gridArea: 'card',
            width: '100%',
            maxWidth: 720,
            textAlign: 'center', // center text inside card
          }}
        >
          <h2 className="title" style={{ fontSize: 28, marginBottom: 12 }}>
            About Me
          </h2>
          <div style={{ display: 'grid', gap: 2, textAlign: 'left' }}>
             <p>I’m My Remingan — curious and code-obsessed.</p>
             <p>Studying Computer Engineering at University of Sri Jayewardenepura.</p>
             <p>I enjoy building clean, animated UIs with React.</p>
             <p>Love solving problems and learning new tech.</p>
             <p>Open to internships and collabs on cool ideas.</p>
            <p>I will add my real photo later 😉.</p>
          </div>

          <div style={{ marginTop: 16 }}>
            <a className="btn" href={cv} download>
              Download CV
            </a>
          </div>
        </GlowCard>
      </div>
    </section>
  )
}
