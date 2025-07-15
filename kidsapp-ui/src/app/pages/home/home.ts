import { Component } from '@angular/core';
import { ImageSlider } from '../../components/image-slider/image-slider';
import { Leaflet } from "../../components/leaflet/leaflet";
import { Search } from "../../components/search/search";  // Pfad prüfen
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSlider, Leaflet, Search],  // <--- wichtig!
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

eventSliderConfig = {
  loop: true,
  nav: false,
  dots: false,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 }
  }
};
slides: any;
}
