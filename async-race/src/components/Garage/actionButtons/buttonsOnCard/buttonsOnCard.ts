import { getData } from "../../garageApi/getData";
import { deleteData } from "../../garageApi/deleteData";
import { Car } from "../../../interfaces/types";
import { putData } from "../../garageApi/putData";

export function activateButtonsOnCard() {
  const [select, remove] = ['.select', '.remove'].map((elem) => document.querySelectorAll<HTMLButtonElement>(elem));

  select.forEach((elem) => {
    elem?.addEventListener('click', () => {
      selectCar(Number(elem.dataset.id));
    });
  })

  remove.forEach((elem) => {
    elem?.addEventListener('click', () => {
      removeCar(Number(elem.dataset.id));
    });
  });
}

async function removeCar(id: number) {
  const data = await getData('http://127.0.0.1:3000/garage') as Car[];
  const cars = document.querySelector<HTMLDivElement>('.cars-in-garage');
  const car = document.querySelectorAll<HTMLDivElement>('.car');
  const count = document.querySelector<HTMLDivElement>('.total-number');

  car.forEach((elem) => {
    if (Number(elem.dataset.id) === id) {
      deleteData(id);
      cars?.removeChild(elem);
    }
  })
  if (count) {
    count.textContent = String(data.length-1);
  }
}

async function selectCar(id: number) {
  const [updateInput, updateColor] = ['.update-input', '.update-color'].map((item) => document.querySelector<HTMLInputElement>(item));
  const updateButton = document.querySelector<HTMLButtonElement>('.update-button');
  const carImg = document.querySelector<HTMLOrSVGImageElement>(`.car-img-${id}`);
  const carName = document.querySelector<HTMLSpanElement>(`.car-name-${id}`);
  const data = await getData(`http://127.0.0.1:3000/garage/${id}`) as Car;
  if (updateInput && updateColor) {
    updateInput.value = data.name;
    updateColor.value = data.color;
  }
  updateButton?.addEventListener('click', async () => {
    await putData(
      `http://127.0.0.1:3000/garage/${id}`, 
      {
        name: updateInput?.value as string,
        color: updateColor?.value as string
      }
    );
    
    const dataCard = await getData(`http://127.0.0.1:3000/garage/${id}`) as Car;
    
    if (carImg && carName) {
      carImg.style.fill = dataCard.color;
      carName.innerText = dataCard.name;
    }
    
    if (updateInput && updateColor) {
      updateInput.value = '';
      updateColor.value = '#000000';
    }    
  });
}