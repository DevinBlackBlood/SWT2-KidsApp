// leaflet.component.ts - Angular 20+ Compatible
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
import { MarkerService } from '../marker.service';

// Fix default marker icons for Angular 20+
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

// Set default icon globally
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
  
  constructor(private markerService: MarkerService) {}

  ngOnInit() {
    this.setupMarkerSubscription();
  }

  ngAfterViewInit() {
    // Use multiple timing strategies for Angular 20+
    Promise.resolve().then(() => {
      this.initializeMap();
    });
  }

  ngOnDestroy() {
    this.cleanupMap();
  }

  private initializeMap() {
    try {
      const element = this.mapElement?.nativeElement;
      
      if (!element) {
        console.error('Map element not available');
        setTimeout(() => this.initializeMap(), 100);
        return;
      }

      // Clear any existing map instance
      if (this.map) {
        this.map.remove();
      }

      console.log('Initializing map on element:', element);

      // Create map with explicit container reference
      this.map = L.map(element, {
        center: [47.6062, -122.3321], // Seattle coordinates for better visibility
        zoom: 10,
        zoomControl: true,
        attributionControl: true,
        maxZoom: 18,
        minZoom: 3
      });

      // Add OpenStreetMap tiles
      const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        crossOrigin: true
      });

      tileLayer.addTo(this.map);

      // Handle map events
      this.map.on('load', () => {
        console.log('Map loaded successfully');
        this.isMapReady = true;
      });

      this.map.on('resize', () => {
        console.log('Map resized');
      });

      // Force map to recognize its size - critical for Angular 20+
      setTimeout(() => {
        if (this.map) {
          this.map.invalidateSize(true);
          this.isMapReady = true;
          console.log('Map size invalidated and ready');
        }
      }, 100);

      // Additional resize attempts for stubborn cases
      setTimeout(() => {
        if (this.map) {
          this.map.invalidateSize(true);
        }
      }, 300);

      setTimeout(() => {
        if (this.map) {
          this.map.invalidateSize(true);
        }
      }, 1000);

    } catch (error) {
    
      setTimeout(() => this.initializeMap(), 500);
    }
  }

  private setupMarkerSubscription() {
    this.markerService.coordsChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(coords => {
        console.log('Received coordinates:', coords);
        this.handleNewCoordinates(coords);
      });
  }

  private handleNewCoordinates(coords: [number, number]) {
    if (!coords) return;

    const addMarkerWhenReady = () => {
      if (this.isMapReady && this.map) {
        this.addMarker(coords);
        this.map.setView(coords, this.map.getZoom());
      } else {
        setTimeout(addMarkerWhenReady, 100);
      }
    };

    addMarkerWhenReady();
  }

  private addMarker(coords: [number, number]) {
    try {
      const marker = L.marker(coords, { icon: iconDefault })
        .addTo(this.map)
        .bindPopup(`Location: ${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`)
        .openPopup();
      
      this.markers.push(marker);
      console.log('Marker added at:', coords);
    } catch (error) {
      console.error('Failed to add marker:', error);
    }
  }

  private cleanupMap() {
    try {
      if (this.map) {
        this.map.remove();
        this.map = null as any;
      }
      this.markers = [];
      this.isMapReady = false;
    } catch (error) {
      console.error('Error cleaning up map:', error);
    }
  }

  // Public methods
  public clearAllMarkers() {
    this.markers.forEach(marker => {
      if (this.map) {
        this.map.removeLayer(marker);
      }
    });
    this.markers = [];
  }

  public resizeMap() {
    if (this.map) {
      setTimeout(() => {
        this.map.invalidateSize(true);
      }, 100);
    }
  }

  public getCurrentBounds() {
    return this.map?.getBounds();
  }
}