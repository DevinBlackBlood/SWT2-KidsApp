import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../services/animation';
import { FinalCta } from "../../components/final-cta/final-cta";
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FinalCta],
  providers: [DatePipe],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  features = [
    {
      icon: '<i class="fas fa-map-marked-alt"></i>',
      title: 'Live Event-Karte',
      description: 'Alle Events auf einen Blick in der interaktiven Karte'
    },
    {
      icon: '<i class="fas fa-robot"></i>',
      title: 'KI-Empfehlungen',
      description: 'Personalisierte Vorschläge basierend auf deinen Vorlieben'
    },
    {
      icon: '<i class="fas fa-users"></i>',
      title: 'Community',
      description: 'Austausch mit anderen Event-Fans und Veranstaltern'
    }
  ];

  filters = ['Alle', 'Musik', 'Sport', 'Kunst', 'Essen'];
  activeFilter = 'Alle';

  events = [
    {
      title: 'Stadtfest Herne',
      location: 'Stadtpark Herne',
      date: new Date('2023-06-15'),
      category: 'Festival',
      image: 'assets/images/event1.jpg'
    },
    // Weitere Events...
  ];

  get filteredEvents() {
    return this.activeFilter === 'Alle' 
      ? this.events 
      : this.events.filter(e => e.category === this.activeFilter);
  }

  constructor(private animation: AnimationService) {}

  ngOnInit() {
    this.animation.animateHomepage();
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}