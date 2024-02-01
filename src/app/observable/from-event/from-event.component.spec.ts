import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEventComponent } from './from-event.component';

describe('FromEventComponent', () => {
  let component: FromEventComponent;
  let fixture: ComponentFixture<FromEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
