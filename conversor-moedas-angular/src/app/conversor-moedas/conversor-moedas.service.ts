import { ResponseConversao } from './../../model/ResponseConversao';
import { Conversao } from './../../model/Conversao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConversorMoedasService {
  private readonly BASE_URL =
   'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3';
  constructor(private http: HttpClient) {}

  converter(conversao: Conversao): Observable<any> {

    const params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    return this.http
        .get(this.BASE_URL + params);
    }

    cotacaoPara(conversaoResponse: ResponseConversao,
                conversao: Conversao): number {
    if (conversaoResponse === undefined) {
    return 0;
    }
    return conversaoResponse.rate[conversao.moedaPara];
    }

    cotacaoDe(conversaoResponse: ResponseConversao,
              conversao: Conversao): string {
    if (conversaoResponse === undefined) {
    return '0';
    }
    return (1 / conversaoResponse.rate[conversao.moedaPara])
    .toFixed(4);
    }

    dataCotacao(conversaoResponse: ResponseConversao): string {
      if (conversaoResponse === undefined) {
        return '';
      }
      return conversaoResponse.date;
    }
}
