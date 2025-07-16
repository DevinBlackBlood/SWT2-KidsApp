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
navigateToLogin() {
throw new Error('Method not implemented.');

}

  constructor(private router:Router) {
  }
  user: boolean = true
    

  doRoute(path: string) {

    this.router.navigate([path])
  }
 
}
