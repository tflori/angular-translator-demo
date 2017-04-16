import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {TranslateLogHandler, TranslatorModule} from 'angular-translator';

import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';
import {TranslationLoaderCalendar} from '../calendar/TranslationLoader';
import {MonthComponent} from '../calendar/months.component';

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
    MonthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslatorModule.forRoot({
      providedLanguages: ['de', 'en'],
      defaultLanguage: 'en',
      detectLanguage: true,
      modules: {
        calendar: {
          loader: TranslationLoaderCalendar
        }
      },
    })
  ],
  providers: [
    { provide: TranslateLogHandler, useClass: MyTLH },
    TranslationLoaderCalendar
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
