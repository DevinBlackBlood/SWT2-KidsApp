import {Component, ViewChild} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

constructor(private router: Router ) {
}


doRoute(url: string){

  this.router.navigateByUrl(url)
}
}
