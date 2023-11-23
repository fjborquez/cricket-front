import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  private url = 'https://api.grayson.fborquez.cl/api';

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url + '/paneles');
  }

  getPanel(id: number) {
    return this.http.get(this.url + '/paneles/' + id);
  }
}
