$(document).ready(function () {
  // находим блок со слайдером

  const owl = $("#clients-slider");

  // запускаем карусель

  owl.owlCarousel({
    items: 1,
    loop: true,
  });

  // находим катстомные кнопки вперед-назад
  const prev = $("#sliderPrev");
  const next = $("#sliderNext");

  // клик назад
  prev.click(function () {
    owl.trigger("prev.owl.carousel");
  });
  // клик перед
  next.click(function () {
    owl.trigger("next.owl.carousel");
  });
});

// // код пример

//   var owl = $('.owl-carousel');
// owl.owlCarousel();
// // Go to the next item
// $('.customNextBtn').click(function() {
//     owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.customPrevBtn').click(function() {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [300]);
// })
