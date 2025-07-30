import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import img1 from '../assets/ByuContemporary.jpg'
import img2 from '../assets/ByuBallroom.jpg'
import img3 from '../assets/ByuCultural.jpg'
import img4 from '../assets/ByuBallet.jpg'
import img5 from '../assets/ByuMusicDanceTheatre.jpg'
import heroVideo from '../assets/ByuBallroomVideo.mp4'

export default function Home() {
  const firstSectionRef = useRef(null)
  const [showGutters, setShowGutters] = useState(true)
  const [showScrollUp, setShowScrollUp] = useState(false)

  // 1) Click “Explore Programs” → hide gutters + scroll to first image
  const scrollToFirst = () => {
    setShowGutters(false)
    firstSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // 2) On scroll → fade gutters and toggle scroll‑up button
  useEffect(() => {
    const threshold = window.innerHeight / 2
    const onScroll = () => {
      const y = window.scrollY
      setShowGutters(y < threshold)
      setShowScrollUp(y > threshold)
    }
    window.addEventListener('scroll', onScroll)
    onScroll() // initialize right away
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sections = [
    { src: img1, title: 'Contemporary',    bg: 'rgb(36, 35, 33)' },
    { src: img2, title: 'Ballroom',        bg: 'rgb(159, 173, 254)' },
    { src: img3, title: 'Cultural',        bg: 'rgb(180, 4, 44)' },
    { src: img4, title: 'Ballet',          bg: 'rgb(176, 141, 73)' },
    { src: img5, title: 'Music & Theatre', bg: 'rgb(5, 47, 176)' },
  ]

  return (
    <main className="home">
      {/* ==== HERO ==== */}
      <section className="hero">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>Welcome to BYU Dance</h1>
          <p>Where creativity meets performance</p>
          <button onClick={scrollToFirst} className="cta">
            <span className="cta-text">Explore Programs</span>
          </button>
        </div>

      </section>

      {/* ==== PARALLAX SECTIONS ==== */}
      {sections.map(({ src, title, bg }, i) => (
        <section
          key={i}
          ref={i === 0 ? firstSectionRef : null}
          className="parallax"
          style={{ backgroundImage: `url(${src})` }}
        >
          <Link
      to={`/programs?selected=${encodeURIComponent(title)}`}
      className="section-title"
      style={{ background: bg }}
    >
      {title}
    </Link>
        </section>
      ))}

      {/* ==== BACK‑TO‑TOP BUTTON ==== */}
      {showScrollUp && (
        <button
          className="scroll-up"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ^
        </button>
      )}
    </main>
  )
}
