import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SinglePlaceService} from './single-place.service';
import {Place} from '../single-tour/single-tour.model';
import {SubscriptionLike} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {TopToursService} from '../home/top-tours/top-tours.service';
import {MapMarker} from '../map/map.component';

@Component({
  selector: 'app-single-place',
  templateUrl: './single-place.component.html',
  styleUrls: ['./single-place.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class SinglePlaceComponent implements OnInit, OnDestroy {

  singlePlace: Place = null;
  singlePlaceLoader: SubscriptionLike;
  markers: MapMarker[] = [];

  constructor(private topTourService: TopToursService,
              private singlePlaceService: SinglePlaceService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.topTourService.loadTours();
    this.router.params
      .subscribe((params: Params) => {
        this.singlePlaceService.loadSinglePlace(params.id);
      });
    this.singlePlaceLoader = this.singlePlaceService.singlePlaceLoader
      .subscribe((place: Place) => {
        this.singlePlace = place;
        this.markers.push(new MapMarker(
          place.latitude, place.longitude, place.title, place.imageUrl
        ));
      });
  }

  ngOnDestroy() {
    this.singlePlaceLoader.unsubscribe();
  }
}
