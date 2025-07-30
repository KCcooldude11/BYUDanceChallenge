// src/components/Header.jsx
import { Link } from 'react-router-dom'
import logo from '../assets/Y.png'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <Link to="/" className="header-brand-link">
            <img src={logo} alt="BYU Logo" className="header-logo" />
          
          <div className="header-text">
            <span className="header-subtitle">
              College of Fine Arts and Communications
            </span>
            <span className="header-title">
              Department of Dance
            </span>
          </div>
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">Faculty</Link></li>
            <li><Link to="/programs" className="nav-link">Programs</Link></li>
            <li><Link to="/audition" className="nav-link">Auditions</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
