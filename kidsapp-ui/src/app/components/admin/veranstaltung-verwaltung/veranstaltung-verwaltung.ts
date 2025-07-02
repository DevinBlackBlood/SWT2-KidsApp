import {Component, inject, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import {Adresse, Veranstaltung, VeranstaltungControllerService} from '../../../../../src-gen/bsclient';
import {
  MatCard,
  MatCardActions, MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {DialogLoeschen} from './dialog/dialog-loeschen/dialog-loeschen';
import {DialogEdit} from './dialog/dialog-edit/dialog-edit';

export interface veranstaltungData {

  veranstaltung: Veranstaltung;
  adresse: Adresse;
}

@Component({
  selector: 'app-veranstaltung-verwaltung',
  imports: [
    MatCardSubtitle,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatCardActions,
    MatButton,
    MatCardAvatar
  ],
  templateUrl: './veranstaltung-verwaltung.html',
  styleUrl: './veranstaltung-verwaltung.css'
})



export class VeranstaltungVerwaltung implements OnInit{
  constructor(private veranstaltungControllerService:VeranstaltungControllerService) {
  }
  datasource: Veranstaltung[] = []

  ngOnInit() {

    this.veranstaltungControllerService.veranstaltungen().subscribe( e => {

      this.datasource = e;
    })
  }


  doLoeschen(id: number){

    this.veranstaltungControllerService.loeschenVeranstaltung(id).subscribe()

  }

  doSpeichern(veranstaltung: Veranstaltung, tag: boolean) {
    console.log("test")
    if(tag){
      if (veranstaltung.status == 'Inaktiv'){
      veranstaltung.status = 'Aktiv'

      }
      else {
        veranstaltung.status = 'Inaktiv'
        console.log("test")
      }
    }

  this.veranstaltungControllerService.speichernVeranstaltung(veranstaltung).subscribe()
  }



  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: number): void {
   const dialogRef = this.dialog.open(DialogLoeschen, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe( result => {

      if (result){

        this.doLoeschen(id);
      }

    })
  }

  openEditDialog(enterAnimationDuration: string, exitAnimationDuration: string, veranstaltung: Veranstaltung): void {
    const dialogRef = this.dialog.open(DialogEdit, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{ veranstaltung: veranstaltung, adresse: veranstaltung.adresse }
    });
    dialogRef.afterClosed().subscribe( result => {

      if (result != undefined){
     let veranstaltungData: veranstaltungData = result
        let veranstaltung: Veranstaltung = veranstaltungData.veranstaltung
        veranstaltung.adresse = veranstaltungData.adresse;
        console.log(veranstaltung)
        //TODO hier muss noch die Adresse gespeichert werden
        this.doSpeichern(veranstaltung, false);
      }

    })
  }


}
