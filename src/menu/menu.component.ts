import { Component } from '@angular/core';

import {provideTranslator} from 'angular-translator';

@Component({
  selector: 'main-menu',
  templateUrl: './menu.component.html',
  providers: [ provideTranslator('menu') ]
})
export class MenuComponent {}
