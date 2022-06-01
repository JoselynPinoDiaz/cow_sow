import { TestBed } from '@angular/core/testing';

import { ConexionAngularService } from './conexion-angular.service';

describe('ConexionAngularService', () => {
  let service: ConexionAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
