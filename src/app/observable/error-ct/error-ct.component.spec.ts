import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCTComponent } from './error-ct.component';

describe('ErrorCTComponent', () => {
  let component: ErrorCTComponent;
  let fixture: ComponentFixture<ErrorCTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorCTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
