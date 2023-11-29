import { TitleService } from './../title.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PanelService } from '../panel.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css'],
})
export class PanelsComponent implements OnInit {
  paneles: any = []

  constructor(private panelService: PanelService, private titleService: TitleService) { }

  ngOnInit(): void {
    let decodedToken = jwtDecode(localStorage.getItem('token')!);

    this.titleService.setTitle("Mis paneles");
    this.panelService.getList({
      user_id: decodedToken.sub
    }).subscribe(response => {
      this.paneles = response;
    });
  }

  onDelete(id: any) {
    this.panelService.delete(id).subscribe(_ => {
      this.paneles = this.paneles.filter((panel: any) => panel.id != id);
    });
  }
}
