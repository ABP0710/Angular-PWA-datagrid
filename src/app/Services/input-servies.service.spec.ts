import { TestBed } from '@angular/core/testing';

import { InputServiesService } from './input-servies.service';

describe('InputServiesService', () => {
  let service: InputServiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputServiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
