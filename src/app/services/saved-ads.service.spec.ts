import { TestBed } from '@angular/core/testing';

import { SavedAdsService } from './saved-ads.service';

describe('SavedAdsService', () => {
  let service: SavedAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
