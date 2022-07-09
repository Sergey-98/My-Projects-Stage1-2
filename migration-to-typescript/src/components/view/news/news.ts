import './news.css';
import { Sources } from '../../../types/types';

class News {
  draw(data: Sources[]) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

    news.forEach((item: Sources, idx: number) => {
      const newsClone = newsItemTemp.content.cloneNode(true);

      if (idx % 2) ((newsClone as ParentNode).querySelector('.news__item') as HTMLElement).classList.add('alt');

      ((newsClone as ParentNode).querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
        item.urlToImage || 'assets/img/logo.svg'
      })`;
      ((newsClone as ParentNode).querySelector('.news__meta-author') as HTMLElement).textContent =
        item.author || item.source.name;
      ((newsClone as ParentNode).querySelector('.news__meta-date') as HTMLElement).textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      ((newsClone as ParentNode).querySelector('.news__description-title') as HTMLElement).textContent = item.title;
      ((newsClone as ParentNode).querySelector('.news__description-source') as HTMLElement).textContent =
        item.source.name;
      ((newsClone as ParentNode).querySelector('.news__description-content') as HTMLElement).textContent =
        item.description;
      ((newsClone as ParentNode).querySelector('.news__read-more a') as HTMLElement).setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    (document.querySelector('.news') as HTMLDivElement).innerHTML = '';
    (document.querySelector('.news') as HTMLDivElement).appendChild(fragment);
  }
}

export default News;
