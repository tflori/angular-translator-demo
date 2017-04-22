import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TranslateLogHandler, TranslatorModule } from 'angular-translator';

import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';
import { TranslationLoaderCalendar } from '../calendar/TranslationLoader';
import { MonthComponent } from '../calendar/months.component';
import { RandomPipe } from './RandomPipe';

export class MyTLH extends TranslateLogHandler {
  info(message: string): void {
    if (console && console.info) {
      console.info(message);
    }
  }

  debug(message: string): void {
    if (console && console.log) {
      console.log(message);
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MonthComponent,
    RandomPipe,
  ],
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslatorModule.forRoot({
      providedLanguages: ['de', 'en'],
      defaultLanguage:   'en',
      detectLanguage:    true,
      pipes:             [ RandomPipe ],
      modules:           {
        calendar: {
          loader: TranslationLoaderCalendar,
        },
      },
    }),
  ],
  providers:    [
    { provide: TranslateLogHandler, useClass: MyTLH },
    TranslationLoaderCalendar,
    RandomPipe
  ],
  bootstrap:    [AppComponent],
})
export class AppModule {
}
