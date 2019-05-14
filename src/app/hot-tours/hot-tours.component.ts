import {Component, OnDestroy, OnInit} from '@angular/core';

import {TopToursService} from '../home/top-tours/top-tours.service';
import {TourCard} from '../tour-card/tour-card.model';
import {SubscriptionLike} from 'rxjs/src/internal/types';

@Component({
  selector: 'app-hot-tours',
  templateUrl: './hot-tours.component.html',
  styleUrls: ['./hot-tours.component.less']
})
export class HotToursComponent implements OnInit, OnDestroy {

  private tours: TourCard[] = [];
  private toursLoader: SubscriptionLike;

  constructor(private topTourService: TopToursService) { }

  ngOnInit() {
    this.toursLoader = this.topTourService.toursLoader.subscribe((tours: TourCard[]) => {
      this.tours = tours.filter((tour: TourCard) => !!tour.discountPrice).slice(0, 3);
    });
  }

  ngOnDestroy() {
    this.toursLoader.unsubscribe();
  }
}
