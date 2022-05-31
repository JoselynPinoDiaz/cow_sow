import { TestBed } from '@angular/core/testing';

import { LoginRolesService } from './login-roles.service';

describe('LoginRolesService', () => {
  let service: LoginRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
