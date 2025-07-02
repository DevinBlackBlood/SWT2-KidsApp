import {Component, inject, model} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {VeranstaltungVerwaltung} from '../../veranstaltung-verwaltung';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-dialog-loeschen',
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatButton,
    MatDialogTitle
  ],
  templateUrl: './dialog-loeschen.html',
  styleUrl: './dialog-loeschen.css'
})
export class DialogLoeschen {
  readonly dialogRef = inject(MatDialogRef<VeranstaltungVerwaltung>);

  onNoCLick(): void {
    this.dialogRef.close(false);
  }
onYesClick(): void {

  this.dialogRef.close(true);
}

}
