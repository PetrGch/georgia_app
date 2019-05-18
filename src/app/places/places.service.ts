import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Activity, Place} from '../single-tour/single-tour.model';

// TODO Delete when endpoint will be implemented
export const MOCK_PLACES: Place[] = [
  new Place(
    1,
    'Place 1',
    'This is Place 1',
    `Some long long long long description for this tourSome long long long long description for this tourSome long long long
       long description for this tourSome long long long long description for this tour Some long long long long description for this
        tourSome long long
        
        
         [I'm an inline-style link](https://www.google.com)
         
         | Tables        | Are           | Cool  |
         | ------------- |:-------------:| -----:|
         | col 3 is      | right-aligned | $1600 |
         | col 2 is      | centered      |   $12 |
         | zebra stripes | are neat      |    $1 |
         
         long long description for this tourSome long long long long description for this tourSome long long long long
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
];

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  placesLoader = new Subject<Place[]>();

  constructor() { }

  loadPlace(): void {
    this.mockFetch()
      .then((places) => {
        this.placesLoader.next(places);
      });
  }

  mockFetch(): Promise<Place[]> {
    return new Promise((resolve) => {
      resolve(MOCK_PLACES);
    });
  }
}
