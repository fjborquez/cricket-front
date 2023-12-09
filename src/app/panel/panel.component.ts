import { SerieService } from './../serie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanelService } from '../panel.service';
import { TitleService } from '../title.service';
import { InsiderService } from '../insider.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  id: string | null = null;
  panel: any;
  series: any = [];
  selectedSerie: any = null;
  insiders: any = [];
  selectedInsider: any = null;

  constructor(private route: ActivatedRoute, private panelService: PanelService,
    private serieService: SerieService, private titleService: TitleService, private insiderService: InsiderService) { }

  ngOnInit(): void {
    this.titleService.setTitle('');
    this.id = this.route.snapshot.paramMap.get('id')
    this.panelService.getPanel(Number(this.id)).subscribe((data: any) => {
      this.titleService.setTitle(data.nombre + " - " + data.descripcion);
      this.panel = data;
      this.serieService.getList().subscribe((response: any) => {
        this.series = response.filter((serie: any) => {
          return !this.panel.series.map((serie: any) => serie.id).includes(serie.id)
        });
      });
      this.insiderService.getList().subscribe((response: any) => {
        this.insiders = response.filter((insider: any) => {
          return !this.panel.insiders.map((insider: any) => insider.id).includes(insider.id)
        });
      });
    });
  }

  public addChart(): void {
    this.panelService.addSerie(Number(this.id), this.selectedSerie.id).subscribe(_ => {
      this.panel.series.push(this.selectedSerie);
      this.series = this.series.filter((checkedSerie: any) => checkedSerie.id !== this.selectedSerie.id);
      this.selectedSerie = null;
    });
  }

  public addInsider(): void {
    this.panelService.addInsider(Number(this.id), this.selectedInsider.id).subscribe(_ => {
      this.panel.insiders.push(this.selectedInsider);
      this.insiders = this.insiders.filter((checkedInsider: any) => checkedInsider.id !== this.selectedInsider.id);
      this.selectedInsider = null;
    });
  }

  public removeChart(serie: any): void {
    this.panelService.removeSerie(Number(this.id), serie.id).subscribe(_ => {
      this.series.push(serie);
      this.panel.series = this.panel.series.filter((checkedSerie: any) => checkedSerie.id !== serie.id);
    });
  }

  public removeInsider(insider: any): void {
    this.panelService.removeInsider(Number(this.id), insider.id).subscribe(_ => {
      this.insiders.push(insider);
      this.panel.insiders = this.panel.insiders.filter((checkedInsider: any) => checkedInsider.id !== insider.id);
    });
  }

  public changeSelectedSerie(event: any): void {
    this.selectedSerie = this.series.find((serie: any) => event.target.value == serie.id);
  }

  public changeSelectedInsider(event: any): void {
    this.selectedInsider = this.insiders.find((insider: any) => event.target.value == insider.id);
  }

}
