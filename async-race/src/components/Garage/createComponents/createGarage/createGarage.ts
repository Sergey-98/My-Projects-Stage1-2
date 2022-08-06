import './garage.css';
import { getData } from '../../garageApi/getData';
import { showNext, showPrev } from '../../renderGarage/renderGarage';

export function createGarage(totalNumber: number, page: number) {
  const main = document.querySelector<HTMLElement>('main');
  const garage = document.createElement('div');
  garage.classList.add('garage');
  garage.innerHTML = '';
  garage.innerHTML = `
    <div class = "title-garage">
      <span class = "title">Garage</span>
      <span class = "total-number">${totalNumber}</span>
    </div>
    <div class = "title-page">
      <span class = "subtitle">Page</span>
      <span class = "page-number">#${page}</span>
    </div>
    <div class = "cars-in-garage"></div>
    <div class = "pagination-buttons">
      <button class = "prev-page"><<< Prev</button>
      <button class = "next-page">Next >>> </button>
    </div>
  `;
  main?.append(garage);

}
