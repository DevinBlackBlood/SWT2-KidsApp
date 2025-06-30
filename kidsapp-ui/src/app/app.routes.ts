import { Routes } from '@angular/router';
import { Leaflet } from './leaflet/leaflet';
import { Welcome } from './welcome/welcome';
import { Another } from './another/another';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: 'leaflet', component: Leaflet },
   { path: 'test', component: Another },
  { path: '', component: Welcome }, 
  { 
    path: 'home',
    component: Home,
  },
];
