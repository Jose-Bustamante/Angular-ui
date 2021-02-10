import { TestBed } from '@angular/core/testing';

import { StaplesUiService } from './staples-ui.service';

describe('StaplesUiService', () => {
  let service: StaplesUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaplesUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
