import './buttons.css';
import { filter } from '../filter/filter';
import { setLocalStorage } from '../localStorage/setLocalStorage';
import { IFilters, IData } from '../types/interfaces';
import { changeFilter } from '../filter/changeFilter';
import { sorting } from '../sorting/sorting';

export function changeButtons() {
  const casioBrand = document.querySelector<HTMLDivElement>('.Casio');
  const emporioBrand = document.querySelector<HTMLDivElement>('.Emporio-armani');
  const dieselBrand = document.querySelector<HTMLDivElement>('.Diesel');
  const stuhrlingBrand = document.querySelector<HTMLDivElement>('.Stuhrling');
  const manGender = document.querySelector<HTMLDivElement>('.for-man');
  const womanGender = document.querySelector<HTMLDivElement>('.for-woman');
  const steelMaterial = document.querySelector<HTMLDivElement>('.steel');
  const plasticMaterial = document.querySelector<HTMLDivElement>('.plastic');
  const blackColor = document.querySelector<HTMLDivElement>('.belt-black');
  const brownColor = document.querySelector<HTMLDivElement>('.belt-brown');
  const redColor = document.querySelector<HTMLDivElement>('.belt-red');
  const whiteColor = document.querySelector<HTMLDivElement>('.belt-white');
  const popular = document.querySelector<HTMLInputElement>('.popular-checkbox');
  const sortList = document.querySelector<HTMLInputElement>('.sorting-list');
  const sortMethod = JSON.parse(localStorage.getItem('Method') as string) as string;
  const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
  const dataForBuild = JSON.parse(localStorage.getItem('Data') as string) as IData[];

  if (!filtersOptions) {
    const f = filter as IFilters;
    setLocalStorage('filters', f);
    changeFilter();
  } else {
    const popularItem = filtersOptions.popularItem;
    if (popularItem && popular && popularItem.length > 0) {
      popular.checked = true;
      changeFilter();
    }
  }

  if (!dataForBuild) {
    const d: IData[] = [];
    setLocalStorage('Data', d);
  }

  if (!sortMethod && sortList) {
    setLocalStorage('Method', sortList.value);
    sorting();
  }

  if (sortList) {
    const method = JSON.parse(localStorage.getItem('Method') as string) as string;
    sortList.value = method;
  }

  if (casioBrand && emporioBrand && dieselBrand && stuhrlingBrand) {
    [casioBrand, emporioBrand, dieselBrand, stuhrlingBrand].forEach((elem): void => {
      elem.addEventListener('click', (): void => {
        dataFilters(elem, 'data-brand', 'filterByBrend');
      });
    });
  }

  if (manGender && womanGender) {
    [manGender, womanGender].forEach((elem): void => {
      elem.addEventListener('click', (): void => {
        dataFilters(elem, 'data-gender', 'filterByGender');
      });
    });
  }

  if (steelMaterial && plasticMaterial) {
    [steelMaterial, plasticMaterial].forEach((elem): void => {
      elem.addEventListener('click', (): void => {
        dataFilters(elem, 'data-material', 'filterByMaterial');
      });
    });
  }

  if (blackColor && brownColor && redColor && whiteColor) {
    [blackColor, brownColor, redColor, whiteColor].forEach((elem): void => {
      elem.addEventListener('click', (): void => {
        dataFilters(elem, 'data-color', 'filterByColor');
      });
    });
  }

  function dataFilters(elem: HTMLDivElement, param: string, filterKey: keyof IFilters) {
    const dataS = elem.getAttribute(param) as string;
    const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
    const filter = filtersOptions[filterKey] as string[];
    elem.classList.toggle('active');
    addFilters(dataS, filter, filtersOptions);
  }

  if (popular) {
    popular.addEventListener('change', (): void => {
      const dataC: boolean = popular.checked ? true : false;
      const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
      if (filtersOptions.popularItem) {
        if (!dataC) {
          filtersOptions.popularItem = [];
          setLocalStorage('filters', filtersOptions);
          changeFilter();
        } else {
          filtersOptions.popularItem = ['yes'];
          setLocalStorage('filters', filtersOptions);
          changeFilter();
        }
      }
    });
  }

  sortList?.addEventListener('change', sorting);

  function addFilters(dataS: string, filter: string[], filtersOptions: IFilters): void {
    if (filter && filter.includes(dataS)) {
      const index: number = filter.indexOf(dataS);
      filter.splice(index, 1);
      setLocalStorage('filters', filtersOptions);
      changeFilter();
    } else {
      filter.push(dataS);
      setLocalStorage('filters', filtersOptions);
      changeFilter();
    }
  }
}
