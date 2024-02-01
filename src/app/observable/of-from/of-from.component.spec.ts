import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfFromComponent } from './of-from.component';

describe('OfFromComponent', () => {
  let component: OfFromComponent;
  let fixture: ComponentFixture<OfFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
