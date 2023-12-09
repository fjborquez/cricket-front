import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsiderService {

  private url = environment.baseUrl + 'insiders'

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);
  }

  getInsider(url: string) {
    return this.http.get(url);
  }
}
