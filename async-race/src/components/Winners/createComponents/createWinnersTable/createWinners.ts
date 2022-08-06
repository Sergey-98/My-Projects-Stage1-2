import './winners.css';
import { Winners, Car } from "../../../interfaces/types";
import { getData } from '../../../Garage/garageApi/getData';

export async function createWinners(totalNumber: number, page: number) {
  const main = document.querySelector<HTMLElement>('main');
  const winners = document.createElement('div');
  winners.classList.add('winners');
  // winners.innerHTML = '';
  winners.innerHTML = `
    <div class = "title-winners">
      <span class = "title">Winners</span>
      <span class = "total-number">${totalNumber}</span>
    </div>
    <div class = "title-page">
      <span class = "subtitle">Page</span>
      <span class = "page-number">#${page}</span>
    </div>
    <div class = "winners-table"></div>
    <div class = "pagination-buttons">
      <button class = "prev-page"><<< Prev</button>
      <button class = "next-page">Next >>> </button>
    </div>
  `;
  main?.append(winners);

}