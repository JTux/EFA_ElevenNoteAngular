import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Api_Url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const str = `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this._http.post(`${Api_Url}/token`, str).subscribe((token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      localStorage.setItem('isLoggedIn', 'true');
      this._router.navigate(['/']);
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) {
      return new Observable(observer => observer.next(false));
    }

    return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.getHeaders() });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    localStorage.removeItem('isLoggedIn');

    this._http.post(`${Api_Url}/api/Account/Logout`, { headers: this.getHeaders() });
    this._router.navigate(['/login']);
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
