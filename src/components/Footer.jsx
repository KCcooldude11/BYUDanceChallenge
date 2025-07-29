omponents/Footer.jsx
New
+13
-0

import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>&copy; {new Date().getFullYear()} BYU Department of Dance</p>
      </div>
    </footer>
  )
}

export default Footer