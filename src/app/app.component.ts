import { Component } from '@angular/core';
import { TitleService } from './title.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grayson-front';
  newTitle = '';

  constructor(private titleService: TitleService, private location: Location) {}

  ngDoCheck() {
    this.newTitle = this.titleService.getTitle();
  }

  volver() {
    this.location.back();
  }
}
