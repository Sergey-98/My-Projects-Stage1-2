import './sources.css';
import { IDataNews } from '../../../types/interfaces';

class Sources {
  draw(data: IDataNews[]) {
    const fragment = document.createDocumentFragment();
    const select = <HTMLSelectElement>document.querySelector('.select');
    const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');
    data.forEach((item: IDataNews) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true);
      if (item.category === select.value) {
        ((sourceClone as ParentNode).querySelector('.source__item-name') as HTMLElement).textContent = item.name;
        ((sourceClone as ParentNode).querySelector('.source__item') as HTMLElement).setAttribute(
          'data-source-id',
          item.id
        );
        fragment.append(sourceClone);
      }
    });

    (document.querySelector('.sources') as HTMLDivElement).append(fragment);
  }
}

export default Sources;
