import './mainButtons.css';
import { appGarage } from '../../app/appGarage';
import { appWinners } from '../../../Winners/app/appWinners';

export function createMainButtons() {
  const body = document.querySelector<HTMLBodyElement>('body');
  const main = document.createElement('main');
  main.innerHTML = '';
  main.classList.add('main');
  body?.append(main);
  const mainPageButtons = document.createElement('div');
  mainPageButtons.classList.add('page-buttons');
  mainPageButtons.innerHTML = `
    <button class = "garage-button">TO GARAGE</button>
    <button class = "winners-button">TO WINNERS</button>
  `;
  main?.append(mainPageButtons);

  const garage = document.querySelector<HTMLButtonElement>('.garage-button');
  const winners = document.querySelector<HTMLButtonElement>('.winners-button');

  garage?.addEventListener('click', async () => {
    if (body) {
      body.innerHTML = '';
    }
    await appGarage();
  });
  winners?.addEventListener('click', async () => {
    if (body) {
      body.innerHTML = '';
    }
    await appWinners();
  });
}
