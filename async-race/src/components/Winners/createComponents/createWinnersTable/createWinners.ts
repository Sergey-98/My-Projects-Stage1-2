import './winners.css';

export function createWinners(totalNumber: number, page: number) {
  const main = document.querySelector<HTMLElement>('main');
  const winners = document.createElement('div');
  winners.classList.add('winners');
  winners.innerHTML = `
    <div class = "title-winners">
      <span class = "title">Winners</span>
      <span class = "total-number">${totalNumber}</span>
    </div>
    <div class = "title-page">
      <span class = "subtitle">Page</span>
      <span class = "page-number">#${page}</span>
    </div>
    <div class = "winners-table">
      <div class = "table-row">
        <div class = "col col-1 w-number">Number</div>
        <div class = "col col-2 w-car">Car</div>
        <div class = "col col-3 w-name">Name</div>
        <div class = "col col-4 w-wins">Wins</div>
        <div class = "col col-5 w-Best">Best time (seconds)</div>
      </div>
    </div>
    <div class = "pagination-buttons">
      <button class = "prev-page"><<< Prev</button>
      <button class = "next-page">Next >>> </button>
    </div>
  `;
  main?.append(winners);
}
