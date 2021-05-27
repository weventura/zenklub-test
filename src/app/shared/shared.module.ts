import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

// Components
import { CalendarComponent } from './components/calendar/calendar.component';
import { CardUserComponent } from './components/card-user/card-user.component';

// Services
import { CalendaryService } from '../services/calendary/calendary.service';

@NgModule({
  declarations: [CalendarComponent, CardUserComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CalendarComponent,
    CardUserComponent
  ],
  providers: [CalendaryService]
})
export class SharedModule { }
