// leaflet.component.ts - Angular 20+ Compatible with MarkerCluster
import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  inject,
  DestroyRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as L from 'leaflet';
import 'leaflet.markercluster';

import { MarkerService } from '../../marker.service';

// Fix default marker icons
const iconDefault = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-leaflet',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="map-wrapper">
      <div #mapElement class="map-container"></div>
    </div>
  `,
  styles: [`
    .map-wrapper {
      width: 100%;
      height: 500px;
      position: relative;
      display: block;
      background: #f0f0f0;
    }
    .map-container {
      height: 100%;
      width: 100%;
      border: 2px solid #ddd;
      border-radius: 8px;
      position: relative;
      display: block;
      background: white;
      overflow: hidden;
    }
  `]
})
export class Leaflet implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mapElement', { static: false }) mapElement!: ElementRef<HTMLDivElement>;

  private map!: L.Map;
  private markers: L.Marker[] = [];
  private isMapReady = false;
  private destroyRef = inject(DestroyRef);
  private markerClusterGroup!: L.MarkerClusterGroup;

  constructor(private markerService: MarkerService) {}

  ngOnInit() {
    this.setupMarkerSubscription();

    // Testdaten: viele Marker
    const coordsList: [number, number][] = [
      [47.6062, -122.3321], // Seattle
      [37.7749, -122.4194], // San Francisco
      [40.7128, -74.0060],  // New York
      [51.5074, -0.1278],   // London
      [48.8566, 2.3522],    // Paris
      [52.52, 13.405],      // Berlin
      [55.7558, 37.6173],   // Moscow
      [35.6895, 139.6917],  // Tokyo
      [28.6139, 77.2090],   // Delhi
      [34.0522, -118.2437]  // Los Angeles
    ];

    // Marker später laden, wenn Map bereit ist
    setTimeout(() => this.addMultipleMarkers(coordsList), 1000);
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => this.initializeMap());
  }

  ngOnDestroy() {
    this.cleanupMap();
  }

  private initializeMap() {
    try {
      const element = this.mapElement?.nativeElement;
      if (!element) {
        setTimeout(() => this.initializeMap(), 100);
        return;
      }

      if (this.map) this.map.remove();

      this.map = L.map(element, {
        center: [47.6062, -122.3321],
        zoom: 3,
        zoomControl: true,
        attributionControl: true,
        maxZoom: 18,
        minZoom: 2
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
        crossOrigin: true
      }).addTo(this.map);
      this.markerClusterGroup = new L.MarkerClusterGroup();
      this.markerClusterGroup = L.markerClusterGroup();
      this.map.addLayer(this.markerClusterGroup);

      this.map.on('load', () => {
        console.log('Map loaded successfully');
        this.isMapReady = true;
      });

      setTimeout(() => {
        if (this.map) {
          this.map.invalidateSize(true);
          this.isMapReady = true;
        }
      }, 100);
    } catch (error) {
      setTimeout(() => this.initializeMap(), 500);
    }
  }

  private setupMarkerSubscription() {
    this.markerService.coordsChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(coords => {
        this.handleNewCoordinates(coords);
      });
  }

  private handleNewCoordinates(coords: [number, number]) {
    if (!coords) return;

    const tryAdd = () => {
      if (this.isMapReady && this.map) {
        this.addMarker(coords);
        this.map.setView(coords, this.map.getZoom());
      } else {
        setTimeout(tryAdd, 100);
      }
    };

    tryAdd();
  }

  private addMarker(coords: [number, number]) {
    try {
      const marker = L.marker(coords, { icon: iconDefault })
        .bindPopup(`Location: ${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`)
        .openPopup();

      this.markerClusterGroup.addLayer(marker);
      this.markers.push(marker);
    } catch (error) {
      console.error('Failed to add marker:', error);
    }
  }

  public addMultipleMarkers(coordsList: [number, number][]) {
    if (!this.isMapReady || !this.map) {
      setTimeout(() => this.addMultipleMarkers(coordsList), 100);
      return;
    }

    coordsList.forEach(coords => {
      const marker = L.marker(coords, { icon: iconDefault })
        .bindPopup(`Location: ${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`);

      this.markerClusterGroup.addLayer(marker);
      this.markers.push(marker);
    });

    console.log(`${coordsList.length} markers added.`);
  }

  public clearAllMarkers() {
    this.markerClusterGroup.clearLayers();
    this.markers = [];
  }

  public resizeMap() {
    if (this.map) {
      setTimeout(() => this.map.invalidateSize(true), 100);
    }
  }

  public getCurrentBounds() {
    return this.map?.getBounds();
  }

  private cleanupMap() {
    if (this.map) {
      this.map.remove();
      this.map = null as any;
    }
    if (this.markerClusterGroup) {
      this.markerClusterGroup.clearLayers();
    }
    this.markers = [];
    this.isMapReady = false;
  }
}
