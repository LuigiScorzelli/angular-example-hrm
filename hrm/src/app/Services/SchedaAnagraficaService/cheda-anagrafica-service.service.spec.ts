import { TestBed } from '@angular/core/testing';

import { ChedaAnagraficaServiceService } from './cheda-anagrafica-service.service';

describe('ChedaAnagraficaServiceService', () => {
  let service: ChedaAnagraficaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChedaAnagraficaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
