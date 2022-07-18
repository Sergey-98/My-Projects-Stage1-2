import { IData } from '../types/interfaces';
import { selectCard } from './selectCard';
import { sorting } from '../sorting/sorting';

export function changeFilter() {
  selectCard();
  const dataForBuild = JSON.parse(localStorage.getItem('Data') as string) as IData[];
  if (dataForBuild.length === 0) {
    const cards = document.querySelector<HTMLDivElement>('.cards');
    if (cards) {
      console.log('nodata!!!');
      cards.innerHTML = `<h1 class = "no-data-message">Выбранных товаров не обнаружено</h1>`;
    }
  } else {
    sorting();
  }
}
