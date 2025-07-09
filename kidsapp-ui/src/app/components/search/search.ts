import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: `./search.html`,
  styleUrls: ['./search.css']
})
export class Search {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() locationFound = new EventEmitter<any>();

  searchTerm = '';
  searchResults: any[] = [];

}