import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubpanelService {

  private url = environment.baseUrl + 'subpaneles';

  constructor(private http: HttpClient) { }

  getList(params = {}) {
    return this.http.get(this.url, {params});
  }

  getSubpanel(url: string) {
    return this.http.get(url);
  }
}
