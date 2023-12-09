import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InsiderService } from '../insider.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-subpanel-insiders',
  templateUrl: './subpanel-insiders.component.html',
  styleUrls: ['./subpanel-insiders.component.scss']
})
export class SubpanelInsidersComponent implements OnInit {
  @Input() insider: any;
  @Output() removeInsiderEvent = new EventEmitter<any>()
  fuente: string  = "EDGAR - SEC";
  insiders: any = [];
  dataSource = new MatTableDataSource<any>();

  constructor(private insiderService: InsiderService) { }

  ngOnInit(): void {
    this.insiderService.getInsider(this.insider.url).subscribe(response => {
      this.insiders = response;
      this.dataSource = new MatTableDataSource<any>(this.insiders.sort(this.compareByStocks));
    });
  }

  removeInsider(insider: any): void {
    this.removeInsiderEvent.emit(insider);
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
