import { IFilters } from '../types/interfaces';

export function activeButtons() {
  const filters = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
  const buttons = document.querySelectorAll<HTMLButtonElement>('button');
  const brend: string[] = filters.filterByBrend;
  const gender: string[] = filters.filterByGender;
  const material: string[] = filters.filterByMaterial;
  const color: string[] = filters.filterByColor;

  changeActive(brend);
  changeActive(gender);
  changeActive(material);
  changeActive(color);

  function changeActive(name: string[]): void {
    for (let i = 0; i < name.length; i++) {
      buttons.forEach((elem): void => {
        if (elem) {
          if (name[i].toLowerCase() === elem.textContent?.toLowerCase()) {
            elem.classList.add('active');
          }
        }
      });
    }
  }
}
