'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var openMenuButton = header.querySelector('.js-open-menu');

  openMenuButton.addEventListener('click', function () {
    header.classList.toggle('page-header--menu-closed');
  });
})();
