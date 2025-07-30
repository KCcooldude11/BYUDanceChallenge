// src/components/Footer.jsx
import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import './Footer.css'

const SOCIAL = [
  { href: 'https://www.instagram.com/byudance/',   icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://www.facebook.com/ByuDepartmentOfDance/',       icon: <FaFacebookF />, label: 'Facebook'   },
  { href: 'https://x.com/byudance?lang=en',      icon: <FaTwitter />,   label: 'X (Twitter)' },
  { href: 'https://www.youtube.com/channel/UCtbAY8L8sYQAHMhDH185GsA/videos',     icon: <FaYoutube />,   label: 'YouTube'    },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* left: copyright */}
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} BYU Department of Dance
        </p>

        {/* right: social icons */}
        <div className="footer-socials">
          {SOCIAL.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="footer-social-link"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
