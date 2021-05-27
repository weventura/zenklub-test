import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MockComponent } from 'ng-mocks';

// Components
import { HomeComponent } from './home.component';
import { CardUserComponent } from '../../../shared/components/card-user/card-user.component';
import { CalendarComponent } from '../../../shared/components/calendar/calendar.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent, MockComponent(CardUserComponent), MockComponent(CalendarComponent)]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
