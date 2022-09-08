import { paginationGarage } from '../pagination/paginationGarage';
import { renderCards } from '../renderGarage/renderGarage';
import { getData } from '../garageApi/getData';
import { postData } from '../garageApi/postData';
import { Car } from '../../interfaces/types';
import { getRandomColor, getRandomNumber } from '../../utils/utils';
import { stamp, model } from '../../constants/constants';

function getActivePage() {
  const activePage = JSON.parse(String(localStorage.getItem('activePage'))) as number;
  return activePage;
}
async function generateOneCard(name: string, color: string) {
  await postData('http://127.0.0.1:3000/garage', {
    name: name,
    color: color,
  });
  const data = (await getData('http://127.0.0.1:3000/garage')) as Car[];
  if (typeof data !== 'string') {
    const activePage = getActivePage();
    const renderData = paginationGarage(data, activePage);
    await renderCards(renderData, activePage);
  }
}

export function generateCars() {
  const countCar = 100;
  for (let i = 0; i < countCar; i += 1) {
    const stampNum = getRandomNumber(stamp.length - 1) <= 0 ? 0 : getRandomNumber(stamp.length - 1);
    const modelNum = getRandomNumber(model.length - 1) <= 0 ? 0 : getRandomNumber(model.length - 1);
    const name = `${stamp[stampNum]} ${model[modelNum]}`;
    const color = getRandomColor();
    generateOneCard(name, color).then(
      (result) => result,
      (error: Error) => console.log(error)
    );
  }
}
