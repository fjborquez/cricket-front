import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.baseUrl;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  login(email: string, password: string) {
    return this.http.post(`${this.url}login`, { email, password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
