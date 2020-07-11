import { ConversorMoedasRoutingModule } from './conversor-moedas.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorMoedaComponent } from './conversor-moeda/conversor-moeda.component';




@NgModule({
  declarations: [ConversorMoedaComponent],
  imports: [
    CommonModule,
    ConversorMoedasRoutingModule
  ]
})
export class ConversorMoedasModule { }
