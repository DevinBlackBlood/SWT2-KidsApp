import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
templateUrl: './stats.html',
  styleUrls: ['./stats.css']
})
export class Stats implements OnInit {
  stats = [
    { value: 12500, label: 'Aktive Nutzer', icon: '👥' },
    { value: 320, label: 'Events pro Monat', icon: '🎪' },
    { value: 98, label: 'Zufriedenheit', icon: '⭐', suffix: '%' }
  ];

  ngOnInit() {
  }
  
}