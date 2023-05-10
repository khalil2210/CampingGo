import { TestBed } from '@angular/core/testing';

import { GroupcampingService } from './groupcamping.service';

describe('GroupcampingService', () => {
  let service: GroupcampingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupcampingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
