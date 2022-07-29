import './cars.css';

export function createCar(name: string, model: string, id: number) {
  const carsInGarage = document.querySelector<HTMLDivElement>('.cars-in-garage');
  const car = document.createElement('div');
  car.classList.add('car');
  car.innerHTML = `
    <div class = "head-card">
      <button class = "select select-${id}">SELECT</button>
      <button class = "remove remove-${id}">REMOVE</button>
      <span class = "name car-name-${id}">${name} ${model}</span>
    </div>
    <div class = "control-buttons">
      <button class = "start start-${id} active">A</button>
      <button class = "stop stop-${id}">B</button>
    </div>
    <svg class = "car-img car-img-${id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920">
      <style>
          .st0{fill:#fff}.st1{fill:#4B0082;stroke:#231f20;stroke-width:50;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}
      </style>
      <path class="st0" d="M1345 1019.8c70.6 0 127.8 57.2 127.8 127.8s-57.2 127.8-127.8 127.8-127.8-57.2-127.8-127.8 57.2-127.8 127.8-127.8zm-969 127.8c0 70.6 57.2 127.8 127.8 127.8s127.8-57.2 127.8-127.8-57.2-127.8-127.8-127.8S376 1077 376 1147.6z" id="Layer_11"/>
      <path class="st0" d="M842 1147.6H631.6c0-70.6-57.2-127.8-127.8-127.8S376 1077 376 1147.6c-97.1 0-159-64.1-159-142.4v-76.6c0-36.2 29.6-65.8 65.7-65.8h119.6C477 731.1 575.4 644.6 715.1 644.6h232.8c44.3 0 87.5 12.7 124.7 36.4 12.3 7.9 24.9 15.5 37.7 22.4l224.1 121.1 252.8 38.3c55.2 0 101.4 38.6 113 90.4h-134.7v89h135.1c-9.8 60.4-48.6 105.4-113.4 105.4h-114.3c0-70.6-57.2-127.8-127.8-127.8s-127.8 57.2-127.8 127.8H842zm324.9-273.9c24.4 0 33-31.3 11.8-43L997.5 730.5c-13.5-7.5-28.8-11.4-44.3-11.4H711.6c-9.2 0-21.6 2.4-35.6 6.3-62 17.5-115.8 55.4-152.8 106.6L501 862.7c-3.3 4.6 0 11.1 5.7 11.1h660.2z" id="Layer_12"/>
      <path class="st0" d="M1178.7 830.8c21.2 11.7 12.6 43-11.8 43H842V719.1h111.2c15.6 0 30.8 3.9 44.3 11.4l181.2 100.3zM711.6 719.1c-9.2 0-21.6 2.4-35.6 6.3-62 17.5-115.8 55.4-152.8 106.6L501 862.7c-3.3 4.6 0 11.1 5.7 11.1H842V719.1H711.6z" id="Layer_13"/>
      <path class="st0" d="M1703.1 978.7v31.8c0 10.9-.8 21.6-2.5 31.7h-135.1v-89h134.7c1.9 8.2 2.9 16.8 2.9 25.5z" id="Layer_14"/>
      <g id="STROKES">
          <path class="st1" d="M1472.8 1147.6h114.3c64.8 0 103.5-44.9 113.4-105.4 1.7-10.2 2.5-20.8 2.5-31.7v-31.8c0-8.8-1-17.3-2.8-25.5-11.6-51.7-57.8-90.4-113-90.4l-252.8-38.3-224.1-121.1c-12.9-7-25.4-14.6-37.7-22.4-37.1-23.7-80.4-36.4-124.7-36.4H715.1c-139.7 0-238.1 86.5-312.8 218.2H282.7c-36.2 0-65.7 29.6-65.7 65.8v76.6c0 78.3 61.9 142.4 159 142.4"/>
          <path class="st1" d="M631.6 1147.6h585.6"/>
          <path class="st1" d="M1472.8 1147.6c0 70.6-57.2 127.8-127.8 127.8s-127.8-57.2-127.8-127.8 57.2-127.8 127.8-127.8 127.8 57.2 127.8 127.8z"/>
          <circle class="st1" cx="503.8" cy="1147.6" r="127.8"/>
          <path class="st1" d="M842 719.1H711.6c-9.2 0-21.6 2.4-35.6 6.3-62 17.5-115.8 55.4-152.8 106.6L501 862.7c-3.3 4.6 0 11.1 5.7 11.1h660.2c24.4 0 33-31.3 11.8-43L997.5 730.5c-13.5-7.5-28.8-11.4-44.3-11.4H842z"/>
          <path class="st1" d="M842 719.1v154.6"/>
          <path class="st1" d="M842 963.1v184.5"/>
          <path class="st1" d="M1700.6 1042.2h-135.1v-89h134.7"/>
      </g>
  </svg>
  `;
  carsInGarage?.append(car);
}
