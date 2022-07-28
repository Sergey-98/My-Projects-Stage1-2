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
      <span class = "card-quantity">Quantity in stock: ${data.stock}</span>
      <span class = "card-release">Year release: ${data.releaseYear}</span>
      <span class = "card-brand">Brand: ${data.brand}</span>
      <span class = "card-gender">Gender: ${data.gender}</span>
      <span class = "card-material">Body material: ${data.material}</span>
      <span class = "card-color">Belt color: ${data.color}</span>
      <span class = "card-popular">Popular: ${data.popularItem}</span>
      `;
    cards.append(card);
  }
}
