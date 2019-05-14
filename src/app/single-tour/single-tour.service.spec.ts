import { TestBed } from '@angular/core/testing';

import { SingleTourService } from './single-tour.service';

describe('SingleTourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleTourService = TestBed.get(SingleTourService);
    expect(service).toBeTruthy();
  });
});
