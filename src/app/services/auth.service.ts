import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  register(user : User): Observable<Object> {
    return this.http.post<AuthResponse>(`${environment.API_URL}/register`,user)
  }

  login() {

  }

  logout() {

  }
}
