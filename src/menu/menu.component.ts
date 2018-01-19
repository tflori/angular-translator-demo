import { Component } from '@angular/core';

import {provideTranslator, TranslatorContainer} from 'angular-translator';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  providers: [ provideTranslator('menu') ]
})
export class MenuComponent {
  constructor(private translatorContainer: TranslatorContainer) {}

  public setLanguage(lang: string) {
    this.translatorContainer.language = lang;
  }
}
