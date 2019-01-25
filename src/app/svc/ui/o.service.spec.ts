import { TestBed } from '@angular/core/testing';

import { OService } from './o.service';

describe('OService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OService = TestBed.get(OService);
    expect(service).toBeTruthy();
  });
});
