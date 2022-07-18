import { setLocalStorage } from '../localStorage/setLocalStorage';
import { drawCardList } from '../createCard/cardBlock';
import data from '../../DateBase.json';
import { changeFilter } from '../filter/changeFilter';
import { IData } from '../../components/types/interfaces';

export function sorting() {
  let sortingData = JSON.parse(localStorage.getItem('Data') as string) as IData[];
  const sortList = document.querySelector<HTMLInputElement>('.sorting-list');
  const Method = sortList?.value;
  if (!sortingData) {
    sortingData = data;
  }
  function SortArrayAZ(x: IData, y: IData) {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  }
  function SortArrayZA(x: IData, y: IData) {
    if (x.name > y.name) {
      return -1;
    }
    if (x.name < y.name) {
      return 1;
    }
    return 0;
  }
  if (sortList) {
    switch (Method) {
      case 'By name, from A to Z':
        if (sortingData.length > 0) {
          sortingData.sort(SortArrayAZ);
          setLocalStorage('Data', sortingData);
          setLocalStorage('Method', sortList.value);
          drawCardList(sortingData);
        } else {
          changeFilter();
        }
        break;
      case 'By name, from Z to A':
        if (sortingData.length > 0) {
          sortingData.sort(SortArrayZA);
          setLocalStorage('Data', sortingData);
          setLocalStorage('Method', sortList.value);
          drawCardList(sortingData);
        } else {
          changeFilter();
        }
        break;
      case 'By year, ascending':
        sortingData = JSON.parse(localStorage.getItem('Data') as string) as IData[];
        if (sortingData.length > 0) {
          sortingData.sort((a, b) => a.releaseYear - b.releaseYear);
          setLocalStorage('Data', sortingData);
          setLocalStorage('Method', sortList.value);
          drawCardList(sortingData);
        } else {
          changeFilter();
        }
        break;
      case 'By year, descending':
        if (sortingData.length > 0) {
          sortingData.sort((a, b) => b.releaseYear - a.releaseYear);
          setLocalStorage('Data', sortingData);
          setLocalStorage('Method', sortList.value);
          drawCardList(sortingData);
        } else {
          changeFilter();
        }
        break;
      case 'By stock, ascending':
        if (sortingData.length > 0) {
          sortingData.sort((a, b) => a.stock - b.stock);
          setLocalStorage('Data', sortingData);
          setLocalStorage('Method', sortList.value);
          drawCardList(sortingData);
        } else {
          changeFilter();
        }
        break;
      case 'By stock, descending':
        if (sortingData.length > 0) {
          sortingData.sort((a, b) => b.stock - a.stock);
          setLocalStorage('Data', sortingData);
          setLocalStorage('Method', sortList.value);
          drawCardList(sortingData);
        } else {
          changeFilter();
        }
        break;
    }
  }
}
