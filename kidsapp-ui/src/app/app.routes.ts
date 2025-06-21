import { Routes } from '@angular/router';
import { Leaflet } from './leaflet/leaflet';
import { Welcome } from './welcome/welcome';
import { Another } from './another/another';

export const routes: Routes = [
  { path: 'leaflet', component: Leaflet },
   { path: 'test', component: Another },
  { path: '', component: Welcome }, 
];
