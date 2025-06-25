import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../services/animation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-final-cta',
   standalone: true,  // Für Angular 14+
  imports: [CommonModule],
  templateUrl: './final-cta.html',
  styleUrls: ['./final-cta.scss']
})
export class FinalCta implements OnInit {
  constructor(private animation: AnimationService) {}

  ngOnInit() {
    this.animation.animateCTAButtons();
  }
}