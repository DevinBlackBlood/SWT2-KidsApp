import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {Veranstaltung, VeranstaltungControllerService} from '../../../../src-gen/bsclient';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCard, MatButton, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle],
  templateUrl: `./search.html`,
  styleUrls: ['./search.css']
})
export class Search implements  OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() locationFound = new EventEmitter<any>();

  searchTerm = '';
  searchResults: any[] = [];

  constructor(private veranstaltungControllerService:VeranstaltungControllerService) {
  }
  datasource: Veranstaltung[] = []
filteredDatasource: Veranstaltung[] = [];
  ngOnInit() {

    this.veranstaltungControllerService.getVeranstaltungenByStatus("Aktiv").subscribe( e => {

      this.datasource = e;
      this.filteredDatasource = e;
    })


  }

  search() {

    this.filteredDatasource = this.datasource.filter(item => {
      return item.veranstaltungName!.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.beschreibung!.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
