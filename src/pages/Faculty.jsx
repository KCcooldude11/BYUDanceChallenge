// src/pages/Faculty.jsx
import React from 'react'
import './Faculty.css'
import img1 from '../assets/ShaylaBott.jpg'
import img2 from '../assets/AmyJax.jpg'
import img3 from '../assets/BrookeStorheim.jpg'
import img4 from '../assets/NathanBalser.jpg'
import img5 from '../assets/LizDebbie.jpg'
import img6 from '../assets/KoriWakamatsu.jpg'

const faculty = [
  {
    name: 'Shayla Bott',
    img: img1,
    bio: 'Shayla Bott is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
  },
  {
    name: 'Amy Jax',
    img: img2,
    bio: 'Amy Jax is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
  },
  {
    name: 'Brooke Storheim',
    img: img3,
    bio: 'Brooke Storheim is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
  },
  {
    name: 'Nathan Balser',
    img: img4,
    bio: 'Nathan Balser is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
  },
  {
    name: 'Liz Debbie',
    img: img5,
    bio: 'Liz Debbie is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
  },
  {
    name: 'Kori Wakamatsu',
    img: img6,
    bio: 'Kori Wakamatsu is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
  },
]

export default function Faculty() {
  return (
    <main className="faculty">
      <h1>Our Faculty</h1>
      <div className="faculty-list">
        {faculty.map((f, i) => (
          <div key={i} className="faculty-card">
            <img src={f.img} alt={f.name} />
            <h3>{f.name}</h3>
            <p>{f.bio}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
