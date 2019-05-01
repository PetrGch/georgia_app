import {Component, Input, OnInit} from '@angular/core';
import {TourCard} from '../../tour-card/tour-card.model';

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
