import { Component } from '@angular/core';
import { MarkerService } from '../marker.service';

@Component({
  selector: 'app-another',
  standalone: true,
  templateUrl: './another.html',
  styleUrls: ['./another.css']
})
export class Another  {
  constructor(private markerService: MarkerService) {}

  handleClick() {
    this.markerService.change([51.5, -0.09]); // Change map center
  }
}
