import { gsap } from 'gsap';

export const initBubbleAnimations = () => {
  const bubbleContainer = document.getElementById('bubble-container');
  if (!bubbleContainer) return;

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

  // The window 'load' event was unreliable across browsers with React.
  // This runs the animation directly when the component mounts (via useEffect).
  // A small delay ensures the loader is rendered before it starts fading out.
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
