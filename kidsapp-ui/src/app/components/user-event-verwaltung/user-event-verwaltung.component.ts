import {Component, inject, OnInit} from '@angular/core';
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
import {ActivatedRoute, Router} from '@angular/router';
import {
  BenutzerControllerService,
  Veranstalter,
  Veranstaltung,
  VeranstaltungControllerService
} from '../../../../src-gen/bsclient';
import {ConfirmDialog} from './dialog/confirm-dialog/confirm-dialog';
import {DetailsDialog} from './dialog/details-dialog/details-dialog';
import { forkJoin } from 'rxjs';


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
  favoriteVeranstaltungen: Veranstaltung[] = [];
  allVeranstaltungen: Veranstaltung[] = [];

  showFavoritesOnly = false;

  veranstalter: Veranstalter[] = [];
  favoriteIds = new Set<number>();

  userId: number = 0;

  readonly dialog = inject(MatDialog);

  constructor(public router: Router, public benutzerService: BenutzerControllerService, public veranstaltungService: VeranstaltungControllerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataInit();
  }

  dataInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = Number(this.route.snapshot.paramMap.get('id'));

      this.veranstaltungService.getVeranstaltungenForUser(this.userId).subscribe(veranstaltungen => {
        this.allVeranstaltungen = veranstaltungen;

        this.benutzerService.getFavoritesForUser(this.userId).subscribe(favorites => {
          this.favoriteIds = new Set(favorites.map(f => f.id!).filter(Boolean));

          this.favoriteVeranstaltungen = this.allVeranstaltungen.filter(v =>
            v.id !== undefined && this.favoriteIds.has(v.id)
          );

          this.updateVeranstaltungen();
        });
      });
    });
  }

  unfavorite(favoriteId: number) {
    const dialogRef = this.dialog.open(ConfirmDialog);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.benutzerService.entferneFavorit(this.userId, favoriteId).subscribe({
          next: () => {
            this.favoriteIds.delete(favoriteId);
            this.favoriteVeranstaltungen = this.favoriteVeranstaltungen.filter(v => v.id !== favoriteId);
            this.updateVeranstaltungen();
            console.log("Entfavorisiert");
          },
          error: err => console.error("Fehler beim Entfernen:", err)
        });
      }
    });
  }


  checkIsFavorite(veranstaltung: Veranstaltung): boolean {
    return veranstaltung.id !== undefined && this.favoriteIds.has(veranstaltung.id);
  }


  favorite(id: number) {
    this.benutzerService.fuegeFavoritHinzu(this.userId, id).subscribe(() => {
      this.favoriteIds.add(id);
      const event = this.allVeranstaltungen.find(v => v.id === id);
      if (event && !this.favoriteVeranstaltungen.some(v => v.id === id)) {
        this.favoriteVeranstaltungen.push(event);
      }
      this.updateVeranstaltungen();
    });
  }

  updateVeranstaltungen() {
    this.veranstaltungen = this.showFavoritesOnly
      ? [...this.favoriteVeranstaltungen]
      : [...this.allVeranstaltungen];
  }

  cancelBooking(veranstaltungId: number | undefined) {
    if (!veranstaltungId) return;

    const dialogRef = this.dialog.open(ConfirmDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.veranstaltungService.deleteVeranstaltungForUser(this.userId, veranstaltungId).subscribe({
          next: () => {
            this.veranstaltungen = this.veranstaltungen.filter(v => v.id !== veranstaltungId);
            this.favoriteIds.delete(veranstaltungId);
            this.favoriteVeranstaltungen = this.favoriteVeranstaltungen.filter(v => v.id !== veranstaltungId);
          },
          error: (err) => {
            console.error('Fehler beim Stornieren:', err);
          }
        });
      }
    });
  }

  navigate(url
           :
           string
  ) {
    this.router.navigateByUrl(url);
  }

  openDetails(veranstaltung
              :
              Veranstaltung
  ) {
    this.dialog.open(DetailsDialog, {data: veranstaltung});
  }


  switchEventsToFavorites() {
    this.showFavoritesOnly = !this.showFavoritesOnly;
    this.updateVeranstaltungen();
  }

}
