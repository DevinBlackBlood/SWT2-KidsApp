import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import {Veranstaltung, VeranstaltungControllerService} from '../../../../../src-gen/bsclient';
import {
  MatCard,
  MatCardActions, MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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
}
