import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initBoatAnimations = () => {
  // Set initial position of the boat far to the right
  gsap.set("#beccs-skip", { x: "100vw", opacity: 1 });

  const beccsTidslinje = gsap.timeline({
    scrollTrigger: {
      trigger: "#scene-4",
      start: "top bottom", // Start when scene enters viewport
      end: "bottom top", // End when scene leaves viewport - much longer scroll distance
      scrub: 3, // Much slower animation - takes full scroll through scene
    }
  });

  // Animate the boat to the center
  beccsTidslinje.to("#beccs-skip", {
    x: 0, // Animate to its new centered position
    ease: "power1.out", // Very gentle easing for slow entry
    duration: 1, // Explicit duration for control
  });

  // Animate the pipe drawing and particles
  beccsTidslinje.to("#beccs-pipe-path", { strokeDashoffset: 0, ease: "none" }, "<0.5");
  beccsTidslinje.to(".beccs-particle", { opacity: 1, y: 200, ease: "power1.in", stagger: 0.2 }, ">-0.2");

  // Dashboard fade out
  gsap.to(".dashboard-card", {
    opacity: 0,
    visibility: "hidden",
    scrollTrigger: {
      trigger: "#scene-4",
      start: "top center",
      end: "top top",
      toggleActions: "play none none reverse"
    }
  });
};