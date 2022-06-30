import './sources.css';
import {ISources } from '../../../types/interfaces'

class Sources {
    draw(data : ISources[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement> document.querySelector('#sourceItemTemp');
        
        data.forEach((item : ISources) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            ((sourceClone as ParentNode).querySelector('.source__item-name')as HTMLElement).textContent = item.source.name;
            ((sourceClone as ParentNode).querySelector('.source__item')as HTMLElement).setAttribute('data-source-id', item.source.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLDivElement).append(fragment);
    }
}

export default Sources;
