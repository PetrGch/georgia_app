import { TestBed } from '@angular/core/testing';

import { TopToursService } from './top-tours.service';

describe('TopToursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopToursService = TestBed.get(TopToursService);
    expect(service).toBeTruthy();
  });
});
