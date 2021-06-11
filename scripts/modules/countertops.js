'use strict';

const counterSection = document.querySelector('.counter');

const counterTops = [
  {
    name: 'Luna Frost',
    price: 100,
    img: 'img/countertops/luna-frost.jpg',
  },
  {
    name: 'White Carrara',
    price: 100,
    img: 'img/countertops/white-carrara.jpg',
  },
  {
    name: 'Blanca Natira',
    price: 100,
    img: 'img/countertops/blanca-natira.jpg',
  },
  {
    name: 'Luna Frost',
    price: 100,
    img: 'img/countertops/luna-frost.jpg',
  },
  {
    name: 'Italian White Di Pesco',
    price: 100,
    img: 'img/countertops/italian-white-di-pesco.jpg',
  },
  {
    name: 'Bainbrook Grey',
    price: 100,
    img: 'img/countertops/bainbrook-grey.jpg',
  },
  {
    name: 'Typhoon Ice',
    price: 100,
    img: 'img/countertops/typhoon-ice.jpg',
  },
  {
    name: 'Classic Linen',
    price: 100,
    img: 'img/countertops/classic-linen.jpg',
  },
  {
    name: 'Kalahari Topaz',
    price: 100,
    img: 'img/countertops/kalahari-topaz.jpg',
  },
  {
    name: 'Sandy Topaz',
    price: 100,
    img: 'img/countertops/sandy-topaz.jpg',
  },
  {
    name: 'Crunch',
    price: 100,
    img: 'img/countertops/crunch.jpg',
  },
  {
    name: 'Bordeaux Juparana',
    price: 100,
    img: 'img/countertops/bordeaux-juparana.jpg',
  },
  {
    name: 'Winter Carnival',
    price: 100,
    img: 'img/countertops/winter-carnival.jpg',
  },
  {
    name: 'Mocha Fantastico',
    price: 100,
    img: 'img/countertops/mocha-fantastico.jpg',
  },
  {
    name: 'Cosmos Granite',
    price: 100,
    img: 'img/countertops/cosmos-granite.jpg',
  },
  {
    name: 'Bronzite',
    price: 100,
    img: 'img/countertops/bronzite.jpg',
  },
  {
    name: 'Ink Vesta',
    price: 100,
    img: 'img/countertops/ink-vesta.jpg',
  },
  {
    name: 'Black Alicante',
    price: 100,
    img: 'img/countertops/black-alicante.jpg',
  },
]; //end counterTops

const counterBtnRight = document.querySelector('.counter__button__right');
const counterBtnLeft = document.querySelector('.counter__button__left');

let current_counter = 1;

let counterRows = 3;

const displayCounter = function (items, wrapper, rows_per_page, page) {
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
        <img class="container__box__img " src="${paginatedItems[i].img}" alt="${paginatedItems[i].name}" />
        <div class="overlay"><i class="fa-li fa fa-check-circle"></i></div>
      </div>
    </div>
  `;
    counterSection.insertAdjacentHTML('afterbegin', html);
  }
}; //end displayCounter fn

counterBtnRight.addEventListener('click', () => {
  $(counterSection).children().hide();

  if (current_counter === 6) current_counter = 0;

  current_counter++;

  displayCounter(counterTops, counterSection, counterRows, current_counter);
  selectItems('counter');
});

counterBtnLeft.addEventListener('click', () => {
  $(counterSection).children().hide();

  if (current_counter === 0) current_counter = 6;

  displayCounter(counterTops, counterSection, counterRows, current_counter);
  selectItems('counter');

  current_counter--;
});

displayCounter(counterTops, counterSection, counterRows, current_counter);
