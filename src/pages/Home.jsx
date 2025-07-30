// src/pages/Home.jsx
import React, { useRef, useState, useEffect } from 'react'
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

  // 1) Click "Explore Programs" → hide gutters immediately + smooth‑scroll
  const scrollToFirst = () => {
    setShowGutters(false)
    firstSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // 2) On mount, add a one‑time scroll listener:
  //    once you scroll beyond half a viewport, hide gutters and remove listener.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowGutters(false)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sections = [
    { src: img1, title: 'Contemporary',    bg: 'rgba(70, 130, 180, 0.75)' },
    { src: img2, title: 'Ballroom',        bg: 'rgba(218, 165, 32, 0.75)' },
    { src: img3, title: 'Cultural',        bg: 'rgba(255, 140, 0, 0.75)' },
    { src: img4, title: 'Ballet',          bg: 'rgba(219, 112, 147, 0.75)' },
    { src: img5, title: 'Music & Theatre', bg: 'rgba(72, 61, 139, 0.75)' },
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
            <span className="cta-arrow">↓</span>
          </button>
        </div>

        {/* ==== GUTTER CARDS (in DOM but will fade) ==== */}
        <div className={`hero-gutter gutter-left top ${!showGutters ? 'fade-out' : ''}`}>
          <div className="info-card">
            <h3>Degrees</h3>
            <p>
              With 4 majors and 4 minors to choose from, there’s a dance
              program for you at BYU.
            </p>
          </div>
        </div>
        <div className={`hero-gutter gutter-left bottom ${!showGutters ? 'fade-out' : ''}`}>
          <div className="info-card">
            <h3>Auditions</h3>
            <p>
              Already applied for BYU? Get details on how to prepare for
              your dance audition.
            </p>
          </div>
        </div>
        <div className={`hero-gutter gutter-right center ${!showGutters ? 'fade-out' : ''}`}>
          <div className="info-card">
            <h3>Grants &amp; Scholarships</h3>
            <p>
              Find academically and merit‑based opportunities to fund your
              dance education.
            </p>
          </div>
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
          <div className="section-title" style={{ background: bg }}>
            {title}
          </div>
        </section>
      ))}
    </main>
  )
}
