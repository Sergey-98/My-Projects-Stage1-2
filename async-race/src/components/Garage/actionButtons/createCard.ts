import { getData } from '../garageApi/getData';
import { postData } from '../garageApi/postData';
import { Car } from '../../interfaces/types';
import { renderCards } from '../renderGarage/renderGarage';
import { paginationGarage } from '../pagination/paginationGarage';
import { showPaginationButtons } from '../renderGarage/renderGarage';
import { url, colorBlack } from '../../constants/constants';

function getActivePage() {
  const activePage = JSON.parse(String(localStorage.getItem('activePage'))) as number;
  return activePage;
}

const createOneCard = async () => {
  const [createInput, createColor] = ['.create-input', '.create-color'].map((item) => {
    return document.querySelector<HTMLInputElement>(item);
  });
  await postData(`${url}garage`, {
    name: createInput?.value as string,
    color: createColor?.value as string,
  });
  const data = (await getData(`${url}garage`)) as Car[];
  if (typeof data !== 'string') {
    const activePage = getActivePage();
    const renderData = paginationGarage(data, activePage);
    await renderCards(renderData, activePage);
    showPaginationButtons();
  }
  if (createInput && createColor) {
    createInput.value = '';
    createColor.value = `${colorBlack}`;
  }
};

export function createCard() {
  const createButton = document.querySelector<HTMLButtonElement>('.create-button');
  createButton?.addEventListener('click', createOneCard);
}
