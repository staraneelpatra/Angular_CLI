import { TestBed, inject } from '@angular/core/testing';

import { AppleserviceService } from './appleservice.service';

describe('AppleserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppleserviceService]
    });
  });

  it('should be created', inject([AppleserviceService], (service: AppleserviceService) => {
    expect(service).toBeTruthy();
  }));
});
