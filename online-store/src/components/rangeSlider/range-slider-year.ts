import { setLocalStorage } from '../localStorage/setLocalStorage';
import { IFilters } from '../types/interfaces';
import { changeFilter } from '../filter/changeFilter';

export function RangeSliderYear(
  SlideOne: string,
  SlideTwo: string,
  ValueOne: string,
  ValueTwo: string,
  Track: string,
  minValue: number,
  maxValue: number
) {
  const sliderOne = document.querySelector(SlideOne) as HTMLInputElement;
  const sliderTwo = document.querySelector<HTMLInputElement>(SlideTwo);
  const displayValOne = document.querySelector<HTMLSpanElement>(ValueOne);
  const displayValTwo = document.querySelector<HTMLSpanElement>(ValueTwo);
  const sliderTrack = document.querySelector<HTMLSpanElement>(Track);

  const yearEarlier = parseInt(JSON.parse(localStorage.getItem('yearEarlier') as string) as string);
  const yearLater = parseInt(JSON.parse(localStorage.getItem('yearLater') as string) as string);
  const minGap = 0;

  if (displayValOne && displayValTwo) {
    displayValOne.textContent = String(yearEarlier);
    displayValTwo.textContent = String(yearLater);
  }

  if (sliderOne) {
    sliderOne.min = String(0);
    sliderOne.max = String(maxValue - minValue);
    sliderOne.value = String(yearEarlier - minValue);
  }

  if (sliderTwo) {
    sliderTwo.min = String(0);
    sliderTwo.max = String(maxValue - minValue);
    sliderTwo.value = String(yearLater - minValue);
  }

  const sliderMaxValue: string = sliderOne.max;
  setValue();
  changeFilter();
  if (sliderTrack && sliderOne && sliderTwo) {
    sliderTrack.style.background = `linear-gradient(to right, 
      #dadae5 ${(parseInt(sliderOne.value) / parseInt(sliderMaxValue)) * 100}% , 
      #3264fe ${(parseInt(sliderOne.value) / parseInt(sliderMaxValue)) * 100}% , 
      #3264fe ${(parseInt(sliderTwo.value) / parseInt(sliderMaxValue)) * 100}%, 
      #dadae5 ${(parseInt(sliderTwo.value) / parseInt(sliderMaxValue)) * 100}%)`;
  }

  if (sliderOne) {
    sliderOne.addEventListener('input', () => {
      slideOne();
      if (displayValOne && displayValTwo) {
        setValue();
        changeFilter();
        setLocalStorage('yearEarlier', displayValOne.textContent);
        setLocalStorage('yearLater', displayValTwo.textContent);
      }
    });
  }
  if (sliderTwo) {
    sliderTwo.addEventListener('input', () => {
      slideTwo();
      if (displayValOne && displayValTwo) {
        setValue();
        changeFilter();
        setLocalStorage('yearEarlier', displayValOne.textContent);
        setLocalStorage('yearLater', displayValTwo.textContent);
      }
    });
  }

  function slideOne() {
    if (sliderOne && sliderTwo && displayValOne) {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = String(parseInt(sliderTwo.value) - minGap);
      }
      displayValOne.textContent = String(parseInt(sliderOne.value) + minValue);
    }
    fillColor();
  }
  function slideTwo() {
    if (sliderOne && sliderTwo && displayValTwo) {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = String(parseInt(sliderOne.value) + minGap);
      }
      displayValTwo.textContent = String(parseInt(sliderTwo.value) + minValue);
    }
    fillColor();
  }
  function fillColor() {
    if (sliderOne && sliderTwo && sliderTrack) {
      const percent1 = (parseInt(sliderOne.value) / parseInt(sliderMaxValue)) * 100;
      const percent2 = (parseInt(sliderTwo.value) / parseInt(sliderMaxValue)) * 100;
      sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    }
  }
  function setValue() {
    const filters = JSON.parse(localStorage.getItem('filters') as string) as IFilters;
    const year = filters.filterByRelease as string[];
    if (displayValOne && displayValTwo) {
      year[0] = String(displayValOne.textContent);
      year[1] = String(displayValTwo.textContent);
      setLocalStorage('filters', filters);
    }
  }
}
