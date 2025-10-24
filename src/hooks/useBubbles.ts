import { useEffect } from 'react';

const useBubbles = () => {
  useEffect(() => {
    const bubbleContainer = document.getElementById('bubble-container');
    let bubbleInterval: NodeJS.Timeout;

    const createBubble = () => {
      if (!bubbleContainer) return;

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

    return () => {
      clearInterval(bubbleInterval);
    };
  }, []);
};

export default useBubbles;