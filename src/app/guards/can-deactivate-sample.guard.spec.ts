import { TestBed } from '@angular/core/testing';

import { CanDeactivateSampleGuard } from './can-deactivate-sample.guard';

describe('CanDeactivateSampleGuard', () => {
  let guard: CanDeactivateSampleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateSampleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
