import { Component, OnInit } from '@angular/core';

// Models
import { Profile } from '../../../shared/models/profile.model';

// Services
import { ProfileService } from '../../../services/profile/profile.service';

@Component({
  selector: 'zenklub-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentProfile: Profile;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.onGetProfile();
  }

  private onGetProfile(): void {
    this.profileService.getProfile().subscribe((response: Profile) => this.currentProfile = response);
  }

}



