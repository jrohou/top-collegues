import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value, args) {
    if(value > 0) {
      return `<p class="text-success">+${value}</p>`;
    }
    else if(value < 0 ) {
      return `<p class="text-danger">${value}</p>`;
    }
    else {
      return `${value}`;
    }
  }

}
