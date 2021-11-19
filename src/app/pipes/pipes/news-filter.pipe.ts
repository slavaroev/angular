import { Pipe, PipeTransform } from '@angular/core';
import { News } from "../pipes.component";

@Pipe({
  name: 'newsFilter',
  pure: false
})
export class NewsFilterPipe implements PipeTransform {

  transform(news: News[], searchValue: string, searchField = 'title'): News[] {
    if (searchValue.trim()) {
      return news.filter((post: News) => {
        // @ts-ignore
        return post[searchField].toLowerCase().includes(searchValue);
      });
    }
    return news;
  }

}
