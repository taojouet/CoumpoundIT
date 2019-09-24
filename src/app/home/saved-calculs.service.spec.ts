import { TestBed } from '@angular/core/testing';

import { SavedCalculsService } from './saved-calculs.service';

describe('SavedCalculsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavedCalculsService = TestBed.get(SavedCalculsService);
    expect(service).toBeTruthy();
  });
});
