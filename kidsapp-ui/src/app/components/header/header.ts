import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
   standalone: true,  // Für Angular 14+
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled">
      <div class="nav-container">
        <div class="logo">Herne Events</div>
        <ul class="nav-links" [class.mobile-open]="mobileMenuOpen">
          <li><a href="#home" (click)="scrollToSection('home')">Home</a></li>
          <li><a href="#features" (click)="scrollToSection('features')">Features</a></li>
          <li><a href="#community" (click)="scrollToSection('community')">Community</a></li>
          <li><a href="#download" (click)="scrollToSection('download')">Download</a></li>
        </ul>
        <a href="#download" class="download-btn" (click)="scrollToSection('download')">App laden</a>
        <button class="mobile-menu-btn" (click)="toggleMobileMenu()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `,
  styleUrls: ['./header.scss']
})
export class Header {
  isScrolled = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  scrollToSection(sectionId: string) {
    this.mobileMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}