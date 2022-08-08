import './global.css';
import { appGarage } from './components/Garage/app/appGarage';
import { setLocalStorage } from './components/localStorage/setLocalStorage';
const page = JSON.parse(localStorage.getItem('activePage') as string) as number;
if (page) {
  setLocalStorage('activePage', 1);
}
appGarage().then(
  (result) => result,
  (error: Error) => console.log(error)
);
