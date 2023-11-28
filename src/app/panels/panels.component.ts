import { TitleService } from './../title.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css'],
})
export class PanelsComponent implements OnInit {
  paneles: any = []

  constructor(private panelService: PanelService, private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Mis paneles");
    this.panelService.getList().subscribe(response => {
      this.paneles = response;
    });
  }
}
