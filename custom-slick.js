$(document).ready(function() {
      $('.testimony-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,

        responsive: [
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      })
    })