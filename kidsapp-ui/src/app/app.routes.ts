import {Routes} from '@angular/router';
import { Leaflet } from './leaflet/leaflet';
import { Welcome } from './welcome/welcome';
import { Another } from './another/another';
import {Admin} from './admin/admin';
import {UserEventVerwaltungComponent} from './user-event-verwaltung/user-event-verwaltung.component';


export const routes: Routes = [
  { path: 'leaflet', component: Leaflet },
  { path: 'test', component: Another },
  { path: 'admin', component: Admin },
  { path: 'uev', component: UserEventVerwaltungComponent },
  { path: '', component: Welcome },
];
