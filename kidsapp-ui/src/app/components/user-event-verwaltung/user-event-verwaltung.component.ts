import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';

@Component({
  selector: 'app-user-event-verwaltung',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './user-event-verwaltung.component.html',
  styleUrl: './user-event-verwaltung.component.css'
})
export class UserEventVerwaltungComponent {

}
