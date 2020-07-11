import { HttpClientModule } from '@angular/common/http';
import { ConversorMoedasService } from './conversor-moedas.service';
import { ConversorMoedasRoutingModule } from './conversor-moedas.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorMoedaComponent } from './conversor-moeda/conversor-moeda.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ConversorMoedaComponent],
  imports: [
    CommonModule,
    ConversorMoedasRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ConversorMoedaComponent],
  providers: [ConversorMoedasService]
})
export class ConversorMoedasModule { }
