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

  const [garage, winners] = ['.garage-button', '.winners-button'].map((elem) => document.querySelector<HTMLButtonElement>(elem));

  garage?.addEventListener('click', () => {
    const body = document.querySelector<HTMLBodyElement>('body');
    if (body) {
      body.innerHTML = '';
    }
    appGarage();
  });
  winners?.addEventListener('click', () => {
    const body = document.querySelector<HTMLBodyElement>('body');
    if (body) {
      body.innerHTML = '';
    }
    appWinners();
  });

}
