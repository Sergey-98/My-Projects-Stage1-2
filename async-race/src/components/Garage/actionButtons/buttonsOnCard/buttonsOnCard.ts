import { getData } from '../../garageApi/getData';
import { deleteData } from '../../garageApi/deleteData';
import { Car, Winners } from '../../../interfaces/types';
import { putData } from '../../garageApi/putData';
import { setLocalStorage } from '../../../localStorage/setLocalStorage';
import { paginationGarage } from '../../pagination/paginationGarage';
import { renderCards } from '../../renderGarage/renderGarage';
import { showPaginationButtons } from '../../renderGarage/renderGarage';
import { deleteData as deleteWin } from '../../../Winners/winnersApi/deleteData';
import { getData as getWin } from '../../../Winners/winnersApi/getData';

export async function removeCar(id: number) {
  await deleteData(id);
  const winners = (await getWin('http://127.0.0.1:3000/winners')) as Winners[];
  winners.forEach(async (elem) => {
    if (elem.id === id) {
      await deleteWin(id);
    }
  });
  const data = (await getData('http://127.0.0.1:3000/garage')) as Car[];
  let activePage = JSON.parse(localStorage.getItem('activePage') as string) as number;
  let renderData = paginationGarage(data, activePage);
  if (!renderData && data.length > 0) {
    setLocalStorage('activePage', activePage - 1);
    renderData = paginationGarage(data, activePage - 1);
  } else if (!renderData && data.length === 0) {
    setLocalStorage('activePage', 1);
    renderData = paginationGarage(data, 1);
  }
  activePage = JSON.parse(localStorage.getItem('activePage') as string) as number;
  await renderCards(renderData, activePage);
  showPaginationButtons();
}

export async function selectCar(id: number) {
  setLocalStorage('idForUpdate', id);
  const updateInput = document.querySelector<HTMLInputElement>('.update-input');
  const updateColor = document.querySelector<HTMLInputElement>('.update-color');

  const data = (await getData(`http://127.0.0.1:3000/garage/${id}`)) as Car;
  if (updateInput && updateColor) {
    updateInput.value = data.name;
    updateColor.value = data.color;
  }
}

export async function update(id: number, updateInput: HTMLInputElement, updateColor: HTMLInputElement) {
  (await putData(`http://127.0.0.1:3000/garage/${id}`, {
    name: updateInput?.value,
    color: updateColor?.value,
  })) as Car;

  const dataCard = (await getData(`http://127.0.0.1:3000/garage/${id}`)) as Car;
  const carImg = document.querySelector<HTMLOrSVGImageElement>(`.car-img-${id}`);
  const carName = document.querySelector<HTMLSpanElement>(`.car-name-${id}`);
  const car = document.querySelectorAll<HTMLDivElement>('.car');

  car.forEach((elem) => {
    if (Number(elem.dataset.id) === id) {
      if (carImg && carName) {
        carImg.style.fill = dataCard.color;
        carName.innerText = dataCard.name;
      }
      const input = document.querySelector<HTMLInputElement>('.update-input');
      const color = document.querySelector<HTMLInputElement>('.update-color');
      if (input && color) {
        input.value = '';
        color.value = '#000000';
      }
    }
  });
}
