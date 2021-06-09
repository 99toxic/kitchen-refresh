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

cabinetDoorStyles.forEach((_, index) => {
  const html = `
    <div class="container__box">
      <h3 class="container__box__header">${cabinetDoorStyles[index].name}</h3>
      <div class="img__wrap">
        <img class="container__box__img " src="${cabinetDoorStyles[index].img}" alt="${cabinetDoorStyles[index].name}" />
        <div class="overlay"><i class="fa-li fa fa-check-circle"></i></div>
      </div>
    </div>
  `;

  doorSection.insertAdjacentHTML('afterbegin', html);
});
