import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubpanelService } from '../subpanel.service';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';

@Component({
  selector: 'app-subpanel-cantidad-puntos-agrupados',
  templateUrl: './subpanel-cantidad-puntos-agrupados.component.html',
  styleUrls: ['./subpanel-cantidad-puntos-agrupados.component.scss']
})
export class SubpanelPuntosPorEmpresaComponent implements OnInit {
  @Input() subpanel: any;
  @Input() agrupar: string = '';
  @Output() removeSubpanelEvent = new EventEmitter();
  fuente: string = "Ministerio de energia y minas - Peru";
  puntos: any = [];
  dataSource = new MatTableDataSource<any>();

  constructor(private subpanelService: SubpanelService) { }

  ngOnInit(): void {
    this.subpanelService.getSubpanel(this.subpanel.url).subscribe(response => {
      let puntos: any = response;
      const groupedBy: any = [];
      puntos.forEach((punto: any) => {
        punto.metadata.forEach((metadata: any) => {
          if (metadata.key === this.agrupar) {
            let exists = groupedBy.find((value: any) => { return value.titular === metadata.value;});
            if (exists) {
              exists.puntos.push(punto);
            } else {
              groupedBy.push({titular: metadata.value, puntos: [punto]});
            }
          }
        });
      });
      groupedBy.sort();

      this.puntos = groupedBy;
      this.dataSource = new MatTableDataSource<any>(this.puntos.sort(this.compare));
      console.log(this.puntos);
    });
  }

  removeSubpanel(subpanel: any): void {
    this.removeSubpanelEvent.emit(subpanel);
  }

  compare(agrupadoA: any, agrupadoB: any) {
    if (agrupadoA.puntos.length < agrupadoB.puntos.length) {
      return 1;
    }
    if (agrupadoA.puntos.length > agrupadoB.puntos.length) {
      return -1;
    }
    return 0;
  }

}
