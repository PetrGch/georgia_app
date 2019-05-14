import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPlaceComponent } from './tour-place.component';

describe('TourPlaceComponent', () => {
  let component: TourPlaceComponent;
  let fixture: ComponentFixture<TourPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
