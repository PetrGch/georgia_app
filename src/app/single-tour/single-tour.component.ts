import {Component, OnDestroy, OnInit} from '@angular/core';
import {SingleTourService} from './single-tour.service';
import {Place, SingleTour} from './single-tour.model';
import {SubscriptionLike} from 'rxjs';
import {timeDurationFormatter} from '../util/formatter';
import {MapMarker} from '../map/map.component';

@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrls: ['./single-tour.component.less']
})
export class SingleTourComponent implements OnInit, OnDestroy {

  singleTour: SingleTour = null;
  singleTourLoader: SubscriptionLike;
  markers: MapMarker[];

  constructor(private singleTourService: SingleTourService) { }

  ngOnInit() {
    this.singleTourService.loadSingleTour();
    this.singleTourLoader = this.singleTourService.singleTourLoader
      .subscribe((singleTour: SingleTour) => {
        this.singleTour = singleTour;
        this.markers = this.singleTourService.markers;
      });
  }

  ngOnDestroy() {
    this.singleTourLoader.unsubscribe();
  }

  getDurationTime(): string {
    const duration: { from: number, to: number } = this.singleTour.places
      .reduce((durationAcc: { from: number, to: number }, place: Place): { from: number, to: number } => {
        const from: number = durationAcc.from + place.durationFrom;
        const to: number = place.durationTo ? durationAcc.to + place.durationTo : durationAcc.to;

        return { from, to };
      }, { from: 0, to: 0 });

    if (duration.to && duration.from < duration.to) {
      return `${duration.from} - ${duration.to} дней`;
    }
    return timeDurationFormatter(duration.from);
  }

  setOddEvenPrefix(index, className) {
    if (index % 2 !== 0) {
      return `${className}--odd`;
    }
    return `${className}--even`;
  }

}
