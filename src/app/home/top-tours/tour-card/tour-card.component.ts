import {Component, Input, OnInit, Output} from '@angular/core';
import {TourCard} from './tour-card.model';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.less']
})
export class TourCardComponent implements OnInit {

  @Input()
  tour: TourCard;

  constructor() {
  }

  ngOnInit() {
  }

  getDurationTime(duration: number): string {
    if (!duration) {
      return '';
    }
    if (+duration === 1) {
      return `${duration} день`;
    }
    if (+duration > 1 && +duration < 5) {
      return `${duration} дня`;
    }
    if (+duration >= 5) {
      return `${duration} дней`;
    }

    return '';
  }

}
