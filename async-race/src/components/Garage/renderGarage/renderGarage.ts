import { createGarage } from '../createComponents/createGarage/createGarage';
import { createCar } from '../createComponents/createGarage/createCars/createCars';
import { setLocalStorage } from '../../localStorage/setLocalStorage';
import { paginationGarage, slicePageData } from '../pagination/paginationGarage';
import { getData } from '../garageApi/getData';
// import { showNextPage }
// import { showPrevPage }

type Car = {
  name: string;
  color: string;
  id: number;
};

export function renderGarage(data: Car[]) {
  let activePage: number;
  const page = JSON.parse(localStorage.getItem('activePage') as string);

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
  renderCards(renderData, activePage);

  showPaginationButtons();
}

export async function renderCards(renderData: Car[], activePage: number) {
  const cards = document.querySelector<HTMLDivElement>('.cars-in-garage');
  if (cards) {
    cards.innerHTML = '';
  }
  renderData.forEach((elem) => {
    createCar(elem.name, elem.id, elem.color);
  });
  
  const pageNumber = document.querySelector<HTMLSpanElement>('.page-number');
  const count = document.querySelector<HTMLDivElement>('.total-number');
  const data = (await getData('http://127.0.0.1:3000/garage')) as Car[];
  if(pageNumber && count) {
    pageNumber.innerHTML = `#${activePage}`;
    count.textContent = String(data.length);
  }
}

export function showPaginationButtons() {
  const [next, prev] = ['.next-page', '.prev-page'].map((elem) => document.querySelector(elem));
  
  next.addEventListener('click', async () => {
    const data = await getData('http://127.0.0.1:3000/garage') as Car[];
    const page = JSON.parse(localStorage.getItem('activePage') as string);
    showNext(page, data);
  });
  prev.addEventListener('click', async () => {
    const data = await getData('http://127.0.0.1:3000/garage') as Car[];
    const page = JSON.parse(localStorage.getItem('activePage') as string);
    showPrev(page, data);
  });
}

export async function showNext(activePage: number, data: Car[]) {
  if (activePage < slicePageData(data, 7).length) {
    activePage += 1;
    setLocalStorage('activePage', activePage);
    renderCards(paginationGarage(data, activePage), activePage);
  }
}
export function showPrev(activePage: number, data: Car[]) {
  if (activePage > 1) {
    activePage -= 1;
    setLocalStorage('activePage', activePage);
    // pagination.innerHTML = '';
    renderCards(paginationGarage(data, activePage), activePage);
  }
}
