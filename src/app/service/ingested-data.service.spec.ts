import { TestBed } from '@angular/core/testing';

import { IngestedDataService } from './ingested-data.service';

describe('IngestedDataService', () => {
  let service: IngestedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngestedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
