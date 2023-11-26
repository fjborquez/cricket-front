import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://api.grayson.fborquez.cl/api';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  login(email: string, password: string) {
    return this.http.post(`${this.url}/login`, { email, password }, {
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
