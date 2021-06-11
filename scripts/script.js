'use strict';

const finishHTML = document.querySelector;

const pageOne = document.querySelector('.page__one');
const pageTwo = document.querySelector('.page__two');
const pageThree = document.querySelector('.page__three');

const formDoors = document.getElementById('doors');
const formGlass = document.getElementById('glass');
const formDrawers = document.getElementById('drawers');
const formWall = document.getElementById('wall');
const formTray = document.getElementById('tray');

const formName = document.getElementById('name');
const formCity = document.getElementById('city');
const formState = document.getElementById('state');
const formEmail = document.getElementById('email');
const formTel = document.getElementById('tel');
const formCheckbox = document.getElementById('checkbox');

const submitBtn = document.querySelector('.container__button__submit');

// When 'next' button is clicked it goes to next page
const nextPage = function () {
  document.querySelectorAll(`.container__button__next`).forEach(item => {
    item.addEventListener('click', () => {
      const pageName = item.parentElement.parentElement.className;

      if (pageName === 'page page__one') {
        if (!$('.container__box__img').hasClass('picked')) {
          alert('Please Select Your Finish');
          return;
        }
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

// When 'previous' button is clicked it goes back a page
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

// Selects item when clicked with class of picked
const selectItems = function (items) {
  $('div[data-selection] div').click(function () {
    if ($(this).parent('div').attr('data-selection') == items) {
      $("div[data-selection='" + items + "']  img").removeClass('picked');
      $(this).find('img').toggleClass('picked');
    }
  });
}; //end selectItems fn

// When form submits
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  let finish, door, glass, hardware, counter;

  document.querySelectorAll('.picked').forEach(item => {
    if (item.classList.contains('finished')) finish = item.alt;
    if (item.classList.contains('doored')) door = item.alt;
    if (item.classList.contains('glassed')) glass = item.alt;
    if (item.classList.contains('hardwared')) hardware = item.alt;
    if (item.classList.contains('countered')) counter = item.alt;
  });

  alert(
    `Finish: ${finish},
    Door Style: ${door},
    Glass Style: ${glass},
    Hardware Style: ${hardware},
    Countertop Style: ${counter},
    Number of Doors: ${formDoors.value},
    Number of Glass: ${formGlass.value},
    Number of Drawers: ${formDrawers.value},
    Wall Measurement: ${formWall.value},
    Additional Organizers: ${formTray.value},
    Name: ${formName.value},
    City: ${formCity.value},
    State: ${formState.value},
    Email: ${formEmail.value},
    Telephone: ${formTel.value},
    Paint Cabinets (yes or no) ${formCheckbox.checked}`
  );
});

nextPage();
previousPage();

selectItems('finish');
selectItems('door');
selectItems('glass');
selectItems('hardware');
selectItems('counter');
selectItems('drawerH');
