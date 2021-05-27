import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Services
import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let profileService: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ProfileService]
    });

    profileService = TestBed.inject(ProfileService);
  });

  it('should be created', () => {
    expect(profileService).toBeTruthy();
  });
});
