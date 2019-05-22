import {Component, Input, OnInit} from '@angular/core';
import {MapMarker} from '../map.component';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.less']
})
export class MapMarkerComponent implements OnInit {

  @Input()
  marker: MapMarker;

  constructor() { }

  ngOnInit() {
  }

}
