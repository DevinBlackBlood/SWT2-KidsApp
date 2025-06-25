import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Stats } from "./components/stats/stats";
import { Features } from "./components/features/features";
import { FinalCta } from "./components/final-cta/final-cta";

@Component({
  selector: 'app-root',
  template: `
    <div class="gradient-bg"></div>
    <div class="glass-overlay"></div>
    
    <app-header></app-header>
    <app-hero></app-hero>
    <app-stats></app-stats>
    <app-features></app-features>
    <app-final-cta></app-final-cta>
  `,
  styleUrls: ['./app.scss'],
  imports: [Header, Hero, Stats, Features, FinalCta]
})
export class App {
  title = 'herne-events-app';
}