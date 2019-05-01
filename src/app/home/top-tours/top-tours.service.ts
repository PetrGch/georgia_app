import {TourCard} from '../../tour-card/tour-card.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

// TODO Delete when endpoint will be implemented
export const MOCK_TOURS: TourCard[] = [
  new TourCard(
    1,
    'Tour 1',
    'This is tour 1',
    'Some long long long long description for this tour',
    'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/ef/2e/shutterstock-280828427.jpg',
    1,
    12312,
    null
  ),
  new TourCard(
    2,
    'Tour 2',
    'This is tour 2',
    'Some long long long long description for this tour',
    'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/ef/2e/shutterstock-280828427.jpg',
    2,
    12312,
    123
  ),
  new TourCard(
    3,
    'Tour 3',
    'This is tour 3',
    'Some long long long long description for this tour',
    'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/ef/2e/shutterstock-280828427.jpg',
    3,
    234,
    123
  ),
  new TourCard(
    4,
    'Tour 4',
    'This is tour 4',
    'Some long long long long description for this tour',
    'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/ef/2e/shutterstock-280828427.jpg',
    4,
    1233,
    123
  ),
  new TourCard(
    5,
    'Tour 5',
    'This is tour 5',
    'Some long long long long description for this tour',
    'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/ef/2e/shutterstock-280828427.jpg',
    4,
    1233,
    123
  ),
  new TourCard(
    6,
    'Tour 6',
    'This is tour 4',
    'Some long long long long description for this tour',
    'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/ef/2e/shutterstock-280828427.jpg',
    6,
    1233,
    123
  )
];

@Injectable({
  providedIn: 'root'
})
export class TopToursService {

  toursLoader = new Subject<TourCard[]>();

  constructor() { }

  loadTours(): void {
    this.mockFetch()
      .then((tours) => {
        this.toursLoader.next(tours);
      });
  }

  mockFetch(): Promise<TourCard[]> {
    return new Promise((resolve, reject) => {
      resolve(MOCK_TOURS);
    });
  }
}
