import { ResultadoAnualService } from './../resultado-anual.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-subpanel-resultados-anuales',
  templateUrl: './subpanel-resultados-anuales.component.html',
  styleUrls: ['./subpanel-resultados-anuales.component.scss']
})
export class SubpanelResultadosAnualesComponent implements OnInit {
  @Input() resultadoAnual: any;
  @Output() removeResultadoAnualEvent = new EventEmitter<any>()
  res: any = {};
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  fuente: string = "SEC - EDGAR"


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

  constructor(private resultadoAnualService: ResultadoAnualService) { }

  ngOnInit(): void {
    this.resultadoAnualService.getResultadoAnual(this.resultadoAnual.url).subscribe(response => {
      this.res = response

      this.res.reverse().forEach((element: any) => {
        this.lineChartData?.labels?.push(element.resultado.context_ref);
        this.lineChartData.datasets[0].data.push(element.resultado.value);
      })

      this.chart?.chart?.update();
    });
  }

  removeResultadoAnual(serie: any): void {
    this.removeResultadoAnualEvent.emit(serie);
  }

}
