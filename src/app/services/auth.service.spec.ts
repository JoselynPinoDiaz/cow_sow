import { TestBed } from '@angular/core/testing';
//import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service'; //es el servicio get

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
