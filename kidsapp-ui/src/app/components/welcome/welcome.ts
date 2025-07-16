import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome {

  constructor(public router: Router) {}

    doRoute(url: string){
      console.log("cheack")
      this.router.navigateByUrl(url)
    }
}
