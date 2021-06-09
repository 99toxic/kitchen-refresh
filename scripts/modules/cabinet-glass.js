'use strict';

const glassSection = document.querySelector('.glass');

const cabinetGlass = [
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

cabinetGlass.forEach((_, index) => {
  const html = `
    <div class="container__box">
      <h3 class="container__box__header">${cabinetGlass[index].name}</h3>
      <div class="img__wrap">
        <img class="container__box__img " src="${cabinetGlass[index].img}" alt="${cabinetGlass[index].name}" />
        <div class="overlay"><i class="fa-li fa fa-check-circle"></i></div>
      </div>
    </div>
  `;

  glassSection.insertAdjacentHTML('afterbegin', html);
});
