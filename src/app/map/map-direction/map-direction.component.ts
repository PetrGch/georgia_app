import {Component, Input, OnInit} from '@angular/core';
import {MapMarker} from '../map.component';

@Component({
  selector: 'app-map-direction',
  templateUrl: './map-direction.component.html',
  styleUrls: ['./map-direction.component.less']
})
export class MapDirectionComponent implements OnInit {

  @Input()
  originMarker: MapMarker;
  @Input()
  destinationMarker: MapMarker;
  private origin: any = null;
  private destination: any = null;
  public markerOptions = {
    origin: {
      icon: 'assets/park.png',
      infoWindow: ''
    },
    destination: {
      icon: 'assets/park.png',
      infoWindow: ''
    },
  };
  public renderOptions = {
    suppressMarkers: true,
  };
  public infoWindow: any = undefined;

  public obtainInfowindow(window: any) {
    this.infoWindow = window;
  }

  constructor() { }

  ngOnInit() {
    this.initOriginData();
    this.initDestinationData();
  }

  initOriginData() {
    this.origin = { lat: this.originMarker.latitude, lng: this.originMarker.longitude };
    this.markerOptions.origin.infoWindow = `<div class="markerOption">
        <div class="markerOption__image">
          <img src="${this.originMarker.imageUrl}" alt="${this.originMarker.title}">
        </div>
        <h5 class="markerOption__title">${this.originMarker.title}</h5>
      </div>`;
  }

  initDestinationData() {
    this.destination = { lat: this.destinationMarker.latitude, lng: this.destinationMarker.longitude };
    this.markerOptions.destination.infoWindow = `<div class="markerOption">
        <div class="markerOption__image">
          <img src="${this.destinationMarker.imageUrl}" alt="${this.destinationMarker.title}">
        </div>
        <h5 class="markerOption__title">${this.destinationMarker.title}</h5>
      </div>`;
  }

}
