import { getData, getCar } from '../../garageApi/getData';
import { deleteCarData } from '../../garageApi/deleteData';
import { Car, Winners } from '../../../interfaces/types';
import { putData } from '../../garageApi/putData';
import { setLocalStorage } from '../../../localStorage/setLocalStorage';
import { paginationGarage } from '../../pagination/paginationGarage';
import { renderCards } from '../../renderGarage/renderGarage';
import { showPaginationButtons } from '../../renderGarage/renderGarage';
import { deleteWinnerData as deleteWin } from '../../../Winners/winnersApi/deleteData';
import { getData as getWin } from '../../../Winners/winnersApi/getData';
import { url, colorBlack } from '../../../constants/constants';

function getActivePage() {
  const activePage = JSON.parse(String(localStorage.getItem('activePage'))) as number;
  return activePage;
}

export async function removeCar(id: number) {
  await deleteCarData(id);
  const winners = (await getWin(`${url}winners`)) as Winners[];
  winners.forEach(async (elem) => {
    if (elem.id === id) {
      await deleteWin(id);
    }
  });
  const data = (await getData(`${url}garage`)) as Car[];
  let activePage = getActivePage();
  let renderData = paginationGarage(data, activePage);
  if (!renderData && data.length > 0) {
    setLocalStorage('activePage', activePage - 1);
    renderData = paginationGarage(data, activePage - 1);
  } else if (!renderData && data.length === 0) {
    setLocalStorage('activePage', 1);
    renderData = paginationGarage(data, 1);
  }
  activePage = getActivePage();
  await renderCards(renderData, activePage);
  showPaginationButtons();
}
async function modifyParam(id: number) {
  const updateInput = document.querySelector<HTMLInputElement>('.update-input');
  const updateColor = document.querySelector<HTMLInputElement>('.update-color');
  const data = await getCar(id);
  if (updateInput && updateColor) {
    updateInput.value = data.name;
    updateColor.value = data.color;
  }
}

export async function selectCar(id: number) {
  setLocalStorage('idForUpdate', id);
  await modifyParam(id);
}
async function updateCar(updateInput: HTMLInputElement, updateColor: HTMLInputElement, id: number) {
  (await putData(`${url}garage/${id}`, {
    name: updateInput?.value,
    color: updateColor?.value,
  })) as Car;
}
export async function updateCarData(id: number, updateInput: HTMLInputElement, updateColor: HTMLInputElement) {
  await updateCar(updateInput, updateColor, id);

  const dataCard = (await getData(`${url}garage/${id}`)) as Car;
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
        color.value = `${colorBlack}`;
      }
    }
  });
}
