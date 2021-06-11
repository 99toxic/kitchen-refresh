'use strict';

const glassSection = document.querySelector('.glass');

const cabinetGlass = [
  {
    name: 'linen',
    price: 180,
    img: 'img/cabinet-glass/linen.jpg',
  },
  {
    name: 'Clear',
    price: 180,
    img: 'img/cabinet-glass/clear.jpg',
  },
  {
    name: 'frosted',
    price: 180,
    img: 'img/cabinet-glass/frosted.jpg',
  },
  {
    name: 'linen',
    price: 180,
    img: 'img/cabinet-glass/linen.jpg',
  },
  {
    name: 'reeded',
    price: 180,
    img: 'img/cabinet-glass/reeded.jpg',
  },
  {
    name: 'seeded',
    price: 180,
    img: 'img/cabinet-glass/seeded.jpg',
  },
]; //end cabinetGlass

const glassBtnRight = document.querySelector('.glass__button__right');
const glassBtnLeft = document.querySelector('.glass__button__left');

let current_glass = 1;

let glassRows = 3;

const displayGlass = function (items, wrapper, rows_per_page, page) {
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
    glassSection.insertAdjacentHTML('afterbegin', html);
  }
}; //end displayGlass fn

glassBtnRight.addEventListener('click', () => {
  $(glassSection).children().hide();

  if (current_glass === 2) current_glass = 0;

  current_glass++;

  displayGlass(cabinetGlass, glassSection, glassRows, current_glass);
  selectItems('glass');
});

glassBtnLeft.addEventListener('click', () => {
  $(glassSection).children().hide();

  if (current_glass === 0) current_glass = 2;

  displayGlass(cabinetGlass, glassSection, glassRows, current_glass);
  selectItems('glass');

  current_glass--;
});

displayGlass(cabinetGlass, glassSection, glassRows, current_glass);
