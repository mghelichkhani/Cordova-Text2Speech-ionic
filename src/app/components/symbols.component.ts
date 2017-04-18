import { Component } from '@angular/core';
import { SymbolsService } from '../services/symbols.service';

@Component({
  selector: 'symbols',
  templateUrl: 'symbols.component.html',
  providers: [SymbolsService]
})

export class SymbolsComponent {
  componentName: 'SymbolsComponent';
  symbols: Symbol[];

  constructor(private symbolsService: SymbolsService) {
    this.symbolsService.getSymbols().subscribe(symbols => {
      this.symbols = symbols;
    });
  }
}

interface Symbol {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string;
}
