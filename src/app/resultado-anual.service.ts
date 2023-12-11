import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultadoAnualService {

  private url = environment.baseUrl + 'resultados-anuales'

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);
  }

  getResultadoAnual(url: string) {
    return this.http.get(url);
  }
}
