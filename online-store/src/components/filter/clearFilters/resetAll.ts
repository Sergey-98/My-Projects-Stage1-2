import { filter } from '../filter';
import { setLocalStorage } from '../../localStorage/setLocalStorage';
import { IFilters } from '../../types/interfaces';
import { changeFilter } from '../../filter/changeFilter';
import data from '../../../DateBase.json';
import { Slider } from '../../rangeSlider/sliders';

export function resetAll() {
  const reset = document.querySelector<HTMLButtonElement>('.reset-all');
  const popular = document.querySelector<HTMLInputElement>('.popular-checkbox');
  const input = document.querySelector<HTMLInputElement>('.input');
  const close = document.querySelector<HTMLDivElement>('.close-icon');
  const sortList = document.querySelector<HTMLInputElement>('.sorting-list');
  const buttons = document.querySelectorAll<HTMLButtonElement>('button');

  if (reset) {
    reset.addEventListener('click', (): void => {
      localStorage.clear();
      initial();
    });
  }
  function initial() {
    if (buttons) {
      buttons.forEach((elem): void => {
        elem.classList.remove('active');
      });
    }
    if (sortList) {
      sortList.value = 'By name, from A to Z';
    }
    const f = filter as IFilters;
    setLocalStorage('filters', f);
    if (popular) {
      popular.checked = false;
    }
    if (input && close) {
      input.value = '';
      close.classList.add('hide');
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
    setLocalStorage('searchItem', '');
    Slider();
    changeFilter();
  }
}
