import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SymbolsService {
  sentence: any;

  constructor(private http:Http) {
    console.log('SymbolsService Initialized...');
    this.sentence =  new Array<Symbol>();
  }
  getSymbols() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map(res => res.json());
  }
  removeFromSentence(index: number) {
    this.sentence.splice(index,1);
  }

  addToSentence(symbol: Symbol) {
    this.sentence.push(symbol);
    console.log(this.sentence);
  }
}

interface Symbol {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string;
}
