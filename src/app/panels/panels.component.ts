import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit {

  paneles: any = []

  constructor(private panelService: PanelService) { }

  ngOnInit(): void {
    this.panelService.getList().subscribe(response => {
      this.paneles = response;
    });
  }
}
