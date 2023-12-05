import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { SerieService } from '../serie.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() serie: any;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Output() removeChartEvent = new EventEmitter<any>()
  ser: any
  fuentes: any = []

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

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.getSerie(this.serie.id).subscribe(response => {
      this.ser = response

      this.ser.datos.forEach((element: any) => {
        this.lineChartData?.labels?.push(element.clave);
        this.lineChartData.datasets[0].data.push(element.valor);
        this.fuentes.push(element.fuente);
      })


      this.chart?.chart?.update();
      this.fuentes = [...new Set(this.fuentes)]
    });
  }

  removeChart(serie: any): void {
    this.removeChartEvent.emit(serie);
  }

}
