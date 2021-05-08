import { MediaMatcher } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as md from '@angular/material';

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
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
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
    md.MatToolbarModule,
    md.MatButtonModule,
    md.MatSidenavModule,
    md.MatInputModule,
    md.MatMenuModule,
    md.MatIconModule,
  ],
  providers:    [
    { provide: TranslateLogHandler, useClass: MyTLH },
    TranslationLoaderCalendar,
    RandomPipe,
    MediaMatcher
  ],
  bootstrap:    [AppComponent],
})
export class AppModule {
}
