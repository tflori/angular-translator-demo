import { TestBed, async } from '@angular/core/testing';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have translated property`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.translator.waitForTranslation().then(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('Angular Translator Demo');
    });
  }));

  it('should render the title in template', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.translator.waitForTranslation().then(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#app-title').textContent).toContain('Angular Translator Demo');
    });
  }));
});
