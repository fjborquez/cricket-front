import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  private url = 'https://api.grayson.fborquez.cl/api';

  constructor(private http: HttpClient) { }

  getList(params = {}) {
    return this.http.get(this.url + '/paneles', params);
  }

  getPanel(id: number) {
    return this.http.get(this.url + '/paneles/' + id);
  }

  addPanel(panel: any) {
    return this.http.post(this.url + '/paneles', panel);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/paneles/' + id);
  }

  addSerie(panelId: number, serieId: number) {
    return this.http.put(this.url + '/paneles/' + panelId + '/series/' + serieId, {});
  }

  removeSerie(panelId: number, serieId: number) {
    return this.http.delete(this.url + '/paneles/' + panelId + '/series/' + serieId);
  }
}
