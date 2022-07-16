import './rangeslider.css';
import { RangeSliderStock } from './range-slider-stock';
import { RangeSliderYear } from './range-slider-year';
import data from '../../DateBase.json';
import { setLocalStorage } from '../localStorage/setLocalStorage';

export function Slider() {
  let year: number[] = [];
  let stock: number[] = [];
  data.forEach((elem): void => {
    year.push(elem.releaseYear);
    stock.push(elem.stock);
  });
  year = year.sort((a, b) => a - b);
  stock = stock.sort((a, b) => a - b);

  const yearEarlier = JSON.parse(localStorage.getItem('yearEarlier') as string) as number;
  const yearLater = JSON.parse(localStorage.getItem('yearLater') as string) as number;
  const stockLess = JSON.parse(localStorage.getItem('stockLess') as string) as number;
  const stockMore = JSON.parse(localStorage.getItem('stockMore') as string) as number;

  if (!yearEarlier && !yearLater) {
    setLocalStorage('yearEarlier', year[0]);
    setLocalStorage('yearLater', year[year.length - 1]);
  }
  if (!stockLess && !stockMore) {
    setLocalStorage('stockLess', stock[0]);
    setLocalStorage('stockMore', stock[stock.length - 1]);
  }

  RangeSliderYear(
    '.release-slider-1',
    '.release-slider-2',
    '.year-earlier',
    '.year-later',
    '.slider-track-year',
    year[0],
    year[year.length - 1]
  );
  RangeSliderStock(
    '.stock-slider-1',
    '.stock-slider-2',
    '.less',
    '.more',
    '.slider-track-stock',
    stock[0],
    stock[stock.length - 1]
  );
}
