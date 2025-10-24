import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollTrigger = (trigger: string, animation: gsap.core.Tween | gsap.core.Timeline) => {
  useLayoutEffect(() => {
    const st = ScrollTrigger.create({
      trigger,
      animation,
      // Add your ScrollTrigger options here
    });

    return () => {
      st.kill();
    };
  }, [trigger, animation]);
};

export default useScrollTrigger;