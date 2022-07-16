import { setLocalStorage } from '../localStorage/setLocalStorage';
// import data from '../../DateBase.json';
import { IData } from '../../components/types/interfaces';

export function sorting() {
  const sortingData = JSON.parse(localStorage.getItem('Data') as string) as IData;
  const sortList = document.querySelector<HTMLInputElement>('.sorting-list');
  if (sortingData) {
    console.log(sortingData);
  }
  sortList?.addEventListener('change', () => {
    switch (sortList.value) {
      case '':
    }
  });
}
