import { useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'  // 🍔 and ❌ icons

const items = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: 'var(--blue)',
              boxShadow: '0 0 10px rgba(96,165,250,.8)',
            }}
          />
          <strong>Remingan</strong>
        </div>

        {/* Desktop nav */}
        <nav className="nav desktop-nav">
          {items.map((it) => (
            <Link
              key={it.id}
              to={it.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              onClick={() => setOpen(false)}
              style={{ cursor: 'pointer' }} 
            >
              {it.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu icon (right side) */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="mobile-menu">
            {items.map((it) => (
              <Link
                key={it.id}
                to={it.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                onClick={() => setOpen(false)} // close after click
              >
                {it.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
