import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {
  @Input('appIfNot') set isVisible(result: boolean) {
    if (result) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  // templateRef - содержит ссылку на контент
  // viewContainerRef - содержит ссылку на ng-template, место размещения контента из templateRef
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
