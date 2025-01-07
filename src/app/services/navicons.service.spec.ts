import { TestBed } from '@angular/core/testing';

import { NaviconsService } from './navicons.service';

describe('NaviconsService', () => {
  let service: NaviconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaviconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
