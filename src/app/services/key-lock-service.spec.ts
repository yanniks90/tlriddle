import { TestBed } from '@angular/core/testing';

import { KeyLockService } from './key-lock.service';

describe('KeyLockServiceService', () => {
  let service: KeyLockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyLockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
