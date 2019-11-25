import { TestBed, async, inject } from '@angular/core/testing';

import { SafeGuard } from './safe.guard';

describe('SafeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SafeGuard]
    });
  });

  it('should ...', inject([SafeGuard], (guard: SafeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
