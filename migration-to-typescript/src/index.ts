import App from './components/app/app';
import './global.css';

const app = new App();
app.start();

const asset = <HTMLSelectElement>document.querySelector('.select');
const sources = <HTMLDivElement>document.querySelector('.sources');
asset.addEventListener('change', () => {
  sources.innerHTML = '';
  const app = new App();
  app.start();
});
