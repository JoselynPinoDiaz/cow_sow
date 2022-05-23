import { TestBed } from '@angular/core/testing';

import { NotLogueadoGuard } from './not-logueado.guard';

describe('NotLogueadoGuard', () => {
  let guard: NotLogueadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotLogueadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
