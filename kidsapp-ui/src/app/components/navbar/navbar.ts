import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIconButton} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(private router:Router) {
  }
  user: boolean = true

  doRoute(url: string) {

    this.router.navigateByUrl(url)
  }
}
