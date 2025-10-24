import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MapSection: React.FC = () => {
  useEffect(() => {
    const path = document.querySelector('#map-path');
    if (path) {
      const pathLength = (path as SVGPathElement).getTotalLength();
      gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

      gsap.to(path, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: ".map-section",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      });
    }
  }, []);

  return (
    <section className="map-section">
      <div className="map-text">
        <h3>Kortreist & Sporbart</h3>
        <p>I motsetning til importert CO2 fra Europa, leveres Hoop sin gass fra Veas i Asker direkte til kunder i Oslo-området. Dette reduserer transportutslipp og styrker den lokale sirkulærøkonomien.</p>
      </div>
      <div className="map-container">
        <svg className="map-svg" viewBox="0 0 200 150">
          {/* Simplified map outline of Oslo area */}
          <path d="M 10 140 Q 50 100, 80 90 T 150 40 L 190 10" fill="none" stroke="#333a45" strokeWidth="2" />
          <circle id="veas-point" cx="80" cy="90" r="3" fill="var(--color-primary)" />
          <text x="75" y="105" fontSize="6" fill="#f0f4f8">VEAS</text>
          <circle id="customer-point" cx="150" cy="40" r="3" fill="var(--color-green)" />
          <text x="145" y="35" fontSize="6" fill="#f0f4f8">Kunde</text>
          {/* Animated path */}
          <path id="map-path" d="M 82 88 Q 110 60, 148 42" fill="none" stroke="var(--color-green)" strokeWidth="1.5" />
        </svg>
      </div>
    </section>
  );
};

export default MapSection;