import { Component, OnInit } from '@angular/core';

// Services
import { CalendaryService } from '../../../services/calendary/calendary.service';

// Models
import { Day } from '../../models/day.model';
import { Month } from '../../models/month.model';

@Component({
  selector: 'zenklub-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  days: Day[];
  month: Month;
  direction = true;
  currentPoint = 0;
  destinationPoint = 4;

  constructor(private calendaryService: CalendaryService) { }

  ngOnInit(): void {
    this.onGetMoreDays();
    this.onGetMonth();
  }

  onNext(): void {
    this.direction = true;
    this.currentPoint = this.currentPoint + 4;
    this.destinationPoint = this.destinationPoint + 4;
    this.days = [];

    this.onGetMoreDays();
  }

  onBack(): void {
    this.direction = false;
    this.currentPoint = this.currentPoint - 4;
    this.destinationPoint = this.destinationPoint - 4;
    this.days = [];

    this.onGetMoreDays();
  }

  private onGetMoreDays(): void {
    this.calendaryService.getDays(this.currentPoint, this.destinationPoint)
      .subscribe((response: Day[]) => this.days = response);
  }

  private onGetMonth(): void {
    this.calendaryService.getMonth()
      .subscribe((response: Month) => this.month = response);
  }

}
