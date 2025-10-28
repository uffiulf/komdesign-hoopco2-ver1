import { gsap } from 'gsap';

export const initBubbleAnimations = () => {
  const bubbleContainer = document.getElementById('bubble-container');
  if (!bubbleContainer) {
    console.warn("Bubble container (#bubble-container) not found. Bubbles will not animate.");
    return;
  }

  let bubbleInterval: NodeJS.Timeout;

  const createBubble = () => {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 40 + 10 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDuration = Math.random() * 5 + 8 + 's';
    bubble.style.animationDelay = Math.random() * 3 + 's';

    // Generate random blueish color with varying opacity
    const r = 74; // Fixed red component
    const g = 144; // Fixed green component
    const b = 226; // Fixed blue component
    const a = Math.random() * (0.4 - 0.1) + 0.1; // Random opacity between 0.1 and 0.4
    bubble.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;

    bubbleContainer.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 13000);
  };

  bubbleInterval = setInterval(createBubble, 300);

  // Return a cleanup function to be used in useEffect
  return () => {
    clearInterval(bubbleInterval);
  };
};

export const initLoaderAnimation = () => {
  const loader = document.getElementById('loader');
  if (!loader) return;

  gsap.to(loader, {
    opacity: 0,
    duration: 0.5,
    delay: 0.2, // Small delay to prevent race conditions
    onComplete: () => {
      if (loader) {
        loader.style.display = 'none';
      }
    },
  });
};
