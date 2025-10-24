import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initScrollytelling } from '../animations/scrollytelling';
import { initCounterAnimations } from '../animations/counterAnimations';
import { initParticleAnimations } from '../animations/particleAnimations';
import { initBoatAnimations } from '../animations/boatAnimations';

gsap.registerPlugin(ScrollTrigger);

const initBubbleAnimations = () => {
  const bubbleContainer = document.getElementById('bubble-container');
  let bubbleInterval: NodeJS.Timeout;

  const createBubble = () => {
    if (!bubbleContainer) return;

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 40 + 10 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDuration = Math.random() * 5 + 8 + 's';
    bubble.style.animationDelay = Math.random() * 3 + 's';

    bubbleContainer.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 13000);
  };

  // Start bubbles immediately
  bubbleInterval = setInterval(createBubble, 300);

  return () => {
    clearInterval(bubbleInterval);
  };
};

const initLoaderAnimation = () => {
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    gsap.to(loader, { 
      opacity: 0, 
      duration: 0.5, 
      onComplete: () => loader && (loader.style.display = 'none')
    });
  });
};

export const useGSAP = () => {
  useEffect(() => {
    // Initialize all GSAP animations here
    initScrollytelling();
    initCounterAnimations();
    initParticleAnimations();
    initBoatAnimations();
    initBubbleAnimations();
    initLoaderAnimation();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};