import { TestBed } from '@angular/core/testing';

import { MockMenuService } from './mock-menu.service';

describe('MockMenuService', () => {
  let service: MockMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
