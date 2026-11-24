import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalloweenHombreloboComponent } from './halloween-hombrelobo.component';

describe('HalloweenHombreloboComponent', () => {
  let component: HalloweenHombreloboComponent;
  let fixture: ComponentFixture<HalloweenHombreloboComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HalloweenHombreloboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
