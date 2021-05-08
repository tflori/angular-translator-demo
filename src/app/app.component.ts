import {BreakpointObserver} from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Injector,
  VERSION,
  ViewChild
} from '@angular/core';

import {Translator, TranslatorContainer} from 'angular-translator';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
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

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  public title = 'Loading...';

  public user = AppComponent.users[0];

  public version = VERSION;

  public translations: object = {};

  public isSmallScreen = true;

  public isMenuOpened = false;

  constructor(public translator: Translator,
              public translatorContainer: TranslatorContainer,
              private injector: Injector,
              breakpointObserver: BreakpointObserver,
              private cdr: ChangeDetectorRef) {
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

    // this.isSmallScreen = breakpointObserver.isMatched('(max-width: 822px)');
    // cdr.detectChanges();
    breakpointObserver.observe(['(max-width: 822px)']).subscribe(bps => this.isSmallScreen = bps.matches);
  }

  ngAfterViewInit(): void {
    this.sidenav.openedStart.subscribe(() => this.isMenuOpened = true);
    this.sidenav.closedStart.subscribe(() => this.isMenuOpened = false);
  }

  public changeUser(p?: number) {
    p = p !== undefined ? p : AppComponent.users.indexOf(this.user) + 1;

    if (p === AppComponent.users.length) {
      p = 0;
    }

    this.user = AppComponent.users[p];
  }

  public isScreenSmall(): boolean {
    return this.isSmallScreen;
  }
}
