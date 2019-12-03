import { TestBed } from '@angular/core/testing';

import { MahasiswaApiService } from './mahasiswa-api.service';

describe('MahasiswaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MahasiswaApiService = TestBed.get(MahasiswaApiService);
    expect(service).toBeTruthy();
  });
});
