import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private service: AuthService, private toast: HotToastService) {}

  // Une fois en place, TOUTES les requêtes HTTP sortantes passent par cette méthode
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.service.token
    if(token && request.url.startsWith(environment.API_URL)) {
      request = request.clone({
        /*headers: {} Remplace TOUS les headers existants présent sur la requête en cours*/
        setHeaders: { // permet d'ajouter OU remplacer un header
          Authorization : `Bearer ${token}5`
        }
      })
    }
    return next.handle(request).pipe(catchError(err => {
      // Pour faire des logs coté serveur
      if(err.status == 401) {
        this.toast.error("Veuillez vous reconnecter")
        this.service.logout()
      }
      return throwError(() => err)
    }));
  }
}
