import { createGarage } from '../createComponents/createGarage/createGarage';
import { renderCar } from '../createComponents/createGarage/createCars/createCars';
import { setLocalStorage } from '../../localStorage/setLocalStorage';
import { paginationGarage } from '../pagination/paginationGarage';
import { slicePageData } from '../../utils/utils';
import { getData } from '../garageApi/getData';
import { Car } from '../../interfaces/types';
import { elemOnPage, url } from '../../constants/constants';

function resetCards() {
  const cards = document.querySelector<HTMLDivElement>('.cars-in-garage');
  if (cards) {
    cards.innerHTML = '';
  }
}
function resetCounter() {
  const count = document.querySelector<HTMLDivElement>('.total-number');
  if (count) {
    count.innerHTML = '0';
  }
}
export async function renderCards(renderData: Car[], activePage: number) {
  const pageNumber = document.querySelector<HTMLSpanElement>('.page-number');
  const count = document.querySelector<HTMLDivElement>('.total-number');
  resetCards();
  if (!renderData) {
    resetCounter();
  } else {
    renderData.forEach((elem) => {
      renderCar(elem.name, elem.id, elem.color);
    });
  }

  const data = (await getData(`${url}garage`)) as Car[];

  if (pageNumber && count) {
    pageNumber.innerHTML = `#${activePage}`;
    count.innerHTML = String(data.length);
  }
}

export async function showNext(activePage: number, data: Car[]) {
  if (activePage < slicePageData(data, elemOnPage).length) {
    setLocalStorage('activePage', activePage + 1);
    await renderCards(paginationGarage(data, activePage + 1), activePage + 1);
  }
}
export async function showPrev(activePage: number, data: Car[]) {
  if (activePage > 1) {
    setLocalStorage('activePage', activePage - 1);
    await renderCards(paginationGarage(data, activePage - 1), activePage - 1);
  }
}

export function showPaginationButtons() {
  const next = document.querySelector<HTMLButtonElement>('.next-page');
  const prev = document.querySelector<HTMLButtonElement>('.prev-page');

  next?.addEventListener('click', async () => {
    const data = (await getData(`${url}garage`)) as Car[];
    const page = JSON.parse(String(localStorage.getItem('activePage'))) as number;
    await showNext(page, data);
  });
  prev?.addEventListener('click', async () => {
    const data = (await getData(`${url}garage`)) as Car[];
    const page = JSON.parse(String(localStorage.getItem('activePage'))) as number;
    await showPrev(page, data);
  });
}

export async function renderGarage(data: Car[]) {
  let activePage: number;
  const page = JSON.parse(String(localStorage.getItem('activePage'))) as number;

  if (!page) {
    activePage = 1;
    setLocalStorage('activePage', activePage);
  } else {
    activePage = page;
  }

  const cars = document.querySelector<HTMLDivElement>('.garage');
  if (cars) {
    cars.innerHTML = '';
  }
  const garage = createGarage(data.length, activePage);
  const main = document.querySelector<HTMLElement>('main');
  main?.append(garage);

  const renderData = paginationGarage(data, activePage);
  await renderCards(renderData, activePage);

  showPaginationButtons();
}
