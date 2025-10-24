import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initBoatAnimations = () => {
  gsap.set("#beccs-skip", { x: "100vw", opacity: 1 });

  const beccsTidslinje = gsap.timeline({
    scrollTrigger: {
      trigger: "#scene-4",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    }
  });

  beccsTidslinje.to("#beccs-skip", {
    x: 0,
    ease: "power2.inOut",
  });
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