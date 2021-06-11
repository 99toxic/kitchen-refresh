'use strict';

const doorSection = document.querySelector('.door-style');

const cabinetDoorStyles = [
  {
    name: 'Shaker Style Door',
    price: 130,
    img: 'img/cabinet-door-styles/shaker-style-door.jpg',
  },
  {
    name: 'Raised Panel Shaker',
    price: 140,
    img: 'img/cabinet-door-styles/raised-panel.jpg',
  },
  {
    name: 'Beadboard Door',
    price: 130,
    img: 'img/cabinet-door-styles/beadboard.jpg',
  },
  {
    name: 'Modern Door',
    price: 120,
    img: 'img/cabinet-door-styles/modern-door.jpg',
  },
  {
    name: 'Modern Drawer Front',
    price: 120,
    img: 'img/cabinet-door-styles/modern-drawer-front.jpg',
  },
  {
    name: 'Shaker Style  Drawer',
    price: 130,
    img: 'img/cabinet-door-styles/shaker-style-drawer.jpg',
  },
]; //end cabinetDoorStyle

const doorsBtnRight = document.querySelector('.doors__button__right');
const doorsBtnLeft = document.querySelector('.doors__button__left');

let current_doors = 1;

let doorRows = 3;

const displayDoors = function (items, wrapper, rows_per_page, page) {
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
    doorSection.insertAdjacentHTML('afterbegin', html);
  }
}; //end displayDoors fn

doorsBtnRight.addEventListener('click', () => {
  $(doorSection).children().hide();

  if (current_doors === 2) current_doors = 0;

  current_doors++;

  displayDoors(cabinetDoorStyles, doorSection, doorRows, current_doors);
  selectItems('door');
});

doorsBtnLeft.addEventListener('click', () => {
  $(doorSection).children().hide();

  if (current_doors === 0) current_doors = 2;

  displayDoors(cabinetDoorStyles, doorSection, doorRows, current_doors);
  selectItems('door');

  current_doors--;
});

displayDoors(cabinetDoorStyles, doorSection, doorRows, current_doors);
