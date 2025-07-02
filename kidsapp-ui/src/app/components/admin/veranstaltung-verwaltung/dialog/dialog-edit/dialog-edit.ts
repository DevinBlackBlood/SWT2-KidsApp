import {Component, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialogActions, MatDialogContent,
  MatDialogRef, MatDialogTitle,

} from '@angular/material/dialog';
import {VeranstaltungVerwaltung} from '../../veranstaltung-verwaltung';
import {Adresse, Veranstaltung} from '../../../../../../../src-gen/bsclient';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

export interface veranstaltungData {

  veranstaltung: Veranstaltung;
  adresse: Adresse;
}

@Component({
  selector: 'app-dialog-edit',
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatFormField,
    FormsModule,
    MatLabel
  ],
  templateUrl: './dialog-edit.html',
  styleUrl: './dialog-edit.css'
})


export class DialogEdit {
  readonly dialogRef = inject(MatDialogRef<VeranstaltungVerwaltung>);
  readonly data = inject<veranstaltungData>(MAT_DIALOG_DATA)
  veranstaltung: veranstaltungData = JSON.parse(JSON.stringify(this.data))
  onNoCLick(): void {
    this.dialogRef.close();
  }
  onYesClick(): void {

    this.dialogRef.close(this.veranstaltung);
  }
}
