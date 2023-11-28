import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  title: string = ""

  constructor() { }

  setTitle(title: string) {
    this.title = title
  }

  getTitle() {
    return this.title
  }
}
