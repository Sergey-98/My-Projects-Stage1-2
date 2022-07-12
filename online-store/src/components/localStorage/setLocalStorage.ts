import { IFilters } from '../types/interfaces';

export function setLocalStorage(key: string, value: IFilters): void {
  localStorage.setItem(key, JSON.stringify(value));
}
