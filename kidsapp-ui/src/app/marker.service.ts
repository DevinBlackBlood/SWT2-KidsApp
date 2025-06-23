import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  private _coords = new BehaviorSubject<[number, number]>([46.879966, -121.726909]);
  coordsChange = this._coords.asObservable();

  change(newCoords: [number, number]) {
    this._coords.next(newCoords);
  }
}
