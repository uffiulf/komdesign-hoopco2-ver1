import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initScrollytelling } from '../animations/scrollytelling';
import { initCounterAnimations } from '../animations/counterAnimations';
import { initParticleAnimations } from '../animations/particleAnimations';
import { initBoatAnimations } from '../animations/boatAnimations';
import { initBubbleAnimations, initLoaderAnimation } from '../animations/bubbleAnimations';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  useEffect(() => {
    // Initialize all GSAP animations here
    initScrollytelling();
    initCounterAnimations();
    initParticleAnimations();
    initBoatAnimations();
    const cleanupBubbles = initBubbleAnimations(); // Get the cleanup function
    initLoaderAnimation();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (cleanupBubbles) {
        cleanupBubbles(); // Clean up the bubble interval
      }
    };
  }, []);
};