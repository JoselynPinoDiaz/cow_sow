import { TestBed } from '@angular/core/testing';

import { WonService } from './won.service';

describe('WonService', () => {
  let service: WonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
