import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';

import { MockComponent } from 'ng-mocks';

// Components
import { CardUserComponent } from './card-user.component';

describe('CardUserComponent', () => {
  let component: CardUserComponent;
  let fixture: ComponentFixture<CardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockComponent(MatIcon), CardUserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
