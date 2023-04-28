import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], ...args: string[]): string[] {
    if (!value || !Array.isArray(value)) {
      return [];
    }
  
    if (!args || args.length < 2) {
      return value;
    }
  
    return value.filter((elem) => typeof elem === 'string' && (elem === args[0] || elem === args[1]));
  }
  

}
