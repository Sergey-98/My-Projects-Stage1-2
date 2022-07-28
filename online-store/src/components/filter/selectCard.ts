import data from '../../DateBase.json';
import { setLocalStorage } from '../localStorage/setLocalStorage';
import { IData } from '../../components/types/interfaces';
import { IFilters } from '../types/interfaces';

export function selectCard() {
  const filters = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
  const searchData = JSON.parse(localStorage.getItem('searchItem') as string) as string;
  let copyData = data as IData[];

  const brend = filters.filterByBrend;
  const gender = filters.filterByGender;
  const material = filters.filterByMaterial;
  const color = filters.filterByColor;
  const popular = filters.popularItem as string[];
  const stock = filters.filterByQuantity as string[];
  const year = filters.filterByRelease as string[];

  if (brend.length > 0) {
    copyData = copyData.filter((item) => brend.indexOf(item.brand) !== -1);
  }
  if (gender.length > 0) {
    copyData = copyData.filter((item) => gender.indexOf(item.gender) !== -1);
  }
  if (material.length > 0) {
    copyData = copyData.filter((item) => material.indexOf(item.material) !== -1);
  }
  if (color.length > 0) {
    copyData = copyData.filter((item) => color.indexOf(item.color) !== -1);
  }
  if (popular.length > 0) {
    copyData = copyData.filter((item) => popular.indexOf(item.popularItem) !== -1);
  }
  if (stock.length > 0) {
    copyData = copyData.filter((item) => item.stock >= parseInt(stock[0]) && item.stock <= parseInt(stock[1]));
  }
  if (year.length > 0) {
    copyData = copyData.filter(
      (item) => item.releaseYear >= parseInt(year[0]) && item.releaseYear <= parseInt(year[1])
    );
  }
  if (searchData) {
    copyData = copyData.filter((item) => item.name.toLowerCase().indexOf(searchData.toLowerCase()) !== -1);
  }
  if (copyData.length !== 0) {
    copyData;
  }
  const dataB = [...new Set(copyData)];
  setLocalStorage('Data', dataB);
}
