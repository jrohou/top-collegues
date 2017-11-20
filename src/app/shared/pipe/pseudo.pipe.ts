import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pseudo'
})
export class PseudoPipe implements PipeTransform {

  transform(value, args) {
      return value.filter(c => c.pseudo.toLowerCase().startsWith(args.toLowerCase()));
  }

}
