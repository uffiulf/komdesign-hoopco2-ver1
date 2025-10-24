import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollytelling = () => {
  const graphicSteps = gsap.utils.toArray('.graphic-step');
  graphicSteps.forEach((step: any, i: number) => step.setAttribute('data-index', i));

  const mapping = [
    ["#scene-1", -1],
    ["#scene-2", 0],
    ["#scene-2-active", 0],
    ["#scene-3", 0],
    ["#scene-4", 1]
  ];

  mapping.forEach(([sceneID, graphicIndex]) => {
    const scene = document.querySelector(sceneID as string);

    ScrollTrigger.create({
      trigger: scene,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        scene?.classList.toggle('is-active', self.isActive);
        if (graphicIndex !== -1) {
          (graphicSteps[graphicIndex] as Element)?.classList.toggle('is-active', self.isActive);
        }
      },
      onEnter: () => graphicSteps.forEach((step: any, i: number) => { 
        if (i !== graphicIndex) step.classList.remove('is-active'); 
      }),
      onEnterBack: () => graphicSteps.forEach((step: any, i: number) => { 
        if (i !== graphicIndex) step.classList.remove('is-active'); 
      }),
    });
  });

  document.querySelector('#scene-1')?.classList.add('is-active');
};