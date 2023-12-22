import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MatTableDataSource } from '@angular/material/table';
import { SubpanelService } from '../subpanel.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() serie: any;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Output() removeSubpanelEvent = new EventEmitter<any>()
  ser: any = {};
  dataSource = new MatTableDataSource<any>();

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: '',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  constructor(private subpanelService: SubpanelService) { }

  ngOnInit(): void {
    this.subpanelService.getSubpanel(this.serie.url).subscribe((response: any) => {
      this.ser = response

      this.ser.datos.forEach((element: any) => {
        this.lineChartData?.labels?.push(element.clave);
        this.lineChartData.datasets[0].data.push(element.valor);
      })

      this.chart?.chart?.update();
      this.dataSource = new MatTableDataSource<any>(this.ser.datos);
    });
  }

  removeChart(serie: any): void {
    this.removeSubpanelEvent.emit(serie);
  }

}
