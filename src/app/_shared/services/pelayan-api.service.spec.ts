import { TestBed } from '@angular/core/testing';

import { PelayanApiService } from './pelayan-api.service';

describe('PelayanApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PelayanApiService = TestBed.get(PelayanApiService);
    expect(service).toBeTruthy();
  });
});
