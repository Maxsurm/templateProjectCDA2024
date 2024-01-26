import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { AuthResponse } from '../models/auth-response';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private toast: HotToastService) { }


  register(user : User): Observable<void> {
    return this.http.post<AuthResponse>(`${environment.API_URL}/register`,user)
    .pipe(this.toast.observe({
      loading: "Enregistrement en cours...",
      error: "Une erreur empêche votre inscription.",
      success: response => `Enregistrement de ${response.user.username} réussi!`
    }),map(() => {}))
  }

  login() {

  }

  logout() {

  }
}
