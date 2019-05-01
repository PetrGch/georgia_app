import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursListItemComponent } from './tours-list-item.component';

describe('ToursListItemComponent', () => {
  let component: ToursListItemComponent;
  let fixture: ComponentFixture<ToursListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
