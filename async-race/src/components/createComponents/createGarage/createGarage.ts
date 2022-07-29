import './garage.css';

export function createGarage(totalNumber: number, page: number) {
  const main = document.querySelector<HTMLElement>('main');
  const garage = document.createElement('div');
  garage.classList.add('garage');
  garage.innerHTML = `
    <div class = "title-garage">
      <span class = "title">Garage</span>
      <span class = "total-number">(${totalNumber})</span>
    </div>
    <div class = "title-page">
      <span class = "subtitle">Page</span>
      <span class = "page-number">#${page}</span>
    </div>
    <div class = "cars-in-garage"></div>
  `;
  main?.append(garage);
}
