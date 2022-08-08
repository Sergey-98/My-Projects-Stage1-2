import { Car } from '../../interfaces/types';

export async function deleteData(id: number) {
  try {
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Error! No data for delete: ${response.status}`);
    }
    const result = (await response.json()) as Car[];
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      return error.message;
    }
  }
}
