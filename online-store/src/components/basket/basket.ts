import './basket.css';
import { setLocalStorage } from '../localStorage/setLocalStorage';

export function basket() {
  const cards = document.querySelectorAll<HTMLDivElement>('.card_item');
  const count = document.querySelector<HTMLDivElement>('.basket-count');
  const basket = JSON.parse(localStorage.getItem('inBasket') as string) as string[];

  if (!basket) {
    setLocalStorage('inBasket', []);
  }
  showBasket();
  cards.forEach((card): void => {
    card.addEventListener('click', (): void => {
      if (!card.classList.contains('in-basket')) {
        if (count) {
          if (Number(count.textContent) < 20) {
            count.textContent = String(Number(count.textContent) + 1);
            card.classList.add('in-basket');
            const name = card.querySelector<HTMLDivElement>('.card-title');
            if (name) {
              addToBasket(name.textContent as string);
            }
          } else {
            alert('Извините, все слоты заняты');
          }
        }
      } else {
        if (count) {
          count.textContent = String(Number(count.textContent) - 1);
          card.classList.remove('in-basket');
          const name = card.querySelector<HTMLDivElement>('.card-title');
          if (name) {
            addToBasket(name.textContent as string);
          }
        }
      }
    });
  });
  function addToBasket(name: string) {
    const basket = JSON.parse(localStorage.getItem('inBasket') as string) as string[];
    if (basket && basket.includes(name)) {
      const index: number = basket.indexOf(name);
      basket.splice(index, 1);
      setLocalStorage('inBasket', basket);
    } else {
      basket.push(name);
      setLocalStorage('inBasket', basket);
    }
  }
  function showBasket() {
    const basket = JSON.parse(localStorage.getItem('inBasket') as string) as string[];
    if (basket.length > 0) {
      const cards = document.querySelectorAll<HTMLDivElement>('.card_item');
      cards.forEach((card): void => {
        for (let k = 0; k < basket.length; k++) {
          const name = card.querySelector<HTMLDivElement>('.card-title');
          if (name) {
            if (basket.includes(String(name.textContent))) {
              card.classList.add('in-basket');
            }
          }
        }
      });
      if (count) {
        count.textContent = String(basket.length);
      }
    }
  }
}
