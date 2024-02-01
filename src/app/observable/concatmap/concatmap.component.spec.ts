import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatmapComponent } from './concatmap.component';

describe('ConcatmapComponent', () => {
  let component: ConcatmapComponent;
  let fixture: ComponentFixture<ConcatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
