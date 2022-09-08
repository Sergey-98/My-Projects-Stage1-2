import { Car } from '../../interfaces/types';
import { elemOnPage } from '../../constants/constants';
import { slicePageData } from '../../utils/utils';

export function paginationGarage(data: Car[], page: number) {
  const result = slicePageData(data, elemOnPage)[page - 1];
  return result;
}
