
    $(document).ready(function () {
      $('#header-wrapper').load('pages/header.html');
      $('#footer-wrapper').load('pages/footer.html');

      // Swiper initialization
      var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });
  