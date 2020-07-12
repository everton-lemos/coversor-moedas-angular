import { ConversorMoedasService } from './../conversor-moedas.service';
import { ResponseConversao } from './../../../model/ResponseConversao';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Conversao } from 'src/model/Conversao';

@Component({
  selector: 'app-conversor-moeda-modal',
  templateUrl: './conversor-moeda-modal.component.html',
  styleUrls: ['./conversor-moeda-modal.component.css']
})
export class ConversorMoedaModalComponent implements OnInit {

  @Input() id: string;
  @Input() conversaoResponse: ResponseConversao;
  @Input() conversao: Conversao = new Conversao();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private conversorService: ConversorMoedasService) { }

  ngOnInit(): void {
  }

  novaConsulta(): any {
    this.onConfirm.emit();
  }

  get valorConvertido(): string {
    if (this.conversaoResponse === undefined) {
      return '0';
    }

    return ( this.conversao.valor *
      this.conversaoResponse.rates[this.conversao.moedaPara]).toFixed(2);
  }

  get cotacaoPara(): string {
    return this.conversorService.cotacaoPara(
      this.conversaoResponse, this.conversao);
  }

  get cotacaoDe(): string {
    return this.conversorService.cotacaoDe(
      this.conversaoResponse, this.conversao);
  }

  get dataCotacao(): string {
    return this.conversorService.dataCotacao(
      this.conversaoResponse);
  }

}
