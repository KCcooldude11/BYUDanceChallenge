import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Programs.css';

import imgContemporary from '../assets/contemporary2.jpg';
import imgBallroom from '../assets/ballroom2.jpg';
import imgCultural from '../assets/cultural2.jpg';
import imgBallet from '../assets/ballet2.jpg';
import imgMusicTheatre from '../assets/theatre3.jpg';

const programs = [
  {
    title: 'Contemporary',
    description: 'Dive into modern techniques, improvisation, and choreography.',
    image: imgContemporary,
    group: 'Contemporary Dance Theatre',
  },
  {
    title: 'Ballroom',
    description: 'Classic and Latin ballroom styles from Waltz to Salsa.',
    image: imgBallroom,
    group: 'Ballroom Dance Company',
  },
  {
    title: 'Cultural',
    description: 'Explore world dance traditions—folk, ethnic, and ceremonial.',
    image: imgCultural,
    group: 'Living Legends',
  },
  {
    title: 'Ballet',
    description: 'Develop classical technique, pointe work, and artistry.',
    image: imgBallet,
    group: 'Theatre Ballet',
  },
  {
    title: 'Music & Theatre',
    description: 'Combine dance, acting, and singing for comprehensive training.',
    image: imgMusicTheatre,
    group: 'Young Ambassadors',
  },
];

export default function Programs() {
  const [searchParams] = useSearchParams();
  const carouselRef = useRef(null);
  const selectedTitle = searchParams.get('selected');
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    if (loadedImages === programs.length && selectedTitle && carouselRef.current) {
      const selectedIndex = programs.findIndex(
        p => p.title.toLowerCase() === selectedTitle.toLowerCase()
      );

      if (selectedIndex >= 0) {
        const carousel = carouselRef.current;
        const card = carousel.children[selectedIndex];

        const scrollTo = card.offsetLeft - (carousel.offsetWidth - card.offsetWidth) / 2;

        carousel.scrollTo({
          left: scrollTo,
          behavior: 'smooth',
        });
      }
    }
  }, [loadedImages, selectedTitle]);

  return (
    <main className="programs">
      <h1>Dance Programs at BYU</h1>
      <div className="program-carousel" ref={carouselRef}>
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <img
              src={program.image}
              alt={program.title}
              onLoad={() => setLoadedImages(count => count + 1)}
            />
            <div className="program-info">
              <h2>{program.title}</h2>
              <p><strong>Performing Group:</strong> {program.group}</p>
              <p>{program.description}</p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
