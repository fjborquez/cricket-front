import { TestBed } from '@angular/core/testing';

import { ResultadoAnualService } from './resultado-anual.service';

describe('ResultadoAnualService', () => {
  let service: ResultadoAnualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadoAnualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
