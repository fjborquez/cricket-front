import { SubpanelService } from '../subpanel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanelService } from '../panel.service';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  id: string | null = null;
  panel: any;
  subpaneles: any = [];
  selectedSubpanel: any = null;

  constructor(private route: ActivatedRoute, private panelService: PanelService,
    private subpanelService: SubpanelService, private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('');
    this.id = this.route.snapshot.paramMap.get('id')
    this.panelService.getPanel(Number(this.id)).subscribe((data: any) => {
      this.titleService.setTitle(data.nombre + " - " + data.descripcion);
      this.panel = data;
      this.subpanelService.getList().subscribe((response: any) => {
        this.subpaneles = response.filter((serie: any) => {
          return !this.panel.subpaneles.map((serie: any) => serie.id).includes(serie.id)
        });
      });
    });
  }

  public addSubpanel(): void {
    this.panelService.addSubpanel(Number(this.id), this.selectedSubpanel.id).subscribe(_ => {
      this.panel.subpaneles.push(this.selectedSubpanel);
      this.subpaneles = this.subpaneles.filter((checkedSerie: any) => checkedSerie.id !== this.selectedSubpanel.id);
      this.selectedSubpanel = null;
    });
  }

  public removeSubpanel(subpanel: any): void {
    this.panelService.removeSubpanel(Number(this.id), subpanel.id).subscribe(_ => {
      this.subpaneles.push(subpanel);
      this.panel.subpaneles = this.panel.subpaneles.filter((checkedSerie: any) => checkedSerie.id !== subpanel.id);
    });
  }

  public changeSelectedSubpanel(event: any): void {
    this.selectedSubpanel = this.subpaneles.find((serie: any) => event.target.value == serie.id);
  }

}
