import { Component, OnInit, inject } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';
import {Veranstalter, Veranstaltung, VeranstaltungControllerService} from '../../../../src-gen/bsclient';
import {ConfirmDialog} from './dialog/confirm-dialog/confirm-dialog';
import {DetailsDialog} from './dialog/details-dialog/details-dialog';

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
    MatCardModule,
    MatDialogModule
  ],
  templateUrl: './user-event-verwaltung.component.html',
  styleUrl: './user-event-verwaltung.component.css'
})
export class UserEventVerwaltungComponent implements OnInit {

  veranstaltungen: Veranstaltung[] = [];
  veranstalter: Veranstalter[] = [];

  readonly dialog = inject(MatDialog);

  constructor(public router: Router, public veranstaltungService: VeranstaltungControllerService) {
  }

  ngOnInit() {
    this.dataInit();
  }

  dataInit() {
    this.veranstaltungService.getVeranstaltungenForUser(10).subscribe(data => {
      this.veranstaltungen = data;
      this.veranstaltungen = [...this.veranstaltungen]
    })
  }

  cancelBooking(id: number | undefined) {
    let dialogRef = this.dialog.open(ConfirmDialog);
    let veranstaltungId = 1;
    let userId = 1;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.veranstaltungService.deleteVeranstaltungForUser(veranstaltungId, userId).subscribe({
          next: () => {
            this.veranstaltungen = this.veranstaltungen.filter(v => v.id !== veranstaltungId);
          },
          error: (err) => {
            console.error('Fehler beim Stornieren:', err);
          }
        });
      }
    });
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  openDetails(veranstaltung: Veranstaltung) {
    this.dialog.open(DetailsDialog, { data: veranstaltung });
  }
}
