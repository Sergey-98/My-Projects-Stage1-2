import { Car } from '../interfaces/types';

export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * (max + 1));
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const slicePageData = (arr: Car[], size: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    res.push(chunk);
  }
  return res;
};
