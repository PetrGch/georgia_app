import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TourCard} from './tour-card/tour-card.model';
import {TopToursService} from './top-tours.service';
import {Subscribable, Subscriber, SubscriptionLike} from 'rxjs';

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
      this.tours = tours.slice();
    });
  }

  ngOnDestroy() {
    this.toursLoader.unsubscribe();
  }
}
