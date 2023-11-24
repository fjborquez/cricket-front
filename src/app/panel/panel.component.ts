import { SerieService } from './../serie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanelService } from '../panel.service';

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

  constructor(private route: ActivatedRoute, private panelService: PanelService, private serieService: SerieService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.panelService.getPanel(Number(this.id)).subscribe(data => {
      this.panel = data;
      this.serieService.getList().subscribe((response: any) => {
        this.series = response.filter((serie: any) => {
          return !this.panel.series.map((serie: any) => serie.id).includes(serie.id)
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

  public removeChart(serie: any): void {
    this.panelService.removeSerie(Number(this.id), serie.id).subscribe(_ => {
      this.series.push(serie);
      this.panel.series = this.panel.series.filter((checkedSerie: any) => checkedSerie.id !== serie.id);
    });
  }

  public changeSelectedSerie(event: any): void {
    this.selectedSerie = this.series.find((serie: any) => event.target.value == serie.id);
  }

}
