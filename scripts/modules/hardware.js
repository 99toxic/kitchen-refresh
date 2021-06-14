'use strict';

const hardwareSection = document.querySelector('.hardware');

const hardware = [
  {
    name: 'Rustic',
    price: 10,
    img: 'img/hardware/rustic-vintage-nickel.jpg',
  },
  {
    name: 'Marvelous',
    price: 15,
    img: 'img/hardware/marvelous-slate.jpg',
  },
  {
    name: 'Glacier',
    price: 10,
    img: 'img/hardware/glacier-oil-rubbed-bronze.jpg',
  },
  {
    name: 'Steam',
    price: 10,
    img: 'img/hardware/stream-brushed-tin.jpg',
  },
  {
    name: 'Prairie',
    price: 10,
    img: 'img/hardware/praire-oil-rubbed-bronze.jpg',
  },
  {
    name: 'Rain Dance',
    price: 10,
    img: 'img/hardware/rain-dance-verona-bronze.jpg',
  },
  {
    name: 'Open Range',
    price: 10,
    img: 'img/hardware/open-range-oil-rubbed-bronze.jpg',
  },
  {
    name: 'Bar Pulls',
    price: 10,
    img: 'img/hardware/bar-pull-polished-nickel.jpg',
  },
  {
    name: 'Sunset',
    price: 10,
    img: 'img/hardware/sunset.jpg',
  },
  {
    name: 'Clear Creek',
    price: 10,
    img: 'img/hardware/clear-creek-satin-nickel.jpg',
  },
  {
    name: 'Bliss',
    price: 10,
    img: 'img/hardware/bliss-satin-nickel.jpg',
  },
  {
    name: 'Dusty Trail',
    price: 10,
    img: 'img/hardware/dusty-trail-gun-metal.jpg',
  },
  {
    name: 'Cup Pulls',
    price: 5,
    img: 'img/hardware/cup.jpg',
  },
  {
    name: 'Domed Knobs',
    price: 0,
    img: 'img/hardware/domed-knobs.jpg',
  },
  {
    name: 'Classic Knobs',
    price: 0,
    img: 'img/hardware/classic-knobs.jpg',
  },
]; //end hardware

const hardwareBtnRight = document.querySelector('.hardware__button__right');
const hardwareBtnLeft = document.querySelector('.hardware__button__left');

let current_hardware = 1;

let hardwareRows = 3;

const displayHardware = function (items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = '';
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;

  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    const html = `
    <div class="container__box pagination">
      <h3 class="container__box__header">${paginatedItems[i].name}</h3>
      <div class="img__wrap">
        <img class="container__box__img hardwared" name="${paginatedItems[i].price}" src="${paginatedItems[i].img}" alt="${paginatedItems[i].name}" />
        <div class="overlay"><i class="fa-li fa fa-check-circle"></i></div>
      </div>
    </div>
  `;
    hardwareSection.insertAdjacentHTML('afterbegin', html);
  }
}; //end displayHardware fn

hardwareBtnRight.addEventListener('click', () => {
  $(hardwareSection).children().hide();

  if (current_hardware === 3) current_hardware = 0;

  current_hardware++;

  displayHardware(hardware, hardwareSection, hardwareRows, current_hardware);
  selectItems('hardware');
});

hardwareBtnLeft.addEventListener('click', () => {
  $(hardwareSection).children().hide();

  if (current_hardware === 0) current_hardware = 3;

  displayHardware(hardware, hardwareSection, hardwareRows, current_hardware);
  selectItems('hardware');

  current_hardware--;
});

displayHardware(hardware, hardwareSection, hardwareRows, current_hardware);
