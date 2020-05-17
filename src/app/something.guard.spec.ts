import { TestBed, async, inject } from '@angular/core/testing';

import { SomethingGuard } from './something.guard';

describe('SomethingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomethingGuard]
    });
  });

  it('should ...', inject([SomethingGuard], (guard: SomethingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
