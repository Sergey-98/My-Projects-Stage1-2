import { Winners } from '../../interfaces/types';

export async function getData(url: string): Promise<Winners | Winners[] | string> {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = (await response.json()) as Winners[];
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      return error.message;
    }
  }
  return '';
}
