import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmapComponent } from './switchmap.component';

describe('SwitchmapComponent', () => {
  let component: SwitchmapComponent;
  let fixture: ComponentFixture<SwitchmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
