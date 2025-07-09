import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Leaflet } from '../../components/leaflet/leaflet';
import { Search } from '../../components/search/search';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Leaflet,
    NgImageSliderModule,
    Search
  ],
  templateUrl: `./home.html`,

  styleUrls: [`./home.css`]
})
export class Home {
onSearch($event: string) {
throw new Error('Method not implemented.');
}
onLocationFound($event: any) {
throw new Error('Method not implemented.');
}
onImageClick($event: number) {
throw new Error('Method not implemented.');
}
eventImages = [
    {
      image: 'assets/images/event1.jpg',
      thumbImage: 'assets/images/event1.jpg',
      alt: 'Kinderfest',
      title: 'Sommerfest 2023'
    },
    {
      image: 'assets/images/event2.jpg',
      thumbImage: 'assets/images/event2.jpg',
      alt: 'Kunstworkshop',
      title: 'Malen mit Kindern'
    },
    {
      image: 'assets/images/event3.jpg',
      thumbImage: 'assets/images/event3.jpg',
      alt: 'Sporttag',
      title: 'Kindersporttag'
    },
    {
      image: 'assets/images/event4.jpg',
      thumbImage: 'assets/images/event4.jpg',
      alt: 'Musikvorstellung',
      title: 'Kinderkonzert'
    }
  ];
}