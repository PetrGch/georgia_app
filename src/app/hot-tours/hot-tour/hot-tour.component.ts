import {Component, Input, OnInit} from '@angular/core';
import {TourCard} from '../../home/top-tours/tour-card/tour-card.model';

@Component({
  selector: 'app-hot-tour',
  templateUrl: './hot-tour.component.html',
  styleUrls: ['./hot-tour.component.less']
})
export class HotTourComponent implements OnInit {

  @Input()
  tour: TourCard;

  constructor() { }

  ngOnInit() {
  }

}
