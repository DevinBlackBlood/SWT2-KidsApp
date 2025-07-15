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
import {Router, ActivatedRoute } from '@angular/router';
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

  userId: number = 0;

  readonly dialog = inject(MatDialog);

  constructor(public router: Router, public veranstaltungService: VeranstaltungControllerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataInit();
  }

  dataInit() {
    this.route.paramMap.subscribe(params => {
        this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.veranstaltungService.getVeranstaltungenForUser(this.userId).subscribe(data => {
      this.veranstaltungen = data;
      this.veranstaltungen = [...this.veranstaltungen]
    })
  })
}


  cancelBooking(id: number | undefined) {
    let dialogRef = this.dialog.open(ConfirmDialog);
    let veranstaltungId = 11;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.veranstaltungService.deleteVeranstaltungForUser(veranstaltungId, this.userId).subscribe({
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
