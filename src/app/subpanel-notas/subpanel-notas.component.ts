import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PanelService } from 'app/panel.service';

@Component({
  selector: 'app-subpanel-notas',
  templateUrl: './subpanel-notas.component.html',
  styleUrl: './subpanel-notas.component.scss'
})
export class SubpanelNotasComponent implements OnInit {
  @Input() subpanel: any;
  @Output() removeSubpanelEvent = new EventEmitter<any>();
  note: string = "";

  constructor(private panelService: PanelService) { }

  ngOnInit(): void {
    this.note = this.subpanel.pivot.note;
  }

  removeSubpanel(subpanel: any): void {
    this.removeSubpanelEvent.emit(subpanel);
  }

  save(note: string): void {
    this.note = note;
    this.panelService.addSubpanel(this.subpanel.pivot.panel_id, this.subpanel.id, {note}).subscribe();
  }
}
