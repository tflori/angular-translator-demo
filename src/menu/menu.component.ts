import { Component } from '@angular/core';

import {provideTranslator} from 'angular-translator';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  providers: [ provideTranslator('menu') ]
})
export class MenuComponent {}
