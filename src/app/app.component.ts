import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public title: string;
  public text: string;
  public val: string;
  public flag: boolean;

  constructor() {
    this.title = 'Hello Angular';
    this.text = 'type me!';
    this.val = '';
    this.flag = true;
  }

  changeTitle() {
    this.title = 'New Title';
  }

}
