import {Component, ViewChild} from '@angular/core';
import {MatMenu, MatMenuTrigger} from '@angular/material/menu';
import {MatSidenav} from '@angular/material/sidenav';
import {MatIcon} from '@angular/material/icon';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [
    MatMenu,
    MatMenuTrigger,
    MatIcon,
    MatListItem,
    MatNavList,
    MatToolbar,
    MatButtonToggle,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    RouterLink
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

constructor() {
}


do(){

  console.log("click")
}
}
