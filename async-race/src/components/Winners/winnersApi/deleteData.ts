export async function deleteWinnerData(id: number) {
  try {
    const response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Error! No data for delete: ${response.status}`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      return error.message;
    }
  }
}
