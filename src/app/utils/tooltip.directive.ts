import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class TooltipDirective implements OnInit {

  @Input()
  public appMarker: string;

  @HostBinding('style.backgroundColor')
  private bgColor = '';

  constructor(private element: ElementRef, private R: Renderer2) {}

  public ngOnInit(): void {
    this.R.listen(this.element.nativeElement, 'mouseover', this.markText.bind(this));
  }

  @HostListener('mouseenter')
  markText() {
    // this.bgColor = this.appMarker;
    this.R.setStyle(this.element.nativeElement, 'color', this.appMarker);
  }

  // @HostListener('mouseleave')
  clearMark() {
    this.bgColor = '';
  }
}
