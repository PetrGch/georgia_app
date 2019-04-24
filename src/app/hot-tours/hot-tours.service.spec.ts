import { TestBed } from '@angular/core/testing';

import { HotToursService } from './hot-tours.service';

describe('HotToursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotToursService = TestBed.get(HotToursService);
    expect(service).toBeTruthy();
  });
});
