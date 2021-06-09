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

hardware.forEach((_, index) => {
  const html = `
    <div class="container__box">
      <h3 class="container__box__header">${hardware[index].name}</h3>
      <div class="img__wrap">
        <img class="container__box__img " src="${hardware[index].img}" alt="${hardware[index].name}" />
        <div class="overlay"><i class="fa-li fa fa-check-circle"></i></div>
      </div>
    </div>
  `;

  hardwareSection.insertAdjacentHTML('afterbegin', html);
});
