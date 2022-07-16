import { filter } from '../filter/filter';
import { setLocalStorage } from '../localStorage/setLocalStorage';
import { IFilters, IData } from '../types/interfaces';
import { changeFilter } from '../filter/changeFilter';

export function buttons() {
  const CasioBrand = document.querySelector<HTMLButtonElement>('.Casio');
  const EmporioBrand = document.querySelector<HTMLButtonElement>('.Emporio-armani');
  const DieselBrand = document.querySelector<HTMLButtonElement>('.Diesel');
  const StuhrlingBrand = document.querySelector<HTMLButtonElement>('.Stuhrling');
  const ManGender = document.querySelector<HTMLDivElement>('.for-man');
  const WomanGender = document.querySelector<HTMLDivElement>('.for-woman');
  const SteelMaterial = document.querySelector<HTMLDivElement>('.steel');
  const PlasticMaterial = document.querySelector<HTMLDivElement>('.plastic');
  const BlackColor = document.querySelector<HTMLDivElement>('.belt-black');
  const BrownColor = document.querySelector<HTMLDivElement>('.belt-brown');
  const RedColor = document.querySelector<HTMLDivElement>('.belt-red');
  const WhiteColor = document.querySelector<HTMLDivElement>('.belt-white');
  const popular = document.querySelector<HTMLInputElement>('.popular-checkbox');

  const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
  const dataForBuild = JSON.parse(localStorage.getItem('Data') as string) as IData[];

  if (!filtersOptions) {
    const f = filter as IFilters;
    setLocalStorage('filters', f);
    changeFilter();
  } else {
    const isPopular = filtersOptions.isPopular;
    if (isPopular) {
      if (popular) {
        if (isPopular.length > 0) {
          popular.checked = true;
          changeFilter();
        }
      }
    }
  }
  if (!dataForBuild) {
    const d: IData[] = [];
    setLocalStorage('Data', d);
  }

  if (CasioBrand && EmporioBrand && DieselBrand && StuhrlingBrand) {
    [CasioBrand, EmporioBrand, DieselBrand, StuhrlingBrand].forEach((elem): void => {
      elem.addEventListener('click', (): void => {
        const dataS = elem.dataset.brand as string;
        const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
        const filter = filtersOptions.filterByBrend as string[];
        AddFilters(dataS, filter, filtersOptions);
      });
    });
  }
  if (ManGender && WomanGender) {
    [ManGender, WomanGender].forEach((elem): void => {
      elem.addEventListener('click', (): void => {
        const dataS = elem.dataset.gender as string;
        const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
        const filter = filtersOptions.filterByGender as string[];
        AddFilters(dataS, filter, filtersOptions);
      });
    });
  }
  if (SteelMaterial && PlasticMaterial) {
    [SteelMaterial, PlasticMaterial].forEach((elem): void => {
      elem.addEventListener('click', (): void => {
        const dataS = elem.dataset.material as string;
        const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
        const filter = filtersOptions.filterByMaterial as string[];
        AddFilters(dataS, filter, filtersOptions);
      });
    });
  }
  if (BlackColor && BrownColor && RedColor && WhiteColor) {
    [BlackColor, BrownColor, RedColor, WhiteColor].forEach((elem): void => {
      elem.addEventListener('click', (): void => {
        const dataS = elem.dataset.color as string;
        const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
        const filter = filtersOptions.filterByColor as string[];
        AddFilters(dataS, filter, filtersOptions);
      });
    });
  }
  if (popular) {
    popular.addEventListener('change', (): void => {
      const dataC: boolean = popular.checked ? true : false;
      const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
      if (filtersOptions.isPopular) {
        if (!dataC) {
          filtersOptions.isPopular = [];
          setLocalStorage('filters', filtersOptions);
          changeFilter();
        } else {
          filtersOptions.isPopular = ['yes'];
          setLocalStorage('filters', filtersOptions);
          changeFilter();
        }
      }
    });
  }

  function AddFilters(dataS: string, filter: string[], filtersOptions: IFilters): void {
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
