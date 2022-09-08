import { Car } from '../../interfaces/types';
import { url as constUrl } from '../../constants/constants';

export async function getData(url: string): Promise<Car | Car[] | string> {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = (await response.json()) as Car[];
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      throw new Error(`Error! status: ${error.message}`);
    }
  }
  return '';
}

export async function getCar(id: number) {
  return (await getData(`${constUrl}garage/${id}`)) as Car;
}
