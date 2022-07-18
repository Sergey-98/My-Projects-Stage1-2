import './search.css';
import { changeFilter } from '../filter/changeFilter';
import { setLocalStorage } from '../localStorage/setLocalStorage';

export function search() {
  const input = document.querySelector<HTMLInputElement>('.input');
  const search = document.querySelector<HTMLDivElement>('.search-icon');
  const close = document.querySelector<HTMLDivElement>('.close-icon');

  if (input && search && close) {
    setFocus();
    // search.addEventListener('click', function (event) {
    //   // if (event.target.classList.contains('search-icon')) {

    //   // }
    // });
    input.addEventListener('input', (): void => {
      if (input.value.length > 0) {
        close.classList.remove('hide');
      } else if (input.value.length == 0) {
        close.classList.add('hide');
      }
    });

    close.addEventListener('click', (): void => {
      input.value = '';
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
