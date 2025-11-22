import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initTimelineAnimations = () => {
  const timelineSection = document.querySelector('.timeline-section');
  if (!timelineSection) return;

  // Animate timeline line drawing (the vertical line)
  // We'll animate it via the container's height or use a wrapper approach

  // Animate section title
  const sectionTitle = timelineSection.querySelector('h2');
  if (sectionTitle) {
    gsap.fromTo(sectionTitle,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineSection,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }

  // Scrollytelling animation for each timeline item
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach((item, index) => {
    const year = item.querySelector('.timeline-year');
    const content = item.querySelector('.timeline-content');
    
    if (!year || !content) return;
    
    // Set initial state - all items start invisible
    gsap.set([year, content], {
      opacity: 0,
      y: 20
    });
    
    // Create ScrollTrigger for scrollytelling effect
    ScrollTrigger.create({
      trigger: item,
      start: "top 75%",
      end: "top 25%",
      onEnter: () => {
        // Fade in when entering viewport
        gsap.to([year, content], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1
        });
        
        // Subtle scale effect on year box
        gsap.to(year, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
          yoyo: true,
          repeat: 1
        });
      },
      onLeave: () => {
        // Fade out when leaving viewport (scrolling down)
        gsap.to([year, content], {
          opacity: 0.3,
          y: -10,
          duration: 0.4,
          ease: "power2.in"
        });
      },
      onEnterBack: () => {
        // Fade back in when scrolling back up
        gsap.to([year, content], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1
        });
      },
      onLeaveBack: () => {
        // Fade out when scrolling back up past item
        gsap.to([year, content], {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: "power2.in"
        });
      }
    });
  });
  
  // Animate the vertical timeline line with scroll
  const timelineContainer = timelineSection.querySelector('.timeline-container') as HTMLElement;
  if (timelineContainer) {
    // Create a style element to control the ::before pseudo-element
    const styleId = 'timeline-line-animation';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    // Animate the line by updating the style
    ScrollTrigger.create({
      trigger: timelineSection,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        styleElement.textContent = `
          .timeline-container::before {
            transform: scaleY(${progress});
            transform-origin: top center;
          }
        `;
      }
    });
  }
};

