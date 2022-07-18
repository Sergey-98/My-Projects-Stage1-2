import data from '../../DateBase.json';
import { setLocalStorage } from '../localStorage/setLocalStorage';
import { IData } from '../../components/types/interfaces';
import { IFilters } from '../types/interfaces';

export function selectCard() {
  const filters = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
  let CopyData = data;
  let arr: IData[] = [];

  const brend: string[] = filters.filterByBrend;
  const gender: string[] = filters.filterByGender;
  const material: string[] = filters.filterByMaterial;
  const color: string[] = filters.filterByColor;
  const popular = filters.isPopular as string[];
  const stock = filters.filterByQuantity as string[];
  const year = filters.filterByRelease as string[];

  if (brend.length > 0) {
    for (let k = 0; k < CopyData.length; k++) {
      if (brend.includes(CopyData[k].brand)) {
        arr.push(CopyData[k]);
      }
    }
    CopyData = arr;
    arr = [];
  }
  if (gender.length > 0) {
    for (let k = 0; k < CopyData.length; k++) {
      if (gender.includes(CopyData[k].gender)) {
        arr.push(CopyData[k]);
      }
    }
    CopyData = arr;
    arr = [];
  }
  if (material.length > 0) {
    for (let k = 0; k < CopyData.length; k++) {
      if (material.includes(CopyData[k].material)) {
        arr.push(CopyData[k]);
      }
    }
    CopyData = arr;
    arr = [];
  }
  if (color.length > 0) {
    for (let k = 0; k < CopyData.length; k++) {
      if (color.includes(CopyData[k].color)) {
        arr.push(CopyData[k]);
      }
    }
    CopyData = arr;
    arr = [];
  }
  if (popular.length > 0) {
    for (let k = 0; k < CopyData.length; k++) {
      if (popular.includes(CopyData[k].isPopular)) {
        arr.push(CopyData[k]);
      }
    }
    CopyData = arr;
    arr = [];
  }
  if (stock.length > 0) {
    for (let k = 0; k < CopyData.length; k++) {
      if (CopyData[k].stock >= parseInt(stock[0]) && CopyData[k].stock <= parseInt(stock[1])) {
        arr.push(CopyData[k]);
      }
    }
    CopyData = arr;
    arr = [];
  }
  if (year.length > 0) {
    for (let k = 0; k < CopyData.length; k++) {
      if (CopyData[k].releaseYear >= parseInt(year[0]) && CopyData[k].releaseYear <= parseInt(year[1])) {
        arr.push(CopyData[k]);
      }
    }
    CopyData = arr;
    arr = [];
  }
  if (CopyData.length !== 0) {
    CopyData;
  }
  // CopyData = CopyData.length == 0 ? data : CopyData;
  const dataB = [...new Set(CopyData)];
  setLocalStorage('Data', dataB);
}
