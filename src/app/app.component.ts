import {ApplicationRef, Component} from '@angular/core';

import {Translator, TranslatorContainer} from 'angular-translator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private static users = [
    {
      name: 'John Doe',
      lastLogin: new Date('2017-03-02 17:23'),
    },
    {
      name: 'Max Mustermann',
      lastLogin: new Date('2017-03-17 12:45'),
    }
  ];

  public title = 'Loading...';

  public user = AppComponent.users[0];

  public translations: object = {};

  constructor(private translator: Translator, public translatorContainer: TranslatorContainer) {
    const promises = [];

    // this comes from default module (assets/i18n/.json)
    promises.push(translator.translate(['STATUS_PENDING', 'STATUS_DONE', 'TITLE']).then((translations) => {
      this.translations['STATUS_PENDING'] = translations[0];
      this.translations['STATUS_DONE'] = translations[1];
      this.title = translations[2];
    }));

    const months = Array.apply(null, Array(12)).map(function(x, i) { return 'month.' + i; });

    // this comes from 'calendar' module (assets/i18n/calendar/.json)
    promises.push(translatorContainer.getTranslator('calendar').translate(months).then((translations) => {
      this.translations['months'] = translations;
    }));

    Promise.all(promises).then(() => {
      console.log(this.translations);
    });
  }

  public changeUser() {
    let p: number = AppComponent.users.indexOf(this.user) + 1;

    if (p === AppComponent.users.length) {
      p = 0;
    }

    this.user = AppComponent.users[p];
  }
}
