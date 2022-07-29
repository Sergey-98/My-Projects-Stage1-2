import './mainButtons.css';

export function createMainButtons() {
  const body = document.querySelector<HTMLBodyElement>('body');
  const main = document.createElement('main');
  main.classList.add('main');
  body?.append(main);
  const mainPageButtons = document.createElement('div');
  mainPageButtons.classList.add('page-buttons');
  mainPageButtons.innerHTML = `
    <button class = "garage-button">TO GARAGE</button>
    <button class = "winners-button">TO WINNERS</button>
  `;
  main?.append(mainPageButtons);
}
