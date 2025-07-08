import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  // Hero-Section-Animation
  animateHero() {
    gsap.from('.hero-content', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out'
    });

    gsap.from('.hero-image', {
      duration: 1,
      x: 50,
      opacity: 0,
      delay: 0.3,
      ease: 'back.out(1.2)'
    });
  }

  // Feature-Card-Animation
  animateFeatures() {
    gsap.utils.toArray('.feature-card').forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "circ.out"
      });
    });
  }

  // Download-Button-Animation
  animateCTAButtons() {
    gsap.from('.store-btn', {
      scrollTrigger: {
        trigger: '.final-cta',
        start: "top 75%"
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "elastic.out(1, 0.5)"
    });
  }
  // In animation.service.ts
animateHomepage() {
  // Hero Animation
  gsap.from('.hero-content', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  });

  // Feature Cards Animation
  (gsap.utils.toArray('.feature-card') as HTMLElement[]).forEach((card: HTMLElement, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: '.features',
        start: 'top 75%'
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'back.out(1.2)'
    });
  });

  // Event Cards Animation
  (gsap.utils.toArray('.event-card') as HTMLElement[]).forEach((card: HTMLElement, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: '.event-listings',
        start: 'top 75%'
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.07,
      ease: 'power2.out'
    });
  });
}
}