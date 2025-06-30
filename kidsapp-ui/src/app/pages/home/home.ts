import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Stats } from '../../components/stats/stats';
import { Features } from '../../components/features/features';
import { FinalCta } from '../../components/final-cta/final-cta';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [Header, Hero, Stats, Features, FinalCta],
})
export class Home implements OnInit, OnDestroy {
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef;

  private scrollListener?: () => void;
  private observer?: IntersectionObserver;

  // Stats data
  stats = [
    { value: '500+', label: 'Events pro Monat' },
    { value: '2.5K+', label: 'Aktive User' },
    { value: '150+', label: 'Veranstalter' },
    { value: '4.8★', label: 'App Store Rating' }
  ];

  // Features data
  features = [
    {
      icon: '🗺️',
      title: 'Interactive Map',
      description: 'Entdecke Events auf unserer interaktiven Stadtkarte. Sieh sofort, was in deiner Nähe abgeht!'
    },
    {
      icon: '🎯',
      title: 'Smart Filter',
      description: 'Finde Events nach deinen Vorlieben, Alter und Interessen. Nur das, was dich wirklich interessiert!'
    },
    {
      icon: '🤖',
      title: 'KI-Empfehlungen',
      description: 'Unsere KI lernt deine Vorlieben und schlägt dir perfekte Events vor. Nie wieder langweilige Wochenenden!'
    },
    {
      icon: '💬',
      title: 'Community Chat',
      description: 'Chatte mit anderen Teilnehmern, tausche dich aus und finde neue Freunde bei Events!'
    },
    {
      icon: '🎫',
      title: 'Easy Booking',
      description: 'Buche Events mit einem Klick und verwalte alle deine Tickets an einem Ort. Super einfach!'
    },
    {
      icon: '🔔',
      title: 'Live Updates',
      description: 'Verpasse nie wieder wichtige Infos! Erhalte Push-Benachrichtigungen für deine gebuchten Events.'
    }
  ];

  ngOnInit(): void {
    this.initSmoothScrolling();
    this.initParallaxEffect();
    this.initIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initSmoothScrolling(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  private initParallaxEffect(): void {
    this.scrollListener = () => {
      const scrolled = window.pageYOffset;
      if (this.heroSection?.nativeElement) {
        this.heroSection.nativeElement.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', this.scrollListener);
  }

  private initIntersectionObserver(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements after view init
    setTimeout(() => {
      document.querySelectorAll('.feature-card, .stat-item h3').forEach(element => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.opacity = '0';
        htmlElement.style.transform = 'translateY(30px)';
        htmlElement.style.transition = 'all 0.6s ease';
        this.observer?.observe(htmlElement);
      });
    }, 100);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  downloadApp(store: 'ios' | 'android'): void {
    // Hier würdest du die tatsächlichen Store-Links einfügen
    console.log(`Downloading app from ${store}`);
   
  }
}