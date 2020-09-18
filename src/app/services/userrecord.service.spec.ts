import { TestBed } from '@angular/core/testing';

import { UserrecordService } from './userrecord.service';

describe('UserrecordService', () => {
  let service: UserrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
