import { ConversorMoedasService } from './../conversor-moedas.service';
import { MoedaService } from './../moeda.service';
import { ResponseConversao } from './../../../model/ResponseConversao';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Moeda } from 'src/model/Moeda';
import { Conversao } from 'src/model/Conversao';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversor-moeda',
  templateUrl: './conversor-moeda.component.html',
  styleUrls: ['./conversor-moeda.component.css']
})


export class ConversorMoedaComponent implements OnInit {

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ResponseConversao;

  @ViewChild('conversaoForm', { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private convervorService: ConversorMoedasService
  ) { }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  init(): void {
    this.conversao = new Conversao('EUR', 'BRL', null);
    this.possuiErro = false;
  }

  converter(): void {
    if (this.conversaoForm.form.valid) {
      this.convervorService.converter(this.conversao).subscribe(r =>
        this.conversaoResponse = r,
        error => this.possuiErro = true
      );
    }
  }

}
