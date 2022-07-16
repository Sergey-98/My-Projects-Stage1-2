import { filter } from '../filter';
import { setLocalStorage } from '../../localStorage/setLocalStorage';
import { IFilters } from '../../types/interfaces';
import { changeFilter } from '../../filter/changeFilter';
import data from '../../../DateBase.json';
import { Slider } from '../../rangeSlider/sliders';

export function clearFilters() {
  const clear = document.querySelector<HTMLButtonElement>('.reset-filter');
  const popular = document.querySelector<HTMLInputElement>('.popular-checkbox');

  if (clear) {
    clear.addEventListener('click', (): void => {
      const f = filter as IFilters;
      setLocalStorage('filters', f);
      if (popular) {
        popular.checked = false;
      }
      let year: number[] = [];
      let stock: number[] = [];
      data.forEach((elem): void => {
        year.push(elem.releaseYear);
        stock.push(elem.stock);
      });
      year = year.sort((a, b) => a - b);
      stock = stock.sort((a, b) => a - b);
      setLocalStorage('yearEarlier', year[0]);
      setLocalStorage('yearLater', year[year.length - 1]);
      setLocalStorage('stockLess', stock[0]);
      setLocalStorage('stockMore', stock[stock.length - 1]);
      Slider();
      changeFilter();
    });
  }
}
