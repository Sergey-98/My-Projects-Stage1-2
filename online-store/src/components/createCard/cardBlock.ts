import { drawCard } from './card';
import { IData } from '../../components/types/interfaces';

export function drawCardList(data: IData[]): void {
  const cards = document.querySelector<HTMLDivElement>('.cards');
  if (cards) {
    cards.innerHTML = '';
  }
  for (let i = 0; i < data.length; i++) {
    const typ: IData = data[i];
    drawCard(typ);
  }
}
