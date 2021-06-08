'use strict';

const countertops = [
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
]; //end countertops

const html = `
  <div class="container__box">
    <h3 class="container__box__header">${countertops.name}</h3>
    <div class="img__wrap">
      <img class="container__box__img" src="${countertops.img}" alt="${countertops.name}" />
      <div class="overlay"><i class="fa-li fa fa-check-circle"></i></div>
    </div>
  </div>
`;
