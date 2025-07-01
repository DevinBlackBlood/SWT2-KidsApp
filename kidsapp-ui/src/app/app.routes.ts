import {Routes} from '@angular/router';
import { Leaflet } from './components/leaflet/leaflet';
import { Welcome } from './components/welcome/welcome';
import { Another } from './components/another/another';
import {Admin} from './components/admin/admin';
import {UserVerwaltung} from './components/admin/user-verwaltung/user-verwaltung';
import {VeranstaltungVerwaltung} from './components/admin/veranstaltung-verwaltung/veranstaltung-verwaltung';
import {RechungVerwaltung} from './components/admin/rechung-verwaltung/rechung-verwaltung';
import {AntraegeVerwaltung} from './components/admin/antraege-verwaltung/antraege-verwaltung';
import {UserEventVerwaltungComponent} from './user-event-verwaltung/user-event-verwaltung.component';


export const routes: Routes = [
  { path: 'leaflet', component: Leaflet },
  { path: 'test', component: Another },
  { path: 'admin', component: Admin },
  { path: 'uev', component: UserEventVerwaltungComponent },
  { path: '', component: Welcome },
  { path: 'user/verwaltung', component: UserVerwaltung },
  { path: 'veranstaltung/verwaltung', component: VeranstaltungVerwaltung },
  { path: 'rechnungen/verwaltung', component: RechungVerwaltung },
  { path: 'antraege/verwaltung', component: AntraegeVerwaltung },
];
