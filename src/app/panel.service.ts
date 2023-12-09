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
    return this.http.get(this.url, params);
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

  addSerie(panelId: number, serieId: number) {
    return this.http.put(this.url + '/' + panelId + '/series/' + serieId, {});
  }

  addInsider(panelId: number, serieId: number) {
    return this.http.put(this.url + '/' + panelId + '/insiders/' + serieId, {});
  }

  removeSerie(panelId: number, serieId: number) {
    return this.http.delete(this.url + '/' + panelId + '/series/' + serieId);
  }

  removeInsider(panelId: number, insiderId: number) {
    return this.http.delete(this.url + '/' + panelId + '/insiders/' + insiderId);
  }
}
