import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SubpanelService } from '../subpanel.service';


@Component({
  selector: 'app-subpanel-resultados-anuales',
  templateUrl: './subpanel-resultados-anuales.component.html',
  styleUrls: ['./subpanel-resultados-anuales.component.scss']
})
export class SubpanelResultadosAnualesComponent implements OnInit {
  @Input() resultadoAnual: any;
  @Output() removeSubpanelEvent = new EventEmitter<any>()
  res: any = {};
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  fuente: string = ""

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
    this.subpanelService.getSubpanel(this.resultadoAnual.url).subscribe((response: any) => {
      this.res = response;

      this.res.sort().forEach((element: any) => {
        this.lineChartData?.labels?.push(element.endOfPeriod);
        this.lineChartData.datasets[0].data.push(element.netIncomeLoss);
      })

      this.chart?.chart?.update();
      console.log(this.res);
      this.fuente = this.res[0].source;
    });
  }

  removeResultadoAnual(serie: any): void {
    this.removeSubpanelEvent.emit(serie);
  }

}
