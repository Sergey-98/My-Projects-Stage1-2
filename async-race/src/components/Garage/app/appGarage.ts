import { mainButtons } from '../mainButtons/mainButtons';
import { carSettings } from '../selectSettings/carSettings';
import { renderGarage } from '../renderGarage/renderGarage';
import { createFooter } from '../createComponents/createFooter/createFooter';
// import { Observable } from '../observable/observable';
import { getData } from '../garageApi/getData';
import { Car } from '../../interfaces/types';

export async function appGarage(): Promise<void> {
  const data = await getData('http://127.0.0.1:3000/garage') as Car[];

  mainButtons();
  carSettings();
  if (typeof data !== 'string') {
    renderGarage(data);
  }
  createFooter();
}
