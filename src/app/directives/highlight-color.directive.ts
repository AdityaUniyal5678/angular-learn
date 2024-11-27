import { Directive, HostBinding, Input } from '@angular/core';
// Attribute Directive
@Directive({
  selector: '[highLightColor]',
  standalone: true,
})
export class HighlightColor {
  @HostBinding('style.backgroundColor')
  @Input()
  color = 'yellow';
  @HostBinding('style.height')
  @Input()
  height: string = '50px';
}
