import OrbitPhoto from '../components/OrbitPhoto.jsx'
import { Link } from 'react-scroll'
import me from "../assets/photos/me.jpeg"

export default function Home() {
  return (
    <section className="home-hero" id="home">
      <div className="bubble-bg">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
      <div className="home-wrapper">

        {/* PHOTO */}
        <div className="home-photo">
          <OrbitPhoto src={me} />
        </div>

        {/* NAME */}
        <h1 className="home-title">
          I'm <span>Remingan</span>
        </h1>

        {/* TYPING ROLE */}
       <p className="home-role">
        <span className="typing">Frontend Developer • React Enthusiast • Full Stack Learner</span>
       </p>


        {/* BUTTONS */}
        <div className="home-actions">
          <Link
            to="projects"
            smooth={true}
            offset={-70}
            duration={600}
            className="home-btn primary"
          >
            View My Work →
          </Link>

          
        </div>

      </div>
    </section>
  )
}
