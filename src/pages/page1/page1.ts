import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { StatusBar, Splashscreen, TextToSpeech } from 'ionic-native';

import { SymbolsService } from '../../app/services/symbols.service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [SymbolsService]
})
export class Page1 {

  constructor(public navCtrl: NavController, private symbolsService: SymbolsService) {
    // do something cool :)
  }

  // my very first function
  speakUp(txt: string) {
    if(txt) {
      TextToSpeech.speak(txt);
    }
  }
}
