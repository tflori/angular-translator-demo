import {Component} from '@angular/core';

import {provideTranslator} from 'angular-translator';

@Component({
  selector: 'months',
  template: `
    <ul>
      <li *ngFor="let d of [].constructor(12); index as i">{{ 'month.'+i | translate }}</li>
    </ul>
  `,
  providers: [ provideTranslator('calendar') ]
})
export class MonthComponent {}
