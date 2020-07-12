import { MoedaService } from './moeda.service';
import { HttpClientModule } from '@angular/common/http';
import { ConversorMoedasService } from './conversor-moedas.service';
import { ConversorMoedasRoutingModule } from './conversor-moedas.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorMoedaComponent } from './conversor-moeda/conversor-moeda.component';
import { FormsModule } from '@angular/forms';
import { CoversorMoedaNumeroDirective } from './coversor-moeda-numero.directive';
import { ConversorMoedaModalComponent } from './conversor-moeda-modal/conversor-moeda-modal.component';
import { ConversorMoedaPipeDataPipe } from './conversor-moeda-pipe-data.pipe';




@NgModule({
  declarations: [
    ConversorMoedaComponent,
    CoversorMoedaNumeroDirective,
    ConversorMoedaModalComponent,
    ConversorMoedaPipeDataPipe],
  imports: [
    CommonModule,
    ConversorMoedasRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ConversorMoedaComponent],
  providers: [ConversorMoedasService, MoedaService]
})
export class ConversorMoedasModule { }
