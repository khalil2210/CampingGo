import { TestBed } from '@angular/core/testing';

import { AddgroupcampingService } from './addgroupcamping.service';

describe('AddgroupcampingService', () => {
  let service: AddgroupcampingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddgroupcampingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
