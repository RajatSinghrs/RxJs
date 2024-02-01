import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapSearchFComponent } from './switch-map-search-f.component';

describe('SwitchMapSearchFComponent', () => {
  let component: SwitchMapSearchFComponent;
  let fixture: ComponentFixture<SwitchMapSearchFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchMapSearchFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMapSearchFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
