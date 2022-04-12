$(() => {
  const checkScrollSlideUp = (scrollBottom) => {
    const scrollSlideUp = $('._scrollSlideUp')

    scrollSlideUp.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveSlideUp')
      } else {
        $(element).removeClass('_isActiveSlideUp')
      }
    })
  }

  const checkScrollSlideDown = (scrollBottom) => {
    const scrollSlideDown = $('._scrollSlideDown')

    scrollSlideDown.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveSlideDown')
      } else {
        $(element).removeClass('_isActiveSlideDown')
      }
    })
  }

  const checkScrollFadeIn = (scrollBottom) => {
    const scrollFadeIn = $('._scrollFadeIn')

    scrollFadeIn.each((index, element) => {
      const isActive =
        $(element).offset().top < scrollBottom /* true or false */

      if (isActive) {
        $(element).addClass('_isActiveFadeIn')
      } else {
        $(element).removeClass('_isActiveFadeIn')
      }
    })
  }

  $(window).scroll(() => {
    const scrollTop = $(this).scrollTop() /* どれだけスクロールしたか？ */
    const windowHeight = $(this).height() /* 画面の高さ */
    const scrollBottom = scrollTop + windowHeight

    checkScrollSlideUp(scrollBottom)
    checkScrollSlideDown(scrollBottom)
    checkScrollFadeIn(scrollBottom)
  })
})


// $('.c-slide').slick({
//   autoplay: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   centerMode: true,
//   variableWidth: true,
//     responsive: [
//       {
//       breakpoint: 959,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       }
//     }
//   ]
//   });

  // $(".c-slide").slick({
  //   autoplay: true,
  //   infinite: true,
  //   autoplaySpeed: 4000,
  //   variableWidth: true,
  //   dots: true, 
  // });

  $('.c-slide').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    dots: true, 
    arrows: true,
    prevArrow: '<div class="c-slide__arrow prev-arrow"><</div>',
    nextArrow: '<div class="c-slide__arrow next-arrow">></div>',
    variableWidth: true,
      responsive: [
        {
        breakpoint: 752,
        settings: {
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
    });

    $('.p-game__slider').slick({
      infinite: true,
      slidesToShow: 6.5,
      slidesToScroll: 6,
      arrows: true,
      dots: true,
      prevArrow: '<div class="p-game__slider-prev c-slide__arrow"><</div>',
      nextArrow: '<div class="p-game__slider-next c-slide__arrow">></div>',
      variableWidth: true,
    //   responsive: [
    //     {
    //     breakpoint: 959,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       arrows: false,
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       arrows: false,
    //     }
    //   }
    // ]
    });