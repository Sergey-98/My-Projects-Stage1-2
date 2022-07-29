import { mainButtons } from '../mainButtons/mainButtons';
import { carSettings } from '../selectSettings/carSettings';
import { garage } from '../garage/garage';
import { createFooter } from '../createComponents/createFooter/createFooter';

export function app() {
  mainButtons();
  carSettings();
  garage();
  createFooter();
}
