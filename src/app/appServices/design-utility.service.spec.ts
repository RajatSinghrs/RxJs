import { TestBed } from '@angular/core/testing';

import { DesignUtilityService } from './design-utility.service';

describe('DesignUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignUtilityService = TestBed.get(DesignUtilityService);
    expect(service).toBeTruthy();
  });
});
