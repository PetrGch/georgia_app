import {Component, Input, OnInit} from '@angular/core';
import {TourCard} from '../../tour-card/tour-card.model';
import {timeDurationFormatter} from '../../util/formatter';

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
    return timeDurationFormatter(duration);
  }

}
