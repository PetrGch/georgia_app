import {Component, OnDestroy, OnInit} from '@angular/core';
import {TopToursService} from '../../home/top-tours/top-tours.service';
import {TourCard} from '../../tour-card/tour-card.model';
import {SubscriptionLike} from 'rxjs';
import {PlacesService} from '../places.service';
import {Place} from '../../single-tour/single-tour.model';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.less']
})
export class PlacesListComponent implements OnInit, OnDestroy {

  private places: Place[] = [];
  private placeLoader: SubscriptionLike;

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.placesService.loadPlace();
    this.placeLoader = this.placesService.placesLoader
      .subscribe((places: Place[]) => {
        this.places = places.slice();
      });
  }

  ngOnDestroy() {
    this.placeLoader.unsubscribe();
  }

}
