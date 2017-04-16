import {TranslationLoader} from 'angular-translator';

export class TranslationLoaderCalendar extends TranslationLoader {
  private translations: object = {
    de: {
      'month.0': 'Januar',
      'month.1': 'Februar',
      'month.2': 'März',
      'month.3': 'April',
      'month.4': 'Mai',
      'month.5': 'Juni',
      'month.6': 'Juli',
      'month.7': 'August',
      'month.8': 'September',
      'month.9': 'Oktober',
      'month.10': 'November',
      'month.11': 'Dezember',
    },
    en: {
      'month.0': 'January',
      'month.1': 'February',
      'month.2': 'March',
      'month.3': 'April',
      'month.4': 'May',
      'month.5': 'June',
      'month.6': 'Juli',
      'month.7': 'August',
      'month.8': 'September',
      'month.9': 'October',
      'month.10': 'November',
      'month.11': 'December',
    }
  };

  load({language}: any): Promise<Object> {
    if (!this.translations[language]) {
      return Promise.reject('Translations for language ' + language + ' are not defined');
    }

    return Promise.resolve(this.translations[language]);
  }
}
