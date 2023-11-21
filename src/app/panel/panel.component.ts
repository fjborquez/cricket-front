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

  constructor(private route: ActivatedRoute, private panelService: PanelService, private serieService: SerieService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.panelService.getPanel(Number(this.id)).subscribe(data => {
      this.panel = data;
    });
    this.serieService.getList().subscribe(response => {
      this.series = response;
    });
  }

  public addChart(): void {
  }

  public removeChart(): void {
  }

}
