import { IFilters } from '../types/interfaces';

export function activateButtons() {
  const filters = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
  const buttons = document.querySelectorAll<HTMLButtonElement>('button');
  const brend = filters.filterByBrend;
  const gender = filters.filterByGender;
  const material = filters.filterByMaterial;
  const color = filters.filterByColor;

  changeActive(brend);
  changeActive(gender);
  changeActive(material);
  changeActive(color);

  function changeActive(name: string[]): void {
    name.forEach((item) => {
      buttons.forEach((elem): void => {
        if (elem && item.toLowerCase() === elem.textContent?.toLowerCase()) {
          elem.classList.add('active');
        }
      });
    });
  }
}
