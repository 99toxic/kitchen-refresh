const finishSection = document.querySelector('.finish');

const cabinetFinishes = [
  {
    name: 'Black Onyx',
    price: 0,
    img: 'img/cabinet-finishes/black-onyx.jpg',
  },
  {
    name: 'Black Ash',
    price: 0,
    img: 'img/cabinet-finishes/black-ash.jpg',
  },
  {
    name: 'Deep Blue Sea',
    price: 0,
    img: 'img/cabinet-finishes/deep-blue-sea.jpg',
  },
  {
    name: 'Zanno Wenge',
    price: 0,
    img: 'img/cabinet-finishes/zanno-wenge.jpg',
  },
  {
    name: 'Dark Chocolate',
    price: 0,
    img: 'img/cabinet-finishes/dark-chocolate.jpg',
  },
  {
    name: 'Ember',
    price: 0,
    img: 'img/cabinet-finishes/ember.jpg',
  },
  {
    name: 'Moderna Grigio',
    price: 0,
    img: 'img/cabinet-finishes/moderna-grigio.jpg',
  },
  {
    name: 'Fontana Night',
    price: 0,
    img: 'img/cabinet-finishes/fontana-night.jpg',
  },
  {
    name: 'Tete-e-Tete',
    price: 0,
    img: 'img/cabinet-finishes/tete-e-tete.jpg',
  },
  {
    name: 'Moonlight',
    price: 0,
    img: 'img/cabinet-finishes/moonlight.jpg',
  },
  {
    name: 'Battleship Grey',
    price: 0,
    img: 'img/cabinet-finishes/battleship-grey.jpg',
  },
  {
    name: 'Gun Metal Grey',
    price: 0,
    img: 'img/cabinet-finishes/gun-metal-grey.jpg',
  },
  {
    name: 'Opti Grey',
    price: 0,
    img: 'img/cabinet-finishes/opti-grey.jpg',
  },
  {
    name: 'Folkstone Grey',
    price: 0,
    img: 'img/cabinet-finishes/folkstone-grey.jpg',
  },
  {
    name: 'Alno',
    price: 0,
    img: 'img/cabinet-finishes/alno.jpg',
  },
  {
    name: 'Elmwood',
    price: 0,
    img: 'img/cabinet-finishes/elmwood.jpg',
  },
  {
    name: 'Memento',
    price: 0,
    img: 'img/cabinet-finishes/memento.jpg',
  },
  {
    name: 'Winter Fun',
    price: 0,
    img: 'img/cabinet-finishes/winter-fun.jpg',
  },
  {
    name: 'Skye',
    price: 0,
    img: 'img/cabinet-finishes/skye.jpg',
  },
  {
    name: 'Bianca Latte',
    price: 0,
    img: 'img/cabinet-finishes/bianca-latte.jpg',
  },
  {
    name: 'Riva',
    price: 0,
    img: 'img/cabinet-finishes/riva.jpg',
  },
  {
    name: 'Gemelli Contour',
    price: 0,
    img: 'img/cabinet-finishes/gemelli-contour.jpg',
  },
  {
    name: 'Antique White',
    price: 0,
    img: 'img/cabinet-finishes/antique-white.jpg',
  },
  {
    name: 'Frosty White',
    price: 0,
    img: 'img/cabinet-finishes/frosty-white.jpg',
  },
  {
    name: 'Glacier White',
    price: 0,
    img: 'img/cabinet-finishes/glacier-white.jpg',
  },
  {
    name: 'White Ash',
    price: 0,
    img: 'img/cabinet-finishes/white-ash.jpg',
  },
  {
    name: 'Snowy White',
    price: 0,
    img: 'img/cabinet-finishes/snowy-white.jpg',
  },
]; //end cabinetFinishes

// cabinetFinishes.forEach((_, index) => {
//   const html = `
//     <div class="container__box pagination">
//       <h3 class="container__box__header">${cabinetFinishes[index].name}</h3>
//       <div class="img__wrap">
//         <img class="container__box__img " src="${cabinetFinishes[index].img}" alt="${cabinetFinishes[index].name}" />
//         <div class="overlay"><i class="fa-li fa fa-check-circle"></i></div>
//       </div>
//     </div>
//   `;

//   finishSection.insertAdjacentHTML('afterbegin', html);
// });

const list_element = document.getElementsByClassName('finish');
const pagination_element = document.getElementsByClassName('pagination');

const btnRight = document.querySelector('.finish__button__right');
const btnLeft = document.querySelector('.finish__button__Left');

let current_page = 1;
let rows = 6;

const displayList = function (items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = '';
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;

  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    btnRight.onclick = function () {
      current_page += 1;
      console.log(current_page);
    };
    const html = `
    <div class="container__box pagination">
      <h3 class="container__box__header">${paginatedItems[i].name}</h3>
      <div class="img__wrap">
        <img class="container__box__img " src="${paginatedItems[i].img}" alt="${paginatedItems[i].name}" />
        <div class="overlay"><i class="fa-li fa fa-check-circle"></i></div>
      </div>
    </div>
  `;
    finishSection.insertAdjacentHTML('afterbegin', html);
  }
}; //end displayList fn

// btnRight.addEventListener('click', () => {
//   current_page += 1;
//   console.log('page ' + current_page);
// });
// console.log('page ' + current_page);

displayList(cabinetFinishes, list_element, rows, current_page);
