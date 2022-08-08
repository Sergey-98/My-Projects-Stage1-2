import './selectSettings.css';
import { update } from '../../actionButtons/buttonsOnCard/buttonsOnCard';
import { generateCars } from '../../generateCars/generateCars';

export function createCarSettings() {
  const main = document.querySelector<HTMLElement>('main');
  const settings = document.createElement('div');
  settings.classList.add('select-settings');
  settings.innerHTML = `
    <div class = "create-car">
      <input type = "text" class = "input create-input" placeholder = "" autocomplete="off">
      <input type = "color" class = "create-color">
      <button class = "create-button">CREATE</button>
    </div>
    <div class = "update-car">
      <input type = "text" class = "input update-input" placeholder = "" autocomplete="off">
      <input type = "color" class = "update-color">
      <button class = "update-button">UPDATE</button>
    </div>
    <div class = "settings-buttons">
      <button class = "race-button">RACE</button>
      <button class = "reset-button">RESET</button>
      <button class = "generate-button">GENERATE CARS</button>
    </div>
  `;
  main?.append(settings);

  const updateButton = document.querySelector<HTMLButtonElement>('.update-button');
  const generateButton = document.querySelector<HTMLButtonElement>('.generate-button');
  updateButton?.addEventListener('click', async () => {
    const updateInput = document.querySelector<HTMLInputElement>('.update-input');
    const updateColor = document.querySelector<HTMLInputElement>('.update-color');
    if (updateInput && updateColor) {
      const id = JSON.parse(localStorage.getItem('idForUpdate') as string) as number;
      await update(id, updateInput, updateColor);
      localStorage.removeItem('idForUpdate');
    }
  });
  generateButton?.addEventListener('click', () => {
    generateCars();
  });
}
