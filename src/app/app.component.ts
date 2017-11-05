import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`.red {color: red}`],
  template: `

  <div *appIf="flag; then view else alt">Angulr Directives</div>

  <ng-template #view>
    <h1>I am the view!</h1>
  </ng-template>

  <ng-template #alt>
    <h1>Show me if false!</h1>
  </ng-template>

  <input type="checkbox"
          (change)="flag = $event.target.checked">
  `,
})

export class AppComponent {
  flag = false;
  arr = [1, 2, 3, 4, 5];
}
