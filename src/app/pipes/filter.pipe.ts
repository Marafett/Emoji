import { Pipe, PipeTransform } from '@angular/core';
import { Emoji } from '../emoji';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Emoji[], names: string = ''): Emoji[] {
    if(!names.trim()){
      return value;
    }

    return value.filter(n =>  n.name.includes(names))
  }

}
