'use strict';

(function () {

  var buttonsLink = document.querySelectorAll('.buttons__link');
  var cardsItem = document.querySelectorAll('.cards__item');


  var onTabClick = function () {
    for (var i = 0; i < buttonsLink.length; i++) {
      buttonsLink[i].addEventListener('click', function () {
        buttonsLink[i].classList.add('buttons__link--active');
        cardsItem[i].classList.add('cards__item--active');
      });
    }
  };

  onTabClick();
})();
