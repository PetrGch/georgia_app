import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

import {Activity, Place, SingleTour} from './single-tour.model';
import {MapMarker} from '../map/map.component';

// TODO Delete when endpoint will be implemented
export const MOCK_TOURS: SingleTour = new SingleTour(
  1,
  'This is your awesome tour',
  'Try before you die',
  123123,
  1231,
  'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/ef/2e/shutterstock-280828427.jpg',
  '2018-11-18T01:28:34.000Z',
  [
    new Place(
      1,
      'Place 1',
      'This is Place 1',
      `Some long long long long description for this tourSome long long long long description for this tourSome long long long
       long description for this tourSome long long long long description for this tour Some long long long long description for this
        tourSome long long long long description for this tourSome long long long long description for this tourSome long long long long
         description for this tourSome long long long long description for this tour Some long long long long description for this tourSome
          long long long long description for this tourSome long long long long description for this tourSome long long long long
           description for this tourSome long long long long description for this tourSome long long long long description for this
            tourSome long long long long description for this tourSome long long long long description for this tourSome long long long
             long description for this tourSome long long long long description for this tourSome long long long long description for this
              tour`,
      'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/ef/2e/shutterstock-280828427.jpg',
      1,
      null,
      50.0942471,
      19.9810716,
      2
    ),
    new Place(
      2,
      'Place 2',
      'This is Place 1',
      'Some long long long long description for this tour',
      'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/ef/2e/shutterstock-280828427.jpg',
      2,
      null,
      50.0673667,
      19.9438427
    ),
    new Place(
      3,
      'Place 3',
      'This is Place 1',
      'Some long long long long description for this tour',
      'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/ef/2e/shutterstock-280828427.jpg',
      4,
      [
        new Activity(
          1,
          'Do something'
        ),
        new Activity(
          2,
          'Do it again'
        ),
        new Activity(
          3,
          'Go and do nothing again'
        )
      ],
      50.0537459,
      19.9532296,
      5,
    ),
  ]
);

@Injectable({
  providedIn: 'root'
})
export class SingleTourService {

  singleTourLoader = new Subject<SingleTour>();
  markers: MapMarker[];

  constructor() { }

  loadSingleTour(): void {
    this.mockFetch()
      .then((singleTour: SingleTour) => {
        this.mapPlacesToMarkers(singleTour.places);
        this.singleTourLoader.next(singleTour);
      });
  }

  mockFetch(): Promise<SingleTour> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_TOURS);
      }, 2000);
    });
  }

  mapPlacesToMarkers(places: Place[]) {
    this.markers = places.map((place: Place) => {
      return new MapMarker(
        place.latitude,
        place.longitude,
        place.title,
        place.description,
        place.imageUrl
      );
    });
  }

}
