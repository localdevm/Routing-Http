import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoomerComponent } from './boomer.component';

describe('BoomerComponent', () => {
  let component: BoomerComponent;
  let fixture: ComponentFixture<BoomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
