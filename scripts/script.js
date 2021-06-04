'use strict';

const pageOne = document.querySelector('.page__one');
const pageTwo = document.querySelector('.page__two');
const pageThree = document.querySelector('.page__three');

const nextPage = function () {
  document.querySelectorAll(`.container__button__next`).forEach(item => {
    item.addEventListener('click', () => {
      const pageName = item.parentElement.parentElement.className;

      if (pageName === 'page page__one') {
        pageTwo.classList.remove('hidden');
        pageOne.classList.add('hidden');
      }

      if (pageName === 'page page__two') {
        pageThree.classList.remove('hidden');
        pageTwo.classList.add('hidden');
      }
    });
  });
}; //end nextPage fn

const previousPage = function () {
  document.querySelectorAll('.container__button__previous').forEach(item => {
    item.addEventListener('click', () => {
      const pageName = item.parentElement.parentElement.className;

      if (pageName === 'page page__three') {
        pageTwo.classList.remove('hidden');
        pageThree.classList.add('hidden');
      }

      if (pageName === 'page page__two') {
        pageOne.classList.remove('hidden');
        pageTwo.classList.add('hidden');
      }
    });
  });
}; //end previousPage fn

const removeItem = function () {
  removeEventListener('click', removeItem);
}; //end removeItem fn

const selectItems = function (items) {
  $('div[data-selection] div').click(function () {
    if ($(this).parent('div').attr('data-selection') == items) {
      $("div[data-selection='" + items + "']  img").removeClass('picked');
      $(this).find('img').toggleClass('picked');
    } else if ($(this).parent('div').attr('data-selection') == 'multiple') {
      $(this).find('img').toggleClass('picked');
    }
    console.log(document.querySelectorAll('.picked'));
  });
}; //end selectItems fn

nextPage();
previousPage();

selectItems('finish');
selectItems('door');
selectItems('glass');
selectItems('hardware');
selectItems('drawer');
selectItems('drawerH');
