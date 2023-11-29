import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private url = environment.baseUrl + 'series';

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);
  }

  getSerie(id: number) {
    return this.http.get(this.url  + '/' +  id);
  }
}
