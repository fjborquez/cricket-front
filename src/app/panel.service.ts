import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  private url = environment.baseUrl + 'paneles';

  constructor(private http: HttpClient) { }

  getList(params = {}) {
    return this.http.get(this.url, {params});
  }

  getPanel(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  addPanel(panel: any) {
    return this.http.post(this.url, panel);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  addSubpanel(panelId: number, subpanelId: number) {
    return this.http.put(this.url + '/' + panelId + '/subpaneles/' + subpanelId, {});
  }

  removeSubpanel(panelId: number, subpanelId: number) {
    return this.http.delete(this.url + '/' + panelId + '/subpaneles/' + subpanelId);
  }
}
