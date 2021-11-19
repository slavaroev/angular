import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2
} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') transformName: string = '';
  @Input('fontStyles') fontStyles!: {size: string, weight?: string, decoration?: string};
  @HostBinding('style.letterSpacing') spacing = '';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  @HostListener('click', ['$event']) onClick(event: Event): void {
    console.log(this.elementRef.nativeElement);
  }

  @HostListener('mouseenter') onEnter(): void {
    this.spacing = '3px';
    this.renderer2.addClass(this.elementRef.nativeElement, this.transformName);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'font-size', this?.fontStyles?.size);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'font-wight', this?.fontStyles?.weight);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'text-decoration', this?.fontStyles?.decoration);
  }

  @HostListener('mouseleave') onLeave(): void {
    this.spacing = '0px';
    this.renderer2.removeClass(this.elementRef.nativeElement, this.transformName);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'font-size', null);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'font-wight', null);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'text-decoration', null);
  }

}
