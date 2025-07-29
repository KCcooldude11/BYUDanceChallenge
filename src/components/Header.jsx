import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const links = [
    { to: '/about', title: 'Faculty' },
    { to: '/programs', title: 'Programs' },
    { to: '/audition', title: 'Auditions' },
  ];

  return (
    <header className="header">
      <div className="header-inner">
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
  );
}

export default Header;