import { createGarage } from '../createComponents/createGarage/createGarage';
import { createCar } from '../createComponents/createGarage/createCars/createCars';
import { setLocalStorage } from '../../localStorage/setLocalStorage';
import { paginationGarage, slicePageData } from '../pagination/paginationGarage';
import { getData } from '../garageApi/getData';
import { Car } from '../../interfaces/types';

export async function renderCards(renderData: Car[], activePage: number) {
  const cards = document.querySelector<HTMLDivElement>('.cars-in-garage');
  const pageNumber = document.querySelector<HTMLSpanElement>('.page-number');
  const count = document.querySelector<HTMLDivElement>('.total-number');
  if (cards) {
    cards.innerHTML = '';
  }
  if (!renderData && count) {
    count.innerHTML = '0';
  } else {
    renderData.forEach((elem) => {
      createCar(elem.name, elem.id, elem.color);
    });
  }

  const data = (await getData('http://127.0.0.1:3000/garage')) as Car[];

  if (pageNumber && count) {
    pageNumber.innerHTML = `#${activePage}`;
    count.innerHTML = String(data.length);
  }
}

export async function showNext(activePage: number, data: Car[]) {
  if (activePage < slicePageData(data, 7).length) {
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
    const data = (await getData('http://127.0.0.1:3000/garage')) as Car[];
    const page = JSON.parse(localStorage.getItem('activePage') as string) as number;
    await showNext(page, data);
  });
  prev?.addEventListener('click', async () => {
    const data = (await getData('http://127.0.0.1:3000/garage')) as Car[];
    const page = JSON.parse(localStorage.getItem('activePage') as string) as number;
    await showPrev(page, data);
  });
}

export async function renderGarage(data: Car[]) {
  let activePage: number;
  const page = JSON.parse(localStorage.getItem('activePage') as string) as number;

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

  createGarage(data.length, activePage);

  const renderData = paginationGarage(data, activePage);
  await renderCards(renderData, activePage);

  showPaginationButtons();
}
