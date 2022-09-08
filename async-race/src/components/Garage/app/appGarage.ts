import { mainButtons } from '../mainButtons/mainButtons';
import { carSettings } from '../selectSettings/carSettings';
import { renderGarage } from '../renderGarage/renderGarage';
import { createFooter } from '../createComponents/createFooter/createFooter';
import { getData } from '../garageApi/getData';
import { Car } from '../../interfaces/types';

export async function renderAppGarage(): Promise<void> {
  const data = (await getData('http://127.0.0.1:3000/garage')) as Car[];

  mainButtons();
  carSettings();
  if (typeof data !== 'string') {
    await renderGarage(data);
  }
  createFooter();
}
