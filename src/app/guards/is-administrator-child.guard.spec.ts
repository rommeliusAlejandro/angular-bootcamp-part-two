import { TestBed } from '@angular/core/testing';

import { IsAdministratorChildGuard } from './is-administrator-child.guard';

describe('IsAdministratorChildGuard', () => {
  let guard: IsAdministratorChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAdministratorChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
