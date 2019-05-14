import {Component, Input, OnInit} from '@angular/core';

import {Place} from '../single-tour.model';
import {timeDurationFormatter} from '../../util/formatter';

@Component({
  selector: 'app-tour-place',
  templateUrl: './tour-place.component.html',
  styleUrls: ['./tour-place.component.less']
})
export class TourPlaceComponent implements OnInit {

  @Input()
  place: Place;
  @Input()
  index: number;

  constructor() { }

  ngOnInit() {
  }

  getDurationTime(): string {
    if (this.place.durationTo) {
      return `${this.place.durationFrom} - ${this.place.durationTo} дней`;
    }
    return timeDurationFormatter(this.place.durationFrom);
  }

  setOddEvenPrefix(className) {
    if (this.index % 2 !== 0) {
      return `${className}--odd`;
    }
    return `${className}--even`;
  }

}
