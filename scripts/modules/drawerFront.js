'use strict';

const drawerFrontSection = document.querySelector('.drawerFS');

const drawerFrontStyles = [
  {
    name: 'Drawer Front A',
    price: 130,
    img: 'img/drawer-front/A.png',
  },
  {
    name: 'Drawer Front B',
    price: 140,
    img: 'img/drawer-front/B.png',
  },
  {
    name: 'Drawer Front C',
    price: 130,
    img: 'img/drawer-front/C.png',
  },


]; //end drawerFrontStyle

const drawerFSBtnRight = document.querySelector('.drawerFS__button__right');
const drawerFSBtnLeft = document.querySelector('.drawerFS__button__left');

let current_drawerFS = 1;

let drawerFSRows = 3;

const displayDrawerFrontStyle = function (items, wrapper, rows_per_page, page) {
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
        <img class="container__box__img drawerFSed" name="${paginatedItems[i].price}" src="${paginatedItems[i].img}" alt="${paginatedItems[i].name}" />
        <div class="overlay"><i class="fa-li fa fa-check-circle"></i></div>
      </div>
    </div>
	
  `;
  drawerFrontSection.insertAdjacentHTML('afterbegin', html);
  }
}; //end displayDoors fn

drawerFSBtnRight.addEventListener('click', () => {
  $(drawerFrontSection).children().hide();

  if (current_drawerFS === 2) current_drawerFS = 0;

  current_drawerFS++;

  displayDrawerFrontStyle(drawerFrontStyles, drawerFrontSection, drawerFSRows, current_drawerFS);
  selectItems('drawerFS');
});

drawerFSBtnLeft.addEventListener('click', () => {
  $(drawerFrontSection).children().hide();

  if (current_drawerFS === 0) current_drawerFS = 2;

  displayDrawerFrontStyle(drawerFrontStyles, drawerFrontSection, drawerFSRows, current_drawerFS);
  selectItems('drawerFS');

  current_drawerFS--;
});

displayDrawerFrontStyle(drawerFrontStyles , drawerFrontSection, drawerFSRows, current_drawerFS);
