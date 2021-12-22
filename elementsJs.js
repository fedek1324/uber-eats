'use strict';

function btnActive() {
  if ($(window).scrollTop() > $(window).outerHeight()) $('.goTop').fadeIn(500);
  else $('.goTop').fadeOut(500);
}

$(document).ready(function () {
  //==========кнопка скролл вверх================
  btnActive();
  $(window).on('scroll', btnActive);

  $('.goTop').click(function () {
    $('html').animate(
      {
        scrollTop: $('#top').offset().top,
      },
      500
    );
  });

  $(".selectDiv").on("click", function () {
    $(".ul").slideToggle(100);
    $(".arrowIcon").toggleClass("rotate");
    return false;
  });

  let placeholder = document.querySelector('.wideSearch>input').getAttribute('placeholder');

  document
    .querySelector(".wideSearch>input")
    .addEventListener("focus", function (event) {
      event.target.setAttribute("placeholder", "");
    });

  document
    .querySelector(".wideSearch>input")
    .addEventListener("blur", function (event) {
      event.target.setAttribute("placeholder", placeholder);
    });
});
