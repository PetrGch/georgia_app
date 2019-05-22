import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../single-tour/single-tour.model';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.less']
})
export class PlaceCardComponent implements OnInit {

  @Input()
  place: Place;

  constructor() { }

  ngOnInit() {}

}
