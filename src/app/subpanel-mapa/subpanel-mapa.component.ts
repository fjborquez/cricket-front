import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubpanelService } from 'app/subpanel.service';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-subpanel-mapa',
  templateUrl: './subpanel-mapa.component.html',
  styleUrl: './subpanel-mapa.component.scss'
})
export class SubpanelMapaComponent {
  @Input() subpanel: any;
  @Output() removeSubpanelEvent = new EventEmitter<any>();
  fuente: string  = "Ministerio de energia y minas";
  puntos: any = [];
  options: any;

  constructor(private subpanelService: SubpanelService) { }

  ngOnInit(): void {
    this.subpanelService.getSubpanel(this.subpanel.url).subscribe((response: any) => {
      const markers: Leaflet.Marker[]  = [];
      let options: any = {};
      var center = {};
      response.forEach((point: any, index: any) => {
        if (index == 0) {
          center = new Leaflet.LatLng(point.lat, point.long);
        }

        let marker = new Leaflet.Marker(new Leaflet.LatLng(point.lat, point.long), {
          icon: new Leaflet.Icon({
            iconSize: [50, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/pointer.png',
          }),
          title: point.name,
        } as Leaflet.MarkerOptions);
        markers.push(marker);
      });
      options.layers = [...this.getLayers(), ...markers];
      options.zoom = 8;
      options.center = center;
      this.options = options;
    });
  }

  removeSubpanel(subpanel: any): void {
    this.removeSubpanelEvent.emit(subpanel);
  }

  getLayers(): Leaflet.Layer[] {
    return [
      new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      } as Leaflet.TileLayerOptions),
    ] as Leaflet.Layer[];
  }
}
