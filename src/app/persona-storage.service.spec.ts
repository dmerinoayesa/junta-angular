import { TestBed } from '@angular/core/testing';

import { PersonaStorageService } from './persona-storage.service';

describe('PersonaStorageService', () => {
  let service: PersonaStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
