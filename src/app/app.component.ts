import { Component } from '@angular/core';
import { TitleService } from './title.service';
import { Location } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grayson-front';
  newTitle = '';

  constructor(private titleService: TitleService, private location: Location, private authService: AuthService) {}

  ngDoCheck() {
    this.newTitle = this.titleService.getTitle();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  volver() {
    this.location.back();
  }
}
