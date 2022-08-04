import { Car } from "../../interfaces/types";

export function paginationGarage(data: Car[], page: number = 1) {
  const elemOnPage = 7;
  return slicePageData(data, elemOnPage)[page - 1];
}

export function slicePageData(arr: Car[], size: number) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
      const chunk = arr.slice(i, i + size);
      res.push(chunk);
  }
  return res;
}