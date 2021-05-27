import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

// Models
import { Day } from '../../shared/models/day.model';
import { Month } from '../../shared/models/month.model';

@Injectable({
  providedIn: 'root'
})
export class CalendaryService {

  baseUrl = environment.local; // api rest fake

  constructor(private http: HttpClient) { }

  getMonth(): Observable<Month> {
    return this.http.get<Month>(`${this.baseUrl}/month`);
  }

  getDays(from: number, to: number): Observable<Day[]> {
    return this.http.get<Day[]>(`${this.baseUrl}/days?_start=${from}&_end=${to}`);
  }
}
