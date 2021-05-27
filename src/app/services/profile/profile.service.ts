import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Profile } from '../../shared/models/profile.model';

// Models


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl = environment.local; // api rest fake

  constructor(private http: HttpClient) { }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.baseUrl}/profile`);
  }
}
