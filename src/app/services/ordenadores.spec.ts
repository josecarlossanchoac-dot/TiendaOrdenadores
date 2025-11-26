import { TestBed } from '@angular/core/testing';

import { Ordenadores } from './ordenadores';

describe('Ordenadores', () => {
  let service: Ordenadores;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ordenadores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
