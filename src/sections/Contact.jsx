import GlowCard from '../components/GlowCard.jsx'
import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [msg, setMsg] = useState('')
  function onSubmit(e){
    e.preventDefault()
    if(!form.name || !form.email || !form.message){
      setMsg('Please fill all fields.')
      return
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
      setMsg('Enter a valid email.')
      return
    }
    setMsg('Thanks! This demo form does not send email.')
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
    maxWidth: "700px",        // ⬅ wider form
    width: "100%",             // full responsive
    margin: "0 auto",          // centered
    padding: "20px 24px",      // more breathing space
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
  <button className="btn" type="submit">
    Send
  </button>
  {msg && <div className="footer-muted">{msg}</div>}
</form>

        </GlowCard>
        <div style={{marginTop:16, display:'flex', gap:10}}>
          <a className="btn" href="#" onClick={e=>e.preventDefault()}>GitHub</a>
          <a className="btn" href="#" onClick={e=>e.preventDefault()}>LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
