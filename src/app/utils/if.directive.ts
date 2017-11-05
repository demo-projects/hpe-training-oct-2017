import { Directive, Input, Optional, TemplateRef, ViewContainerRef } from '@angular/core';

/*
<ng-template [appIf]="flag" [appIfElse]="alt" [appIfThen]="view">
      <h1>Angulr Directives</h1>
    </ng-template>
*/

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  @Input() appIfElse: TemplateRef<any>;
  @Input() appIfThen: TemplateRef<any>;

  constructor(private entry: ViewContainerRef) {}

  @Input()
  set appIf(flag: boolean) {
    this.entry.clear();
    if (flag) {
      this.entry.createEmbeddedView(this.appIfThen);
    } else {
      this.entry.createEmbeddedView(this.appIfElse);
    }
  }
}
