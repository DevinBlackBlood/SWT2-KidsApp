import {Component, Inject} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {Veranstaltung} from '../../../../../../src-gen/bsclient';

@Component({
  selector: 'app-details-dialog',
  imports: [
    MatListModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
    MatDialogTitle
  ],
  templateUrl: './details-dialog.html',
  styleUrl: './details-dialog.css'
})
export class DetailsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Veranstaltung) {
    console.log('Dialog data:', data);
  }
}
