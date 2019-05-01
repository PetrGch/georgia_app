import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubscriptionLike} from 'rxjs';

import {TopToursService} from '../../home/top-tours/top-tours.service';
import {TourCard} from '../../tour-card/tour-card.model';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.less']
})
export class ToursListComponent implements OnInit, OnDestroy {

  private tours: TourCard[] = [];
  private toursLoader: SubscriptionLike;

  constructor(private topTourService: TopToursService) { }

  ngOnInit() {
    this.topTourService.loadTours();
    this.toursLoader = this.topTourService.toursLoader.subscribe((tours: TourCard[]) => {
      this.tours = tours.slice();
    });
  }

  ngOnDestroy() {
    this.toursLoader.unsubscribe();
  }

}
