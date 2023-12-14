import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SubpanelService } from '../subpanel.service';

@Component({
  selector: 'app-subpanel-insiders',
  templateUrl: './subpanel-insiders.component.html',
  styleUrls: ['./subpanel-insiders.component.scss']
})
export class SubpanelInsidersComponent implements OnInit {
  @Input() insider: any;
  @Output() removeSubpanelEvent = new EventEmitter<any>()
  fuente: string  = "EDGAR - SEC";
  insiders: any = [];
  dataSource = new MatTableDataSource<any>();

  constructor(private subpanelService: SubpanelService) { }

  ngOnInit(): void {
    this.subpanelService.getSubpanel(this.insider.url).subscribe(response => {
      this.insiders = response;
      this.dataSource = new MatTableDataSource<any>(this.insiders.sort(this.compareByStocks));
    });
  }

  removeInsider(insider: any): void {
    this.removeSubpanelEvent.emit(insider);
  }

  compareByStocks(insiderA: any, insiderB: any) {
    if (insiderA.shares < insiderB.shares) {
      return 1;
    }
    if (insiderA.shares > insiderB.shares) {
      return -1;
    }
    return 0;
  }

}
