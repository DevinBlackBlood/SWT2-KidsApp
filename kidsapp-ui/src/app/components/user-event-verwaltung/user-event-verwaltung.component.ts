import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-event-verwaltung',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle,
    MatButtonModule,
    MatCardModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-event-verwaltung.component.html',
  styleUrl: './user-event-verwaltung.component.css'
})
export class UserEventVerwaltungComponent {

  cards: string[] = ["1", "2", "3"];

  constructor(public router: Router) {
  }

  cancelBooking() {
    console.log('Booking canceled')
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
