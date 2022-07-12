import { IData } from '../../components/types/interfaces';
import './card.css';

export function drawCard(data: IData) {
  const cards = document.querySelector<HTMLDivElement>('.cards');
  if (cards) {
    const card = document.createElement('div');
    card.classList.add('card_item');
    card.innerHTML = `
      <h2 class = "card-title">${data.name}</h2>
      <img src = ${data.img} alt = ${data.brand} class = "card-img">
      <span class = "card-quantity">Количество на складе: ${data.stock}</span>
      <span class = "card-release">Год выпуска: ${data.releaseYear}</span>
      <span class = "card-brand">Бренд: ${data.brand}</span>
      <span class = "card-material">Материал корпуса: ${data.material}</span>
      <span class = "card-color">Цвет ремешка: ${data.color}</span>
      <span class = "card-popular">Популярный: ${data.isPopular}</span>
      `;
    cards.append(card);
  }
}
