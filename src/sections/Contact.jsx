import GlowCard from '../components/GlowCard.jsx'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  function onSubmit(e) {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setMsg('Please fill all fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setMsg('Enter a valid email.')
      return
    }

    setLoading(true)
    setMsg('')

    emailjs
      .send(
        'service_bufqiuv',      // ✅ Service ID
        'template_8e9q9eg',     // ✅ Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        '1O9eu4fEcwq4DNk3F'      // ✅ Public Key
      )
      .then(
        () => {
          setMsg('✅ Message sent successfully!')
          setForm({ name: '', email: '', message: '' })
          setLoading(false)
        },
        (error) => {
          console.error(error)
          setMsg('❌ Failed to send message. Try again.')
          setLoading(false)
        }
      )
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Contact</h2>

        <GlowCard>
          <form
            className="form"
            onSubmit={onSubmit}
            style={{
              maxWidth: '700px',
              width: '100%',
              margin: '0 auto',
              padding: '20px 24px',
            }}
          >
            <input
              className="input"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              className="input"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <textarea
              className="textarea"
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button className="btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </button>

            {msg && <div className="footer-muted">{msg}</div>}
          </form>
        </GlowCard>

        {/* Social links */}
        <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
          <a
            className="btn"
            href="https://github.com/Remi2121"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            className="btn"
            href="https://www.linkedin.com/in/remingan-antony/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
