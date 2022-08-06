import { getData } from "../garageApi/getData";
import { postData } from '../garageApi/postData';
import { slicePageData } from "../pagination/paginationGarage";
import { Car } from "../../interfaces/types";
import { renderCards } from "../renderGarage/renderGarage";
import { paginationGarage } from "../pagination/paginationGarage";
import { showPaginationButtons } from "../renderGarage/renderGarage";

export function createCard() {
  const [createInput, createColor] = ['.create-input', '.create-color'].map((item) => document.querySelector<HTMLInputElement>(item));
  const createButton = document.querySelector<HTMLButtonElement>('.create-button');

  createButton?.addEventListener("click", async () => {
    await postData(
      'http://127.0.0.1:3000/garage', 
      {
        name: createInput?.value as string,
        color: createColor?.value as string
      }
    );
    // const count = document.querySelector<HTMLDivElement>('.total-number');
    // if (count) {
    //   count.textContent = String(Number(count.textContent as string) + 1);
    // }
    const data = await getData('http://127.0.0.1:3000/garage') as Car[];
    if (typeof data !== 'string') {
      const activePage = JSON.parse(localStorage.getItem('activePage') as string);
      const renderData = paginationGarage(data, activePage);
      renderCards(renderData, activePage);
      showPaginationButtons();
      // const elem = data[data.length - 1];
      // createCar(elem.name, elem.id, elem.color);
    }
    if (createInput && createColor) {
      createInput.value = '';
      createColor.value = '#000000';
    }
  });
}