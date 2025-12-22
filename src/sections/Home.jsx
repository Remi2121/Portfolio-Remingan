import OrbitPhoto from '../components/OrbitPhoto.jsx'
import { Link } from 'react-scroll'
import me from "../assets/photos/me.jpeg"; 

export default function Home(){
  return (
    <section className="sectionbox">
      <div className="container" style={{display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:24,alignItems:'center'}}>
        <div>
          <h1 className="title">Hi, I’m <span style={{color:'var(--blue)'}}>Remingan</span></h1>
          <p className="subtitle">Frontend Developer • React Enthusiast</p>
          <Link to="about" smooth={true} offset={-70} duration={600} className="btn">Get Started →</Link>
        </div>
        <div style={{display:'grid',placeItems:'center'}}>
          <OrbitPhoto src={me} />
        </div>
      </div>
    </section>
  )
}
