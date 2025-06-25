import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
   standalone: true,  // Für Angular 14+
  imports: [CommonModule],
  template: `
    <section class="hero" id="home" #heroSection>
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      <div class="hero-content">
        <div class="subtitle">🎉 Deine Stadt, Deine Events!</div>
        <h1>Entdecke Herne wie nie zuvor</h1>
        <p>Die ultimative Event-App für junge Leute in Herne. Finde coole Events, triff neue Leute und erlebe deine Stadt von einer ganz neuen Seite!</p>
        <div class="cta-buttons">
          <a href="#download" class="cta-button" (click)="scrollToSection('download')">
            📱 App herunterladen
          </a>
          <a href="#features" class="cta-button cta-secondary" (click)="scrollToSection('features')">
            ✨ Features entdecken
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./hero.scss']
})
export class Hero implements OnInit, OnDestroy {
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef;
  private scrollListener!: () => void;

  ngOnInit() {
    this.setupParallax();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private setupParallax() {
    this.scrollListener = () => {
      const scrolled = window.pageYOffset;
      if (this.heroSection) {
        this.heroSection.nativeElement.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', this.scrollListener);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}