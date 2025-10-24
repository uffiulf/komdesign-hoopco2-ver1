import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initParticleAnimations = () => {
  gsap.matchMedia().add("(min-width: 769px)", () => {
    // Desktop animations
    const scene2ActiveTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#scene-2-active",
        start: "top 70%",
        end: "bottom center",
        scrub: 1,
        toggleActions: "play reverse play reverse"
      }
    });

    scene2ActiveTimeline.to(".anim-co2-partikkel", {
      x: () => document.querySelector('#infografikk-1').clientWidth / 2 - (document.querySelector('.anim-co2-partikkel').clientWidth / 2),
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
      x: () => document.querySelector('#infografikk-1').clientWidth - (document.querySelector('.infographic-box').clientWidth) - (document.querySelector('.anim-co2-partikkel').clientWidth / 2) - 10,
      ease: "none"
    });
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

  // Common animations for both mobile and desktop
  gsap.to(".anim-co2-partikkel", {
    backgroundColor: "var(--color-green)",
    boxShadow: "0 0 15px 5px var(--color-green)",
    ease: "none",
    scrollTrigger: {
      trigger: "#scene-2-active",
      start: "top 70%",
      end: "bottom center",
      scrub: true,
    }
  });
};