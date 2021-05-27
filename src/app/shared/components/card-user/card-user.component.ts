import { Component, Input } from '@angular/core';

import { Profile } from '../../models/profile.model';

@Component({
  selector: 'zenklub-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent {
  @Input() profile: Profile;
}
