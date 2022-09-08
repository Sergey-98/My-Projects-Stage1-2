import './cars.css';
import { removeCar, selectCar } from '../../../actionButtons/buttonsOnCard/buttonsOnCard';

export function renderCar(name: string, id: number, color: string) {
  const carsInGarage = document.querySelector<HTMLDivElement>('.cars-in-garage');
  const car = document.createElement('div');
  car.classList.add('car');
  car.dataset.id = String(id);
  car.innerHTML = `
    <div class = "head-card">
      <button class = "select select-${id}" data-id = "${id}">SELECT</button>
      <button class = "remove remove-${id}" data-id = "${id}">REMOVE</button>
      <span class = "name car-name-${id}">${name}</span>
    </div>
    <div class = "control-buttons">
      <button class = "start start-${id} active">A</button>
      <button class = "stop stop-${id}">B</button>
    </div>
    <div class = "pictures">
      <svg class = "car-img car-img-${id}" xmlns="http://www.w3.org/2000/svg" fill = ${color}
      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-car-pickup" 
      width="24" height="24" viewBox="0 0 24 24">
        <path d="M16,6H10.5V10H1V15H3A3,3 0 0,0 6,18A3,3 0 0,0 9,15H15A3,3 0 0,0 18,18A3,3 0 0,0 21,
        15H23V12C23,10.89 22.11,10 21,10H19L16,6M12,7.5H15.5L17.46,10H12V7.5M6,13.5A1.5,1.5 0 0,1 7.5,
        15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,
        15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z" />
      </svg>
      <img src="../../../assets/img/flag.svg" alt="Flag" class = "flag">
    </div>
  `;
  carsInGarage?.append(car);

  const select = document.querySelector<HTMLButtonElement>(`.select-${id}`);
  const remove = document.querySelector<HTMLButtonElement>(`.remove-${id}`);

  select?.addEventListener('click', async () => {
    await selectCar(Number(select.dataset.id));
  });

  remove?.addEventListener('click', async () => {
    await removeCar(Number(remove.dataset.id));
  });
}
