import { Car } from '../../interfaces/types';

export function slicePageData(arr: Car[], size: number) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    res.push(chunk);
  }
  return res;
}

export function paginationGarage(data: Car[], page: number) {
  const elemOnPage = 7;
  const result = slicePageData(data, elemOnPage)[page - 1];
  return result;
}
