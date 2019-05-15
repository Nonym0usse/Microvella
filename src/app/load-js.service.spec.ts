import { TestBed } from '@angular/core/testing';

import { LoadJSService } from './load-js.service';

describe('LoadJSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadJSService = TestBed.get(LoadJSService);
    expect(service).toBeTruthy();
  });
});
