import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'random',
  pure: true
})
export class RandomPipe implements PipeTransform {
  public static pipeName = 'random';

  transform(value: any, ...args: any[]): any {
    if (!args[0] || !args[0][value]) {
      return 'unknown';
    }

    return args[0][value][Math.floor(Math.random() * args[0][value].length)];
  }
}

