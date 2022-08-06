import { getData } from '../../garageApi/getData';
import { deleteData } from '../../garageApi/deleteData';
import { Car } from '../../../interfaces/types';
import { putData } from '../../garageApi/putData';
import { setLocalStorage } from '../../../localStorage/setLocalStorage';
import { paginationGarage } from '../../pagination/paginationGarage';
import { renderCards } from '../../renderGarage/renderGarage';
import { showPaginationButtons } from '../../renderGarage/renderGarage';
import { slicePageData } from '../../pagination/paginationGarage';

export async function removeCar(id: number) {
  await deleteData(id);
  const data = (await getData('http://127.0.0.1:3000/garage')) as Car[];
  if (data.length <= 7) {
    setLocalStorage('activePage', 1);
  }
  const activePage = JSON.parse(localStorage.getItem('activePage') as string);
  const renderData = paginationGarage(data, activePage);
  renderCards(renderData, activePage);
  showPaginationButtons();
  

  // car.forEach(async (elem) => {
  //   if (Number(elem.dataset.id) === id) {
  //     // deleteData(id);
  //     // cars?.removeChild(elem);
  //     // const data = (await getData('http://127.0.0.1:3000/garage')) as Car[];
  //     const activePage = JSON.parse(localStorage.getItem('activePage') as string);
  //     const renderData = paginationGarage(data, activePage);
  //     renderCards(renderData, activePage);
  //     showPaginationButtons(document.querySelector('.cars-in-garage') as HTMLDivElement, slicePageData(data, 7).length);
  //     if (data.length <= 7) {
  //       setLocalStorage('activePage', 1);
  //     }
  //   }
  // });

}

export async function selectCar(id: number) {
  setLocalStorage('idForUpdate', id);
  const [updateInput, updateColor] = ['.update-input', '.update-color'].map((item) =>
    document.querySelector<HTMLInputElement>(item)
  );
  const data = (await getData(`http://127.0.0.1:3000/garage/${id}`)) as Car;
  if (updateInput && updateColor) {
    updateInput.value = data.name;
    updateColor.value = data.color;
    //TODO: console.log(id);
    console.log(id);
  }
}

export async function update(id: number, updateInput: HTMLInputElement, updateColor: HTMLInputElement) {
  (await putData(`http://127.0.0.1:3000/garage/${id}`, {
    name: updateInput?.value as string,
    color: updateColor?.value as string,
  })) as Car;

  const dataCard = (await getData(`http://127.0.0.1:3000/garage/${id}`)) as Car;
  const carImg = document.querySelector<HTMLOrSVGImageElement>(`.car-img-${id}`);
  const carName = document.querySelector<HTMLSpanElement>(`.car-name-${id}`);
  const car = document.querySelectorAll<HTMLDivElement>('.car');

  car.forEach((elem) => {
    if (Number(elem.dataset.id) === id) {
      if (carImg && carName) {
        //TODO: console.log(dataCard);
        console.log(dataCard);
        carImg.style.fill = dataCard.color;
        carName.innerText = dataCard.name;
      }
    }
    if (updateInput && updateColor) {
      updateInput.value = '';
      updateColor.value = '#000000';
    }
  });

  const updateButton = document.querySelector<HTMLButtonElement>('.update-button');
  updateButton?.removeEventListener('click', () => {
    if (carImg && carName && updateInput && updateColor) {
      update(id, updateInput, updateColor);
    }
  });

  const [select] = ['.select'].map((elem) => document.querySelectorAll<HTMLButtonElement>(elem));

  // select.forEach((elem) => {
  //   elem?.removeEventListener('click', () => {
  //     selectCar(Number(elem.dataset.id));
  //   });
  // });
}
