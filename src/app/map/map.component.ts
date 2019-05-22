import {Component, Input, OnInit} from '@angular/core';
// import { InfoWindow } from '@agm/core/services/google-maps-types';

export class MapMarker {
  latitude: number;
  longitude: number;
  title: string;
  imageUrl: string;

  constructor(latitude: number, longitude: number, title: string, imageUrl: string) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.title = title;
    this.imageUrl = imageUrl;
  }
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  @Input()
  markers: MapMarker[];
  @Input()
  isMarkerMode = true;

  private latitude: number;
  private longitude: number;

  constructor() { }

  ngOnInit() {
    this.calculateCentralCoordinate();
  }

  calculateCentralCoordinate() {
    const centralCoordinate: { latitude: number, longitude: number } = this.markers
      .reduce((markerAcc: { latitude: number, longitude: number }, marker: MapMarker) => {
        return {
          latitude: markerAcc.latitude + marker.latitude,
          longitude: markerAcc.longitude + marker.longitude
        };
      }, {
        latitude: 0,
        longitude: 0
      });

    this.latitude = centralCoordinate.latitude / this.markers.length;
    this.longitude = centralCoordinate.longitude / this.markers.length;
  }
}
