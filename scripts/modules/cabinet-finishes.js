'use-strict';

const finishSection = document.querySelector('.finish');

const cabinetFinishes = [
	//add reverse items
	//bb-1
	{
    name: 'Frosty White',
    price: 1,
    img: 'img/cabinet-finishes/frosty-white.jpg',
  	},
  	{
    name: 'Antique White',
    price: 2,
    img: 'img/cabinet-finishes/antique-white.jpg',
  	},
	{
    name: 'Gemelli Contour',
    price: 3,
    img: 'img/cabinet-finishes/gemelli-contour.jpg',
  	},
	//bt -1
	{
    name: 'Snowy White',
    price: 4,
    img: 'img/cabinet-finishes/snowy-white.jpg',
  	},
  	{
    name: 'White Ash',
    price: 5,
    img: 'img/cabinet-finishes/white-ash.jpg',
  	},
	{
    name: 'Glacier White',
    price: 6,
    img: 'img/cabinet-finishes/glacier-white.jpg',
  	},
	//bb-2
		{
    name: 'Winter Fun',
    price: 7,
    img: 'img/cabinet-finishes/winter-fun.jpg',
  	},
	{
    name: 'Memento',
    price: 8,
    img: 'img/cabinet-finishes/memento.jpg',
  	},
	{
    name: 'Elmwood',
    price: 9,
    img: 'img/cabinet-finishes/elmwood.jpg',
  	},
	//bt-2
	{
	name: 'Riva',
	price: 10,
	img: 'img/cabinet-finishes/riva.jpg',
	},
	{
    name: 'Bianca Latte',
    price: 11,
    img: 'img/cabinet-finishes/bianca-latte.jpg',
  	},
	{
    name: 'Skye',
    price: 12,
    img: 'img/cabinet-finishes/skye.jpg',
 	},
	//bb-3
	  	{
    name: 'Moonlight',
    price: 13,
    img: 'img/cabinet-finishes/moonlight.jpg',
  	},
  	{
    name: 'Battleship Grey',
    price: 14,
    img: 'img/cabinet-finishes/battleship-grey.jpg',
  	},
  	{
    name: 'Gun Metal Grey',
    price: 15,
    img: 'img/cabinet-finishes/gun-metal-grey.jpg',
  	},
	//bt-3  ----move these down once org.
	{
    name: 'Alno',
    price: 16,
    img: 'img/cabinet-finishes/alno.jpg',
  	},
	{
    name: 'Folkstone Grey',
    price: 17,
    img: 'img/cabinet-finishes/folkstone-grey.jpg',
  	},
	{
    name: 'Opti Grey',
    price: 18,
    img: 'img/cabinet-finishes/opti-grey.jpg',
  	},
  	
	//bb-4
  	{
    name: 'Zanno Wenge',
    price: 19,
    img: 'img/cabinet-finishes/zanno-wenge.jpg',
  	},
  	{
    name: 'Dark Chocolate',
    price: 20,
    img: 'img/cabinet-finishes/dark-chocolate.jpg',
  	},
  	{
    name: 'Ember',
    price: 21,
    img: 'img/cabinet-finishes/ember.jpg',
  	},
	//bt-4
  	{
    name: 'Moderna Grigio',
    price: 22,
    img: 'img/cabinet-finishes/moderna-grigio.jpg',
  	},
  	{
    name: 'Fontana Night',
    price: 23,
    img: 'img/cabinet-finishes/fontana-night.jpg',
  	},
  	{
    name: 'Tete-e-Tete',
    price: 24,
    img: 'img/cabinet-finishes/tete-e-tete.jpg',
  	},
	//bb-5

	{
    name: 'Black Onyx',
    price: 25,
    img: 'img/cabinet-finishes/black-onyx.jpg',
  	},
  	{
    name: 'Black Ash',
    price: 26,
    img: 'img/cabinet-finishes/black-ash.jpg',
  	},	
  	{
    name: 'Deep Blue Sea',
    price: 27,
    img: 'img/cabinet-finishes/deep-blue-sea.jpg',
  	},

]; //end cabinetFinishes

const list_element = document.getElementsByClassName('finish');
const pagination_element = document.getElementsByClassName('pagination');

const finishBtnRight = document.querySelector('.finish__button__right');
const finishBtnLeft = document.querySelector('.finish__button__left');

let current_page = 1;
let rows = 6;

const displayList = function (items, wrapper, rows_per_page, page) {
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
        <img class="container__box__img finished" name="${paginatedItems[i].price}" src="${paginatedItems[i].img}" alt="${paginatedItems[i].name}" />
        <div class="overlay"><i class="fa-li fa fa-check-circle"></i></div>
      </div>
    </div>
  `;
    finishSection.insertAdjacentHTML('afterbegin', html);
  }
}; //end displayList fn

finishBtnRight.addEventListener('click', () => {
  $(finishSection).children().hide();

  if (current_page === Math.round(cabinetFinishes.length / 5)) current_page = 0;

  current_page++;

  displayList(cabinetFinishes, list_element, rows, current_page);
  selectItems('finish');
});

finishBtnLeft.addEventListener('click', () => {
  $(finishSection).children().hide();

  if (current_page === 0) current_page = Math.round(cabinetFinishes.length / 5);

  displayList(cabinetFinishes, list_element, rows, current_page);
  selectItems('finish');

  current_page--;
});

displayList(cabinetFinishes, list_element, rows, current_page);
