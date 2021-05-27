import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MockComponent } from 'ng-mocks';

// Components
import { CalendarComponent } from './calendar.component';

// Services
import { ProfileService } from '../../../services/profile/profile.service';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MockComponent(MatIcon), CalendarComponent],
      providers: [ProfileService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have onNext function', () => {
    component.onNext();

    expect(component.direction).toBe(true);
    expect(component.currentPoint).toBe(4);
    expect(component.destinationPoint).toBe(8);
    expect(component.days).toEqual([]);
  });

  it('should have onBack function', () => {
    component.onBack();

    expect(component.direction).toBe(false);
    expect(component.currentPoint).toBe(-4);
    expect(component.destinationPoint).toBe(0);
    expect(component.days).toEqual([]);
  });
});;
