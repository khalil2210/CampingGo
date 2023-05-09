import { TestBed } from '@angular/core/testing';

import { RechercheGpService } from './recherche-gp.service';

describe('RechercheGpService', () => {
  let service: RechercheGpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RechercheGpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
