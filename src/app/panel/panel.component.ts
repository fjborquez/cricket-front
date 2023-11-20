import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  charts = [1]

  ngOnInit(): void {
  }

  public add(): void {
    this.charts.push(1)
  }

  public quitar(): void {
    this.charts.pop()
  }

}
