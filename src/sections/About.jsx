import OrbitPhoto from '../components/OrbitPhoto.jsx'
import GlowCard from '../components/GlowCard.jsx'
import me from "../assets/photos/me.jpeg"
import cv from "../assets/sample-cv.pdf"

export default function About() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        {/* ABOUT CARD */}
        <GlowCard
          style={{
            gridArea: 'card',
            width: '100%',
            maxWidth: 720,
          }}
        >
          <h2
            className="title"
            style={{
              fontSize: 28,
              marginBottom: 16,
            }}
          >
            About Me
          </h2>

          <div style={{ display: 'grid', gap: 12 }}>
            <p>
              Hey, I’m <strong>A. Luke Remingan</strong> — a passionate Full Stack
              Developer and a third-year Computer Engineering undergraduate at
              the University of Sri Jayewardenepura.
            </p>

            <p>
              I’m driven by curiosity and a strong desire to understand how
              technology can solve real-world problems and improve people’s
              lives.
            </p>

            <p>
              My journey in software development is fueled by continuous
              learning and hands-on experience. I’ve worked on full-stack web
              applications and mobile apps that strengthened my problem-solving
              skills and understanding of software architecture.
            </p>

            <p>
              I enjoy building clean, modern, and animated user interfaces with
              React, while constantly exploring new tools and technologies.
            </p>

            <p>
              I’m open to internships, collaborations, and exciting
              opportunities where I can learn, contribute, and grow as a
              developer.
            </p>
          </div>

          <div style={{ marginTop: 20 }}>
            <a className="btn" href={cv} download>
              Download CV
            </a>
          </div>
        </GlowCard>

        {/* PHOTO */}
        <div
          style={{
            gridArea: 'photo',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <OrbitPhoto src={me} />
        </div>
      </div>
    </section>
  )
}
