import { gsap } from 'gsap';

export const initBubbleAnimations = () => {
  const bubbleContainer = document.getElementById('bubble-container');
  let bubbleInterval: NodeJS.Timeout | number | null = null;

  if (!bubbleContainer) {
    // Retry after a short delay if container not ready (Firefox timing issue)
    const retryTimeout = setTimeout(() => {
      initBubbleAnimations();
    }, 100);
    
    // Return cleanup that clears retry
    return () => {
      clearTimeout(retryTimeout);
      if (bubbleInterval) {
        clearInterval(bubbleInterval as NodeJS.Timeout);
      }
    };
  }

  const createBubble = () => {
    if (!bubbleContainer) return;

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 40 + 10 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + '%';
    
    // Firefox fix: Set animation properties directly, avoid animationDelay
    const duration = Math.random() * 5 + 8;
    bubble.style.animationDuration = duration + 's';
    bubble.style.animationName = 'rise';
    bubble.style.animationFillMode = 'forwards';
    bubble.style.animationTimingFunction = 'ease-in';
    
    // Generate random blueish color with varying opacity
    const r = 74; // Fixed red component
    const g = 144; // Fixed green component
    const b = 226; // Fixed blue component
    const a = Math.random() * (0.4 - 0.1) + 0.1; // Random opacity between 0.1 and 0.4
    bubble.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    
    // Force reflow for Firefox compatibility
    void bubble.offsetHeight;
    
    bubbleContainer.appendChild(bubble);

    // Remove after animation completes
    setTimeout(() => {
      if (bubble.parentNode) {
        bubble.remove();
      }
    }, (duration + 1) * 1000);
  };

  // Start creating bubbles immediately
  createBubble();
  bubbleInterval = setInterval(createBubble, 300);

  // Return a cleanup function to be used in useEffect
  return () => {
    if (bubbleInterval) {
      clearInterval(bubbleInterval as NodeJS.Timeout);
      bubbleInterval = null;
    }
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
