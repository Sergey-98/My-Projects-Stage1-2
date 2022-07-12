import { filter } from '../filter/filter';
import { setLocalStorage } from '../localStorage/setLocalStorage';
import { IFilters } from '../types/interfaces';
import { changeDataFilter } from '../filter/changeFilter';

export function buttons() {
  const CasioBrand = document.querySelector<HTMLButtonElement>('.Casio');
  const EmporioBrand = document.querySelector<HTMLButtonElement>('.Emporio-armani');
  const DieselBrand = document.querySelector<HTMLButtonElement>('.Diesel');
  const StuhrlingBrand = document.querySelector<HTMLButtonElement>('.Stuhrling');

  const filtersOptions = JSON.parse(localStorage.getItem('filters')) as IFilters;
  if (!filtersOptions) {
    const f = filter as IFilters;
    setLocalStorage('filters', f);
  } else {
    changeDataFilter();
  }
  if (CasioBrand && EmporioBrand && DieselBrand && StuhrlingBrand) {
    [CasioBrand, EmporioBrand, DieselBrand, StuhrlingBrand].forEach((elem) => {
      elem.addEventListener('click', () => {
        const dataS = elem.dataset.brand;
        const filtersOptions = JSON.parse(localStorage.getItem('filters')) as IFilters;
        if (!filtersOptions.filterByBrend.includes(dataS)) {
          const s = filtersOptions.filterByBrend;
          s.push(dataS);
          setLocalStorage('filters', filtersOptions);
          changeDataFilter();
        } else {
          const dataS = elem.dataset.brand;
          const index: number = filtersOptions.filterByBrend.indexOf(dataS);
          filtersOptions.filterByBrend.splice(index, 1);
          setLocalStorage('filters', filtersOptions);
          changeDataFilter();
        }
      });
    });
  }
}
