import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmCmSmapComponent } from './mm-cm-smap.component';

describe('MmCmSmapComponent', () => {
  let component: MmCmSmapComponent;
  let fixture: ComponentFixture<MmCmSmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmCmSmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmCmSmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
