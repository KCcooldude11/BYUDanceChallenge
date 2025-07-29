import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">BYU Dance</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/audition">Audition</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header