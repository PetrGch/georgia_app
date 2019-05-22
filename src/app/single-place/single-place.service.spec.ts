import { TestBed } from '@angular/core/testing';

import { SinglePlaceService } from './single-place.service';

describe('SinglePlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SinglePlaceService = TestBed.get(SinglePlaceService);
    expect(service).toBeTruthy();
  });
});
