import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appCoversorMoedaNumero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CoversorMoedaNumeroDirective,
    multi: true
  }]
})
export class CoversorMoedaNumeroDirective implements ControlValueAccessor{

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any): any {
    let valor = $event.target.value;
    const posDecimal = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDecimal > 0 ) {
      valor = valor.substr(0, posDecimal) + '.' +
        valor.substr(posDecimal);
    }

    $event.target.value = valor;
    this.onChange(valor);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

}
