import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initCounterAnimations = () => {
  // Dashboard fade-in on scroll
  gsap.fromTo(".dashboard-card", 
    { opacity: 0, y: -20 }, 
    {
      opacity: 1, 
      y: 0,
      scrollTrigger: {
        trigger: ".problem-video-container",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );

  // Red counter animation
  gsap.to("#co2-teller", {
    innerText: 8000,
    snap: "innerText",
    ease: "none",
    scrollTrigger: {
      trigger: "#scene-1",
      start: "top top",
      endTrigger: "#scene-2-active",
      end: "top 70%",
      scrub: 1,
    }
  });

  // Green counter animation
  gsap.to("#co2-teller-fangst", {
    innerText: 5000,
    snap: "innerText",
    ease: "none",
    scrollTrigger: {
      trigger: "#scene-2-active",
      start: "top 70%",
      endTrigger: "#scene-3",
      end: "bottom bottom",
      scrub: 1,
    }
  });

  // Red counter opacity change
  gsap.to("#co2-teller, #teller-label", {
    opacity: 0.3,
    ease: "none",
    scrollTrigger: {
      trigger: "#scene-2-active",
      start: "top 70%",
      end: "bottom center",
      scrub: true,
    }
  });

  // Green counter visibility change
  gsap.to("#co2-teller-fangst, #teller-label-fangst", {
    opacity: 1,
    visibility: "visible",
    ease: "none",
    scrollTrigger: {
      trigger: "#scene-2-active",
      start: "top 70%",
      end: "bottom center",
      scrub: true,
    }
  });
};