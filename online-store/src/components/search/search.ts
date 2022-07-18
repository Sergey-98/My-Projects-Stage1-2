import './search.css';
import { changeFilter } from '../filter/changeFilter';
import { setLocalStorage } from '../localStorage/setLocalStorage';

export function search() {
  const searchData = JSON.parse(localStorage.getItem('searchItem') as string) as string;
  const input = document.querySelector<HTMLInputElement>('.input');
  const search = document.querySelector<HTMLDivElement>('.search-icon');
  const close = document.querySelector<HTMLDivElement>('.close-icon');
  if (input && search && close) {
    setFocus();
    if (searchData) {
      input.value = searchData;
      changeFilter();
      close.classList.remove('hide');
    }
    search.addEventListener('click', (): void => {
      setLocalStorage('searchItem', input.value);
      changeFilter();
    });
    document.addEventListener('keydown', (event: KeyboardEvent): void => {
      if (event.code == 'Enter') {
        setLocalStorage('searchItem', input.value);
        changeFilter();
      }
    });
    input.addEventListener('input', (): void => {
      if (input.value.length > 0) {
        close.classList.remove('hide');
      } else if (input.value.length == 0) {
        close.classList.add('hide');
      }
      setLocalStorage('searchItem', input.value);
      changeFilter();
    });

    close.addEventListener('click', (): void => {
      input.value = '';
      setLocalStorage('searchItem', input.value);
      input.placeholder = 'Search';
      close.classList.add('hide');
      changeFilter();
    });
  }
  function setFocus(): void {
    if (input) {
      input.focus();
    }
  }
}
