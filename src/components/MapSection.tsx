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
        <svg className="map-svg" viewBox="0 0 200 200">
          {/* Simplified map outline of Oslo Fjord */}
          <path 
            d="M 50 180 C 30 150, 20 120, 30 90 S 60 40, 90 20 L 110 10 C 130 20, 150 40, 170 70 S 180 150, 160 180 Z" 
            fill="#161625" 
            stroke="#333a45" 
            strokeWidth="1"
          />
          {/* Veas Location */}
          <circle id="veas-point" cx="65" cy="110" r="3" fill="var(--color-primary)" />
          <text x="40" y="115" fontSize="6" fill="#f0f4f8">VEAS</text>
          {/* Customer Location (Oslo) */}
          <circle id="customer-point" cx="105" cy="50" r="3" fill="var(--color-green)" />
          <text x="110" y="55" fontSize="6" fill="#f0f4f8">Oslo</text>
          {/* Animated path */}
          <path 
            id="map-path" 
            d="M 67 108 Q 85 80, 103 52" 
            fill="none" 
            stroke="var(--color-green)" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default MapSection;