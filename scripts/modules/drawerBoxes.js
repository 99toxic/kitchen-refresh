'use strict';

const drawerBoxesSection = document.querySelector('.drawerBoxes');

const drawerBoxesStyles = [
  {
    name: 'Drawer Box A',
    price: 130,
    img: 'img/drawerBox/A.png',
  },
  {
    name: 'Drawer Box B',
    price: 140,
    img: 'img/drawerBox/B.png',
  },
  {
    name: 'Drawer Box C',
    price: 130,
    img: 'img/drawerBox/C.png',
  },


]; //end drawerFrontStyle

const drawerBoxesBtnRight = document.querySelector('.drawerBoxes__button__right');
const drawerBoxesBtnLeft = document.querySelector('.drawerBoxes__button__left');

let current_drawerBoxes = 1;

let drawerBoxesRows = 3;

const displayDrawerBoxesStyles = function (items, wrapper, rows_per_page, page) {
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
        <img class="container__box__img drawerBoxesed" name="${paginatedItems[i].price}" src="${paginatedItems[i].img}" alt="${paginatedItems[i].name}" />
        <div class="overlay"><i class="fa-li fa fa-check-circle"></i></div>
      </div>
    </div>
	
  `;
  drawerBoxesSection.insertAdjacentHTML('afterbegin', html);
  }
}; //end displayDoors fn

drawerBoxesBtnRight.addEventListener('click', () => {
  $(drawerBoxesSection).children().hide();

  if (current_drawerBoxes === 2) current_drawerBoxes = 0;

  current_drawerBoxes++;

  displayDrawerBoxesStyles(drawerBoxesStyles, drawerBoxesSection, drawerBoxesRows, current_drawerBoxes);
  selectItems('drawerFS');
});

drawerBoxesBtnLeft.addEventListener('click', () => {
  $(drawerFrontSection).children().hide();

  if (current_drawerBoxes === 0) current_drawerBoxes = 2;

  displayDrawerBoxesStyles(drawerBoxesStyles, drawerBoxesSection, drawerBoxesRows, current_drawerBoxes);
  selectItems('drawerFS');

  current_drawerBoxes--;
});

displayDrawerBoxesStyles(drawerBoxesStyles, drawerBoxesSection, drawerBoxesRows, current_drawerBoxes);
