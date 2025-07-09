import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SlideImage {
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.html',
  styleUrls: ['./image-slider.css']
})

export class ImageSlider implements OnInit, OnDestroy {
  @Input() images: SlideImage[] = [];
  @Input() autoPlay = false;
  @Input() interval = 3000;

  currentSlide = 0;
  private autoPlayInterval: any;

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.images.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  private startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}
