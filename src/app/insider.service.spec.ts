import { TestBed } from '@angular/core/testing';

import { InsiderService } from './insider.service';

describe('InsiderService', () => {
  let service: InsiderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsiderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
