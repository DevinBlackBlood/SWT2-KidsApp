import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.html',
  styleUrls: ['./image-slider.css']
})
export class ImageSlider implements OnInit {
  slides =[
    { 
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Spielplatzfest am Samstag',
      date: '15. Juli 2023',
      time: '14:00 - 18:00 Uhr',
      location: 'Stadtpark Spielplatz',
      description: 'Spiele, Musik und Essen für die ganze Familie!'
    },
    { 
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Familientag im Park',
      date: '22. Juli 2023',
      time: '11:00 - 17:00 Uhr',
      location: 'Central Park',
      description: 'Workshops, Spiele und Aktivitäten für alle Altersgruppen'
    },
    { 
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Kinderkonzert in der Innenstadt',
      date: '29. Juli 2023',
      time: '10:00 - 12:00 Uhr',
      location: 'Stadtplatz',
      description: 'Live-Musik speziell für unsere kleinen Gäste'
    }
  ];



  currentIndex = 0;
  interval: any;

  ngOnInit(): void {
 
  }
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}