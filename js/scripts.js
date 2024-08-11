// GSAP and ScrollTrigger Animation
gsap.registerPlugin(ScrollTrigger);

gsap.from("#timeline article", {
    scrollTrigger: "article",
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
});

// Banner section swiper

var swiper = new Swiper('#banner-section .swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  });

//   testimonial swiper
var swiper = new Swiper('#testimonials .swiper-container', {
    effect: 'flip',
    grabCursor: true,
    autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
});

//   progress bar
$(window).on('scroll', function() {
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    $('#progress-bar').css('width', scrollPercent + '%');
  });

  $('#search-form').on('submit', function(event) {
    event.preventDefault();
    const query = $('#search-input').val();
    if (query) {
        alert('Searching for: ' + query);
        // Replace the alert with actual search logic
    } else {
        alert('Please enter a search term.');
    }
});