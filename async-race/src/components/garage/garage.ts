import { createGarage } from '../createComponents/createGarage/createGarage';
import { createCar } from '../createComponents/createGarage/createCars/createCars';

export function garage() {
  createGarage(0, 1);
  createCar('Skoda', 'Octavia', 1);
}
