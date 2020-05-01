///////////// index

///////////// sub1

///////////// sub2
var swiper = new Swiper('.sub2-sect2 .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 700,
    pagination: {
      el: '.sub2-sect2 .swiper-pagination',
      clickable: false,
    },
    navigation: {
      nextEl: '.sub2-sect2 .swiper-button-next',
      prevEl: '.sub2-sect2 .swiper-button-prev',
    },
  });
  var sw = 0;
  $('.sub2-sect2 .swiper-button-next').click(function(){
    sw += 1;
    if(sw==1){
        $('.animalInfo').removeClass('on')
        $('.animalInfo:nth-child(2)').addClass('on')
    } else if(sw==2){
        $('.animalInfo').removeClass('on')
        $('.animalInfo:nth-child(3)').addClass('on')
    }console.log(sw)
  })
  $('.sub2-sect2 .swiper-button-prev').click(function(){
    sw -= 1;
    console.log(sw)
  })
///////////// sub3

///////////// sub4
