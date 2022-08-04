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

  showPaginationButtons(
    document.querySelector('.cars-in-garage') as HTMLDivElement,
    slicePageData(data, 7).length,
  );
}

export function renderCards(renderData: Car[], activePage: number) {
  renderData.forEach((elem) => {
    createCar(elem.name, elem.id, elem.color);
  });
  
  const pageNumber = document.querySelector<HTMLSpanElement>('.page-number');
  if(pageNumber) {
    pageNumber.innerHTML = `#${activePage}`; 
  }
}

function showPaginationButtons(cars: HTMLDivElement, total: number) {
  const [next, prev] = ['.next-page', '.prev-page'].map((elem) => document.querySelector(elem));
  
  next.addEventListener('click', async () => {
    const data = await getData('http://127.0.0.1:3000/garage') as Car[];
    const page = JSON.parse(localStorage.getItem('activePage') as string);
    showNext(page, cars, total, data);
  });
  prev.addEventListener('click', async () => {
    const data = await getData('http://127.0.0.1:3000/garage') as Car[];
    const page = JSON.parse(localStorage.getItem('activePage') as string);
    showPrev(page, cars, total, data);
  });
}

function showNext(activePage: number, pagination: HTMLDivElement, total: number, data: Car[]) {
  if (activePage < total) {
    console.log('next');
    activePage += 1;
    setLocalStorage('activePage', activePage);
    pagination.innerHTML = '';
    renderCards(paginationGarage(data, activePage), activePage);
  }
}
function showPrev(activePage: number, pagination: HTMLDivElement, total: number, data: Car[]) {
  if (activePage > 1) {
    activePage -= 1;
    setLocalStorage('activePage', activePage);
    pagination.innerHTML = '';
    renderCards(paginationGarage(data, activePage), activePage);
  }
}
