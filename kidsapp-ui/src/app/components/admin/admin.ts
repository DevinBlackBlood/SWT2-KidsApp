import {Component, ViewChild} from '@angular/core';
import {
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';
import {Router} from '@angular/router';
import {MatIcon} from "@angular/material/icon";
import { BenutzerControllerService } from '../../../../src-gen/bsclient'


@Component({
  selector: 'app-admin',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatIcon,
    MatCardTitleGroup
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

constructor(private router: Router, private benutzerControllerService:BenutzerControllerService ) {
}


doRoute(url: string){

  this.router.navigateByUrl(url)
}
}
