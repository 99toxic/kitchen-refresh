'use strict';

const counterSection = document.querySelector('.counter');

const counterTops = [
  {
    name: 'Granite',
    price: 100,
    descrip: 'Highly heat and Scratch Resistant, Unaffected by Harsh Chemicals.',
    img: 'img/countertops/luna-frost.jpg',
    range: 'Price Range $$-$$$$$',
    construction: 'Genuine Natural Stone',
    
  },
  {
    name: 'Marble',
    price: 100,
    descrip: 'Highly Heat Resistant. Can Scratch. Affected by Harsh Chemicals.',
    img: 'img/countertops/white-carrara.jpg',
    range: 'Price Range $$-$$$$',
    construction: 'Genuine Natural Stone',
  },
  {
    name: 'Quartzite',
    price: 100,
    descrip: 'Highly Heat and Scratch Resistant. Unaffected by Harsh Chemicals.',
    img: 'img/countertops/blanca-natira.jpg',
    range: 'Price Range $$$-$$$$',
    construction: 'Genuine Natural Stone',
  },
  {
    name: 'Soapstone',
    price: 100,
    descrip: 'Highly Heat Resistant. Unaffected by Harsh Chemicals. Can Scratch.',
    img: 'img/countertops/luna-frost.jpg',
    range: 'Price Range $$$-$$$$',
    construction: 'Genuine Natural Stone',
  },
  {
    name: 'Porcelain',
    price: 100,
    descrip: 'Highly Heat and Scratch Resistant. Unaffected by Harsh Chemicals.',
    img: 'img/countertops/italian-white-di-pesco.jpg',
    range: 'Price Range $$$-$$$$$',
    construction: 'Manufactured from a mix of glass, ceramic and other materials.',
  },
  {
    name: 'Butcher Block',
    price: 100,
    descrip: 'Can Scratch Easily. Heat Resistant But Can Burn. Can Be Repaired.',
    img: 'img/countertops/bainbrook-grey.jpg',
    range: 'Price Range $$-$$$$$',
    construction: 'Solid wood laminated together with adhesive',
  },
  {
    name: 'Quartz Surfacing',
    price: 100,
    descrip: 'Heat Resistant But Can Scorch. Scratch Resistant. Unaffected by Most Chemicals.',
    img: 'img/countertops/typhoon-ice.jpg',
    range: 'Price Range $$$-$$$$',
    construction: 'Manufactured from natural quartz and polyester resin.',
  },
  {
    name: 'Solid Surface',
    price: 100,
    descrip: 'Can Scratch Easily. Will Melt When Exposed To High Heat. Can Be Repaired.',
    img: 'img/countertops/classic-linen.jpg',
    range: 'Price Range $$-$$$$',
    construction: 'Manufactured from acrylic resins.',
  },
  {
    name: 'Laminate',
    price: 100,
    descrip: 'Somewhat Stain Resistant. Can Scratch and Scorch.',
    img: 'img/countertops/kalahari-topaz.jpg',
    range: 'Price Range $-$$$',
    construction: 'Manufactured from layers of plastic ahered to particleboard.',
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
        <img class="container__box__img countered" name="${paginatedItems[i].price}" src="${paginatedItems[i].img}" alt="${paginatedItems[i].name}" />
        </div>
        <p>${paginatedItems[i].range}</p>
        <p>${paginatedItems[i].descrip}</p><p>${paginatedItems[i].construction}</p>
        <div class="overlay"><i class="fa-li fa fa-check-circle"></i></div>
      <!--</div>-->
    </div>
  `;
    counterSection.insertAdjacentHTML('afterbegin', html);
  }
}; //end displayCounter fn

counterBtnRight.addEventListener('click', () => {
  $(counterSection).children().hide();

  if (current_counter === 3) current_counter = 0;

  current_counter++;

  displayCounter(counterTops, counterSection, counterRows, current_counter);
  selectItems('counter');
});

counterBtnLeft.addEventListener('click', () => {
  $(counterSection).children().hide();

  if (current_counter === 0) current_counter = 3;

  displayCounter(counterTops, counterSection, counterRows, current_counter);
  selectItems('counter');

  current_counter--;
});

displayCounter(counterTops, counterSection, counterRows, current_counter);
