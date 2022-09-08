import { Winners } from '../../interfaces/types';
import { createWinners } from '../createComponents/createWinnersTable/createWinners';
import { renderWinnerRow } from '../renderWinnerRow/renderWinnerRow';
import { Car } from '../../interfaces/types';
import { getData } from '../../Garage/garageApi/getData';
import { elemOnPage } from '../../constants/constants';

async function findCar(id: number): Promise<string[]> {
  const cars = (await getData('http://127.0.0.1:3000/garage')) as Car[];
  const arr: string[] = [];
  cars.forEach((elem) => {
    if (elem.id === id) {
      arr.push(elem.color);
      arr.push(elem.name);
    }
  });
  return arr;
}

export function renderWinners(data: Winners[]) {
  for (let i = 0; i < data.length; i += 1) {
    createWinners(data.length, i / elemOnPage);
  }
  data.forEach(async (elem, id) => {
    const arr = await findCar(elem.id);
    renderWinnerRow(elem.id, id + 1, arr[0], arr[1], elem.wins, elem.time);
  });
}
