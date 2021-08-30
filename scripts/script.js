'use strict';

const finishHTML = document.querySelector;

const pageOne = document.querySelector('.page__one');
const pageTwo = document.querySelector('.page__two');
const pageThree = document.querySelector('.page__three');
//add pages
const page4 = document.querySelector('.page__four');
const page5 = document.querySelector('.page__five');
const page6 = document.querySelector('.page__six');
const page7 = document.querySelector('.page__seven');
const page8 = document.querySelector('.page__eight');
const page9 = document.querySelector('.page__nine');
//end adds

//add door type
const typeDoors = document.getElementById('type');

const formDoors = document.getElementById('door');
const formGlass = document.getElementById('glass');
const formDrawers = document.getElementById('drawers');
const formName = document.getElementById('name');
const formZip = document.getElementById('zip');
const formEmail = document.getElementById('email');
const formTel = document.getElementById('tel');
const formCheckbox = document.getElementById('checkbox');
//add bells and whistles
const formDoorsCount = document.getElementById('doorsct');
const formHardware = document.getElementById('hardware');
const formDrawerFrontStyle = document.getElementById('drawerFS');
const formDrawerFrontHardware = document.getElementById('drawerFHS');
const formDrawerReplace = document.getElementById('drawerReplace');
const formRolloutReplace = document.getElementById('rolloutReplace');
const formPaintMe = document.getElementById('paint');
const formCountertop = document.getElementById('counter');
const formLinearFt = document.getElementById('linearFt');
//end adds
const submitBtn = document.querySelector('.container__button__submit');
//

// When 'next' button is clicked it goes to next page
const nextPage = function () {
  document.querySelectorAll(`.container__button__next`).forEach(item => {
    item.addEventListener('click', () => {
      const pageName = item.parentElement.parentElement.className;
     var count = 0;
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
      if (pageName === 'page page__three') {
        pageThree.classList.add('hidden');
        page4.classList.remove('hidden');
      }
      if (pageName === 'page page__four'){
      page4.classList.add('hidden');
      page5.classList.remove('hidden');
      }
      if(pageName === 'page page__five'){
      page5.classList.add('hidden');
      page6.classList.remove('hidden');
      }
      if(pageName === 'page page__six'){
        page6.classList.add('hidden');
        page7.classList.remove('hidden');
      }
      if(pageName === 'page page__seven'){
        page7.classList.add('hidden');
        page8.classList.remove('hidden');
      }
      if(pageName === 'page page__eight'){
       page8.classList.add('hidden');
       page9.classList.remove('hidden'); 
      }
      
    });
  });
}; //end nextPage fn

// When 'previous' button is clicked it goes back a page
const previousPage = function () {
  document.querySelectorAll('.container__button__previous').forEach(item => {
    item.addEventListener('click', () => {
      const pageName = item.parentElement.parentElement.className;


      if (pageName === 'page page__two') {
        pageTwo.classList.add('hidden');
        pageOne.classList.remove('hidden');
      }
      if (pageName === 'page page__three') {
        pageTwo.classList.remove('hidden');
        pageThree.classList.add('hidden');
      }
      if (pageName === 'page page__four') {
        page4.classList.add('hidden');
        pageThree.classList.remove('hidden');
      }
      if (pageName === 'page page__five'){
      page5.classList.add('hidden');
      page4.classList.remove('hidden');
      }
      if(pageName === 'page page__six'){
      page6.classList.add('hidden');
      page5.classList.remove('hidden');
      }
      if(pageName === 'page page__seven'){
        page7.classList.add('hidden');
        page6.classList.remove('hidden');
      }
      if(pageName === 'page page__eight'){
        page8.classList.add('hidden');
        page7.classList.remove('hidden');
      }
      if(pageName === 'page page__nine'){
       page9.classList.add('hidden');
       page8.classList.remove('hidden'); 
      }
    });
  });
}; //end previousPage fn

// Selects item when clicked with class of picked
const selectItems = function (items) {
  $('div[data-selection] div').click(function () {
    if ($(this).parent('div').attr('data-selection') == items) {
     // $("div[data-selection='" + items  + "']  img").removeClass('picked');
      $(this).find('img').toggleClass('picked');
    }
  });
}; //end selectItems fn

// When form submits
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  let finish,
    finishPrice,
    door,
    doorPrice,
    doorPriceTotal,
    glass,
    glassPrice,
    glassPriceTotal,
    hardware,
    hardwarePrice,
    hardwarePriceTotal,
    counter,
    counterPrice,
    drawerFrontStyle,
    drawerFrontStylePrice,
    drawerFrontHardwareStyle,
    drawerFrontHardwareStylePrice,
    subTotal,
    paintSubtotal,
    countertopSubTotal,
    finishPriceSub,
    drawerFrontHSTotal,
    drawerFrontStyleTotal,
    totalPrice;

  document.querySelectorAll('.picked').forEach(item => {
    if (item.classList.contains('finished')) {
      finish = item.alt;
      finishPrice = item.name;
    }
    if (item.classList.contains('doored')) {
      door = item.alt;
      doorPrice = item.name;
    }
    if (item.classList.contains('glassed')) {
      glass = item.alt;
      glassPrice = item.name;
    }
    if (item.classList.contains('hardwared')) {
      hardware = item.alt;
      hardwarePrice = item.name;
    }

    if (item.classList.contains('countered')) {
      counter = item.alt;
      counterPrice = item.name;
    }
    if (item.classList.contains('drawerFSed')){
      drawerFrontStyle = item.alt;
      drawerFrontStylePrice = item.name;

    }
    if (item.classList.contains('drawerFHSed')){
      drawerFrontHardwareStyle = item.alt;
      drawerFrontHardwareStylePrice = item.name;

    }
    
  });

  doorPriceTotal = doorPrice * formDoorsCount.value;
  glassPriceTotal = glassPrice * formDoorsCount.value;
  finishPriceSub = (finishPrice * 2);
  
  hardwarePriceTotal = hardwarePrice * formDrawerReplace.value;
  drawerFrontHSTotal = drawerFrontHardwareStyle * formDrawerReplace.value;
  drawerFrontStyleTotal = drawerFrontStylePrice * formDrawerReplace.value;
  subTotal = Math.ceil(
    parseFloat(finishPriceSub) +
      parseFloat(doorPriceTotal) +
      parseFloat(glassPriceTotal) +
      parseFloat(hardwarePriceTotal) + 
      parseFloat(drawerFrontHSTotal) + 
      parseFloat(drawerFrontHardwareStylePrice)
  );

    if(formPaintMe.value == 'yes'){
  paintSubtotal = 22 * formRolloutReplace.value;
    }
    else{
      paintSubtotal = 0.00;
    }
    countertopSubTotal = counterPrice * formLinearFt.value; 
    totalPrice = Math.ceil(
      parseFloat(paintSubtotal) +
        parseFloat(subTotal) +
        parseFloat(countertopSubTotal)
    );
  $('.submitTextarea').val(`
  FINISH: ${finish}
  FINISH PRICE: ${finishPrice},

  DOOR STYLE: ${door}


  PRICE PER DOOR: ${doorPrice}
  TOTAL DOOR PRICE: ${doorPriceTotal},

  GLASS STYLE: ${glass}

  PRICE PER GLASS: ${glassPrice}
  TOTAL GLASS PRICE: ${glassPriceTotal},

  HARDWARE STYLE: ${hardware}
 
  PRICE PER HARDWARE: ${hardwarePrice}
  TOTAL HARDWARE PRICE: ${hardwarePriceTotal},

  COUNTERTOP STYLE: ${counter}
  COUNTERTOP PRICE: ${counterPrice},
  

  TOTAL PRICE: ${totalPrice}

  Name: ${formName.value},
  Zip: ${formZip.value},
  Email: ${formEmail.value},
  Telephone: ${formTel.value},

  Paint Cabinets (yes or no) ${formCheckbox.checked}`);

  $('.submitForm').submit();

   console.log(`
    FINISH: ${finish}
     FINISH PRICE: ${finishPrice},

     DOOR STYLE: ${door}

     PRICE PER DOOR: ${doorPrice}
     TOTAL DOOR PRICE: ${doorPriceTotal},

     GLASS STYLE: ${glass}
     PRICE PER GLASS: ${glassPrice}
    TOTAL GLASS PRICE: ${glassPriceTotal},
    DOOR COUNT: ${formDoorsCount.value},
    DRAWERS TO BE REPLACED: ${formDrawerReplace.value},
    ROLLOUTS TO BE REPLACED: ${formRolloutReplace.value},
    TO BE PAINTED: ${formPaintMe.value},
    HARDWARE STYLE: ${hardware},
    LINEAR FT: ${formLinearFt.value},
     PRICE PER HARDWARE: ${hardwarePrice},
     TOTAL HARDWARE PRICE: ${hardwarePriceTotal},
    DRAWER FRONT STYLE: ${drawerFrontStyle},
    DRAWER FRONT STYLE PRICE: ${drawerFrontStylePrice},
    DRAWER FRONT HARDWARE STYLE: ${drawerFrontHardwareStyle},
    DRAWER FRONT HARDWARE STYLE PRICE: ${drawerFrontHardwareStylePrice},
    
     COUNTERTOP STYLE: ${counter}
     COUNTERTOP PRICE: ${counterPrice},


     TOTAL PRICE: ${totalPrice}

     Name: ${formName.value},
     City: ${formZip.value},
     Email: ${formEmail.value},
     Telephone: ${formTel.value},

     Paint Cabinets (yes or no) ${formCheckbox.checked}`);
     document.write("Total Price: $" + totalPrice + "<br />");
document.write("Refresh Subtotal: $" + subTotal+ "<br />");
document.write("Painting Subtotal: $" + paintSubtotal+ "<br />");
document.write("Countertop Subtotal: $" + countertopSubTotal+ "<br />");
document.write("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>");
});

nextPage();
previousPage();

selectItems('finish');
//add door type
selectItems('type');
selectItems('door');
selectItems('glass');
selectItems('hardware');
selectItems('counter');
selectItems('drawerH');
//add drawer front
selectItems('drawerFS');
selectItems('drawerFHS');
//selectItems('quantity')
function results(){
//document.write("Total Price: $" + totalPrice + "<br />");
//document.write("Refresh Subtotal: $" + subTotal+ "<br />");
//document.write("Painting Subtotal: $" + paintSubtotal+ "<br />");
//document.write("Countertop Subtotal: $" + countertopSubTotal+ "<br />");
//document.write("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>");

}