import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperBoxComponent } from './wrapper-box.component';

describe('WrapperBoxComponent', () => {
  let component: WrapperBoxComponent;
  let fixture: ComponentFixture<WrapperBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
