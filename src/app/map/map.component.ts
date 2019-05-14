import {Component, Input, OnInit} from '@angular/core';
// import { InfoWindow } from '@agm/core/services/google-maps-types';

export class MapMarker {
  latitude: number;
  longitude: number;
  title: string;
  text: string;
  imageUrl: string;

  constructor(latitude: number, longitude: number, title: string, text: string, imageUrl: string) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.title = title;
    this.text = text;
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

  public origin1: any = { lat: 24.799448, lng: 120.979021 };
  public destination1: any = { lat: 24.799524, lng: 120.975017 };

  public origin2: any = { lat: 24.798448, lng: 120.972021 };
  public destination2: any = { lat: 24.789524, lng: 120.972017 };

  public renderOptions = {
    suppressMarkers: true,
  }

  public markerOptions = {
    origin: {
      icon: 'https://i.imgur.com/7teZKif.png',
    },
    destination: {
      icon: 'assets/park.png',
      infoWindow: `
        <h4>Hello<h4>
        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
        `
    },
  };

  public infoWindow: any = undefined;

  public obtainInfowindow(window: any) {
    this.infoWindow = window;
  }

}
