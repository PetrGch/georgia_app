import {Injectable} from '@angular/core';
import {Activity, Place, SingleTour} from '../single-tour/single-tour.model';
import {Subject} from 'rxjs';

const MOCK_PLACE = new Place(
  3,
  'Place 3',
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
);

@Injectable({
  providedIn: 'root'
})
export class SinglePlaceService {

  singlePlaceLoader = new Subject<Place>();

  constructor() {
  }

  loadSinglePlace(placeId: number): void {
    console.log(placeId)
    this.mockFetch()
      .then((place: Place) => {
        this.singlePlaceLoader.next(place);
      });
  }

  mockFetch(): Promise<Place> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_PLACE);
      }, 2000);
    });
  }
}
