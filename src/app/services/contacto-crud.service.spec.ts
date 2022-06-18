import { TestBed } from '@angular/core/testing';

import { ContactoCrudService } from './contacto-crud.service';

describe('ContactoCrudService', () => {
  let service: ContactoCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
