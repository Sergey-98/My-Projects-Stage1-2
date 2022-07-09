import App from './components/app/app';
import { AppView } from './components/view/appView';
import AppController from './components/controller/controller';
import './global.css';

const app = new App();
app.start();

const asset = <HTMLSelectElement>document.querySelector('.select');
const sources = <HTMLDivElement>document.querySelector('.sources');
asset.addEventListener('change', () => {
  sources.innerHTML = '';
  new AppController().getSources((data) => {
    if (data) {
      new AppView().drawSources(data);
    }
  });
});
