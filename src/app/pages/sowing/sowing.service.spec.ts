import { TestBed } from '@angular/core/testing';

import { SowingService } from './sowing.service';

describe('SowingService', () => {
  let service: SowingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SowingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
