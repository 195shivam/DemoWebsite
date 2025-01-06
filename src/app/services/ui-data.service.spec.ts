import { TestBed } from '@angular/core/testing';

import { UiDataService } from './ui-data.service';

describe('UiDataService', () => {
  let service: UiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
