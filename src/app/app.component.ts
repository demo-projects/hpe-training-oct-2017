import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  styles  : [`.red {color: red}`],
  template: `
    <h1 *ngIf="flag">Angulr Directives</h1>

    <input type="checkbox" (change)="flag = $event.target.checked">
  `,
})

export class AppComponent {
  flag = false;
}
