import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initParticleAnimations = () => {
  gsap.matchMedia().add("(min-width: 769px)", () => {
    // Wait for DOM to be ready
    const initAnimation = () => {
      const infografikk1 = document.querySelector('#infografikk-1') as HTMLElement;
      const partikkel = document.querySelector('.anim-co2-partikkel') as HTMLElement;
      const infographicBoxes = document.querySelectorAll('.infographic-box');
      
      if (!infografikk1 || !partikkel || infographicBoxes.length === 0) {
        // Retry if elements not ready
        requestAnimationFrame(initAnimation);
        return;
      }
      
      // Function to calculate positions dynamically (handles resize)
      const calculatePositions = () => {
        const infografikk1Width = infografikk1.clientWidth;
        const partikkelWidth = partikkel.clientWidth;
        const lastBox = infographicBoxes[infographicBoxes.length - 1] as HTMLElement;
        const boxWidth = lastBox.clientWidth;
        
        return {
          midPoint: infografikk1Width / 2 - (partikkelWidth / 2),
          endPoint: infografikk1Width - boxWidth - (partikkelWidth / 2) - 10
        };
      };
      
      // Create a single continuous timeline covering both scenes
      const particleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#scene-2-active",
          start: "top 70%",
          endTrigger: "#scene-3",
          end: "bottom bottom",
          scrub: true, // Smooth scrub - continuous animation
          refreshPriority: -1,
          invalidateOnRefresh: true,
          pin: false,
        }
      });

      // Animate through all positions in one smooth timeline
      particleTimeline.to(".anim-co2-partikkel", {
        x: () => calculatePositions().midPoint,
        ease: "none",
        duration: 0.5 // First half of scroll goes to midpoint
      })
      .to(".anim-co2-partikkel", {
        x: () => calculatePositions().endPoint,
        ease: "none",
        duration: 0.5 // Second half goes to endpoint
      });
    };
    
    // Start initialization
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAnimation);
    } else {
      // Small delay to ensure layout is complete
      setTimeout(initAnimation, 100);
    }
  });

  gsap.matchMedia().add("(max-width: 768px)", () => {
    // Mobile animations
    const scene2ActiveTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#scene-2-active",
        start: "top 80%",
        end: "bottom center",
        scrub: 1,
        toggleActions: "play reverse play reverse"
      }
    });

    scene2ActiveTimeline.to(".anim-co2-partikkel", {
      y: 150, // Move vertically on mobile
      ease: "none",
    }, "<");

    const scene3Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#scene-3",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    scene3Timeline.to(".anim-co2-partikkel", {
      y: 300, // Continue moving vertically
      ease: "none"
    });
  });

  // Common animations for both mobile and desktop - color change
  gsap.matchMedia().add("(min-width: 769px)", () => {
    gsap.to(".anim-co2-partikkel", {
      backgroundColor: "var(--color-green)",
      boxShadow: "0 0 15px 5px var(--color-green)",
      ease: "none", // Linear for smooth scrubbing
      scrollTrigger: {
        trigger: "#scene-2-active",
        start: "top 70%",
        end: "bottom center",
        scrub: true, // Smooth scrub
        refreshPriority: -1,
      }
    });
  });
};