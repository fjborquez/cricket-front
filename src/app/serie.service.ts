import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private url = 'https://api.grayson.fborquez.cl/api';

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url + '/series');
  }

  getSerie(id: number) {
    return this.http.get(this.url + '/series/' + id);
  }
}
