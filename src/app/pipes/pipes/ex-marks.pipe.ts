import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exMarks'
})
export class ExMarksPipe implements PipeTransform {

  transform(text: string): string {
    return `${text.trim()} !!!!!!!!!!`;
  }

}
