'use strict';

const drawerFrontHardwareSection = document.querySelector('.drawerFHS');

const drawerFrontHardwareStyles = [
  {
    name: 'Drawer Front Hardware A',
    price: 130,
    img: 'img/dfh/1.png',
  },
  {
    name: 'Drawer Front Hardware B',
    price: 140,
    img: 'img/dfh/2.png',
  },
  {
    name: 'Drawer Front Hardware C',
    price: 130,
    img: 'img/dfh/3.png',
  },
  {
    name: 'Drawer Front Hardware D',
    price: 130,
    img: 'img/dfh/D.png',
  },
  {
    name: 'Drawer Front Hardware E',
    price: 130,
    img: 'img/dfh/E.png',
  },
  {
    name: 'Drawer Front Hardware F',
    price: 130,
    img: 'img/dfh/F.png',
  },

]; //end cabinetDoorStyle

const drawerFHSBtnRight = document.querySelector('.drawerFHS__button__right');
const drawerFHSBtnLeft = document.querySelector('.drawerFHS__button__left');

let current_drawerFHS = 1;

let drawerFHSRows = 3;

const displayDrawerFrontHardware = function (items, wrapper, rows_per_page, page) {
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
        <img class="container__box__img drawerFHSed" name="${paginatedItems[i].price}" src="${paginatedItems[i].img}" alt="${paginatedItems[i].name}" />
        <div class="overlay"><i class="fa-li fa fa-check-circle"></i></div>
      </div>
    </div>
	
  `;
  drawerFrontHardwareSection.insertAdjacentHTML('afterbegin', html);
  }
}; //end displayDoors fn

drawerFHSBtnRight.addEventListener('click', () => {
  $(drawerFrontHardwareSection).children().hide();

  if (current_drawerFHS === 2) current_drawerFHS = 0;

  current_drawerFHS++;

  displayDrawerFrontHardware (drawerFrontHardwareStyles, drawerFrontHardwareSection, drawerFHSRows, current_drawerFHS);
  selectItems('drawerFHS');
});

drawerFHSBtnLeft.addEventListener('click', () => {
  $(drawerFrontHardwareSection).children().hide();

  if (current_drawerFHS === 0) current_drawerFHS = 2;

  displayDrawerFrontHardware (drawerFrontHardwareStyles, drawerFrontHardwareSection, drawerFHSRows, current_drawerFHS);
  selectItems('drawerFHS');

  current_drawerFHS--;
});

displayDrawerFrontHardware (drawerFrontHardwareStyles, drawerFrontHardwareSection, drawerFHSRows, current_drawerFHS);
