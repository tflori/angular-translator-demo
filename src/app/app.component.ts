import { Component } from '@angular/core';

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

  public title = 'Angular Translator Demo';

  public user = AppComponent.users[0];

  public changeUser() {
    let p: number = AppComponent.users.indexOf(this.user) + 1;

    if (p === AppComponent.users.length) {
      p = 0;
    }

    this.user = AppComponent.users[p];
  }
}
