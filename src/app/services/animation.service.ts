import { Injectable } from '@angular/core';

export interface AnimationConfig {
  threshold?: number;
  staggerDelay?: number;
  initialDelay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  
  // /**
  //  * Sets up intersection observer for scroll animations
  //  * @param selector - CSS selector for the element to observe
  //  * @param callback - Function to call when element is visible
  //  * @param config - Configuration options
  //  */
  // setupScrollAnimation(
  //   selector: string,
  //   callback: () => void,
  //   config: AnimationConfig = {}
  // ): IntersectionObserver | null {
  //   const { threshold = 0.2 } = config;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           callback();
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     { threshold }
  //   );

  //   setTimeout(() => {
  //     const element = document.querySelector(selector);
  //     if (element) {
  //       observer.observe(element);
  //     }
  //   }, 100);

  //   return observer;
  // }

  // /**
  //  * Animates a list of items with stagger effect
  //  * @param items - Array of items with visible property
  //  * @param config - Animation configuration
  //  */
  // staggerAnimation<T extends { visible: boolean }>(
  //   items: T[],
  //   config: AnimationConfig = {}
  // ): void {
  //   const { staggerDelay = 200, initialDelay = 0 } = config;

  //   items.forEach((item, index) => {
  //     setTimeout(() => {
  //       item.visible = true;
  //     }, initialDelay + (index * staggerDelay));
  //   });
  // }

  // /**
  //  * Animates multiple states sequentially
  //  * @param states - Array of state setters with delays
  //  */
  // sequenceAnimation(states: Array<{ setter: () => void, delay: number }>): void {
  //   states.forEach(({ setter, delay }) => {
  //     setTimeout(() => setter(), delay);
  //   });
  // }

  // /**
  //  * Creates a hero section animation sequence
  //  * @param callbacks - Object with animation callbacks
  //  */
  // heroAnimation(callbacks: {
  //   name: () => void,
  //   role: () => void,
  //   tagline: () => void,
  //   cta: () => void
  // }): void {
  //   this.sequenceAnimation([
  //     { setter: callbacks.name, delay: 100 },
  //     { setter: callbacks.role, delay: 300 },
  //     { setter: callbacks.tagline, delay: 600 },
  //     { setter: callbacks.cta, delay: 900 }
  //   ]);
  // }

  // /**
  //  * Smooth scroll to element
  //  * @param selector - CSS selector of target element
  //  */
  // smoothScrollTo(selector: string): void {
  //   const element = document.querySelector(selector);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  // /**
  //  * Cleanup observer
  //  * @param observer - IntersectionObserver to disconnect
  //  */
  // cleanup(observer: IntersectionObserver | null): void {
  //   if (observer) {
  //     observer.disconnect();
  //   }
  // }
}