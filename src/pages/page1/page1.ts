import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { StatusBar, Splashscreen, TextToSpeech } from 'ionic-native';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    // do something cool :)
  }

  // my very first function
  speakUp(txt: string) {
    if(txt) {
      TextToSpeech.speak(txt);
    }
  }

}
