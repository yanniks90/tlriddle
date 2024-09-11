import { TestBed } from '@angular/core/testing';

import { RiddleStateService } from './riddle-state.service';

describe('RiddleStateService', () => {
  let service: RiddleStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiddleStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
