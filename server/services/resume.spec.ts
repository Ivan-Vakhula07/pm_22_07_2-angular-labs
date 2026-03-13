import { TestBed } from '@angular/core/testing';

import { Resume } from './resume';

describe('Resume', () => {
  let service: Resume;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Resume);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
