import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDayComponent } from './other-day.component';

describe('OtherDayComponent', () => {
  let component: OtherDayComponent;
  let fixture: ComponentFixture<OtherDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
