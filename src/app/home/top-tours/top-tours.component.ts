import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubscriptionLike} from 'rxjs';

import {TourCard} from '../../tour-card/tour-card.model';
import {TopToursService} from './top-tours.service';

@Component({
  selector: 'app-top-tours',
  templateUrl: './top-tours.component.html',
  styleUrls: ['./top-tours.component.less']
})
export class TopToursComponent implements OnInit, OnDestroy {

  private tours: TourCard[] = [];
  private toursLoader: SubscriptionLike;

  constructor(private topTourService: TopToursService) { }

  ngOnInit() {
    this.topTourService.loadTours();
    this.toursLoader = this.topTourService.toursLoader.subscribe((tours: TourCard[]) => {
      this.tours = tours.slice(0, 4);
    });
  }

  ngOnDestroy() {
    this.toursLoader.unsubscribe();
  }
}
