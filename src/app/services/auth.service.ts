import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { AuthResponse } from '../models/auth-response';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentResponse: BehaviorSubject<AuthResponse | undefined> = new BehaviorSubject<AuthResponse | undefined>(undefined)

  get currentUser() : User | undefined {
    return this.currentResponse.value?.user
  }

  get token() : string | undefined {
    return this.currentResponse.value?.acessToken
  }

  get isLogged() : boolean {
    return !!this.currentResponse.value
  }

  private AUTH_KEY = "AUTH_RESPONSE"

  constructor(private http: HttpClient, private toast: HotToastService) {
    const sessionAuth = sessionStorage.getItem(this.AUTH_KEY)
    if (sessionAuth) this.currentResponse.next(JSON.parse(sessionAuth))
    this.currentResponse.subscribe(response => {
      if(response) sessionStorage.setItem(this.AUTH_KEY, JSON.stringify(response))
      else sessionStorage.clear()
    })
  }


  register(user : User): Observable<void> {
    return this.http.post<AuthResponse>(`${environment.API_URL}/register`,user)
    .pipe(this.toast.observe({
      loading: "Enregistrement en cours...",
      error: "Une erreur empêche votre inscription.",
      success: response => `Enregistrement de ${response.user.username} réussi!`
    }),map(() => {}))
  }

  login(credentials : {email: string, password: string}) {
    return this.http.post<AuthResponse>(`${environment.API_URL}/login`, credentials)
    .pipe(this.toast.observe({
      loading: "Connexion en cours...",
      error: "Accès refusé.",
      success: response => `Bienvenue : ${response.user.username}`
    }), tap(response => this.currentResponse.next(response)))
  }

  logout() {
    this.currentResponse.next(undefined)
  }
}
