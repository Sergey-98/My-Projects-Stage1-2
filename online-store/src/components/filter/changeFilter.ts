import { drawCardList } from '../createCard/cardBlock';
import data from '../../DateBase.json';
import { IData } from '../../components/types/interfaces';
import { IFilters } from '../types/interfaces';

export function changeDataFilter() {
  const filtersOptions = JSON.parse(localStorage.getItem('filters')) as IFilters;
  let newData: IData[] = [];

  const options: string[] = Object.keys(filtersOptions);
  const arr = [];

  for (let i = 0; i < options.length; i++) {
    const item = options[i];
    if (filtersOptions[item].length > 0) {
      arr.push(filtersOptions[item]);
    }
  }
  console.log('arr', arr);

  for (let k = 0; k < data.length; k++) {
    if (!arr[0]) {
      k = data.length;
    } else {
      if (arr[0].includes(data[k].brand)) {
        console.log('yes');
        newData.push(data[k]);
      }
    }
  }
  newData = newData.length == 0 ? data : newData;
  // const dateForBuild = new Set();
  console.log(newData);
  drawCardList(newData);
}
