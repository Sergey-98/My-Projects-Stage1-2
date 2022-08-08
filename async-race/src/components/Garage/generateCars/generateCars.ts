import { paginationGarage } from '../pagination/paginationGarage';
import { renderCards } from '../renderGarage/renderGarage';
import { getData } from '../garageApi/getData';
import { postData } from '../garageApi/postData';
import { Car } from '../../interfaces/types';

const stamp: string[] = [
  'Mersedes',
  'Lada',
  'Skoda',
  'Mitsubishi',
  'Renault',
  'Tesla',
  'Acura',
  'Daewoo',
  'Dodge',
  'Ford',
  'Volvo',
  'Subaru',
  'Volkswagen',
  'Suzuki',
  'Opel',
  'Citroen',
  'Honda',
];

const model: string[] = [
  'amg',
  'benz',
  'Granta',
  'Priora',
  'Largus',
  'Vesta',
  'Lancer',
  'Pajero',
  'Outlander',
  'Logan',
  'Sandero',
  'Model S',
  'Model 3',
  'Zdx',
  'Mdz',
  'Nexia',
  'Charger',
  'Focus',
  'S60',
  'V60',
  'Octavia',
  'Fabia',
  'Astra',
  'Polo',
  'Jimny',
];

function randomNumber(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

async function generateOneCard(name: string, color: string) {
  await postData('http://127.0.0.1:3000/garage', {
    name: name,
    color: color,
  });
  const data = (await getData('http://127.0.0.1:3000/garage')) as Car[];
  if (typeof data !== 'string') {
    const activePage = JSON.parse(localStorage.getItem('activePage') as string) as number;
    const renderData = paginationGarage(data, activePage);
    await renderCards(renderData, activePage);
  }
}

export function generateCars() {
  const countCar = 100;
  for (let i = 0; i < countCar; i += 1) {
    const stampNum = randomNumber(stamp.length - 1) <= 0 ? 0 : randomNumber(stamp.length - 1);
    const modelNum = randomNumber(model.length - 1) <= 0 ? 0 : randomNumber(model.length - 1);
    const name = `${stamp[stampNum]} ${model[modelNum]}`;
    const color = getRandomColor();
    generateOneCard(name, color).then(
      (result) => result,
      (error: Error) => console.log(error)
    );
  }
}
