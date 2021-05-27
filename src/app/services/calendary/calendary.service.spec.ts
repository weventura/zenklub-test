import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Services
import { CalendaryService } from './calendary.service';

describe('CalendaryService', () => {
  let calendaryService: CalendaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        CalendaryService
      ]
    });

    calendaryService = TestBed.inject(CalendaryService);
  });

  it('should be created', () => {
    expect(calendaryService).toBeTruthy();
  });
});
