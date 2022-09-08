import './global.css';
import { renderAppGarage } from './components/Garage/app/appGarage';
import { setLocalStorage } from './components/localStorage/setLocalStorage';

function initState() {
  const page = JSON.parse(String(localStorage.getItem('activePage'))) as number;
  if (page) {
    setLocalStorage('activePage', 1);
  }
}
initState();
renderAppGarage().then(
  (result) => result,
  (error: Error) => console.log(error)
);
