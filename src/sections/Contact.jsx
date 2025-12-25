import GlowCard from '../components/GlowCard.jsx'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  function onSubmit(e) {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setMsg('⚠️ Please fill all fields')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setMsg('⚠️ Enter a valid email')
      return
    }

    setLoading(true)
    setMsg('')

    emailjs
      .send(
        'service_bufqiuv',
        'template_8e9q9eg',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        '1O9eu4fEcwq4DNk3F'
      )
      .then(
        () => {
          setMsg('✅ Message sent successfully!')
          setForm({ name: '', email: '', message: '' })
          setLoading(false)
        },
        () => {
          setMsg('❌ Failed to send message')
          setLoading(false)
        }
      )
  }

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <GlowCard>
        <form className="contact-form" onSubmit={onSubmit}>
          <input
            className="contact-input"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="contact-input"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            className="contact-textarea"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button className="contact-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {msg && <p className="contact-msg">{msg}</p>}
        </form>
      </GlowCard>

      <div className="contact-socials">
        <a
          href="https://github.com/Remi2121"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/remingan-antony/"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
