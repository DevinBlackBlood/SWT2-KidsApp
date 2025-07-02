import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  userStory: string;
  color: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})
export class Features {
  features: FeatureCard[] = [
    {
      icon: '📅',
      title: 'Interactive Event Map',
      description: 'Finde Events direkt in deiner Nähe auf der Karte',
      userStory: 'Events an Stadtorten anzeigen',
      color: '#FF6B6B'
    },
    {
      icon: '🔍',
      title: 'Smart Filter',
      description: 'Filter nach Alter, Kategorien & Vorlieben',
      userStory: 'Filtern nach Vorlieben und Alter',
      color: '#4ECDC4'
    },
    {
      icon: '🤖',
      title: 'KI-Empfehlungen',
      description: 'Personalisierte Vorschläge basierend auf deinem Verhalten',
      userStory: 'KI-basierte Event-Vorschläge',
      color: '#FFBE0B'
    },
    {
      icon: '💬',
      title: 'Community Chat',
      description: 'Tausch dich mit anderen aus',
      userStory: 'Community Austausch',
      color: '#A78BFA'
    }
  ];

  activeCard: number | null = null;

  toggleCard(index: number): void {
    this.activeCard = this.activeCard === index ? null : index;
  }
} 