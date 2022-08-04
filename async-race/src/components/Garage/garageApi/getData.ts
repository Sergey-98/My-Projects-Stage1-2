import { Car } from "../../interfaces/types";

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
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
