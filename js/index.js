///////////// index

///////////// sub1

// $(".sub1_sect6 ul li").mouseenter(function () {
//   $(this).find(".sub1_name").hide()
//   $(this).find(".sub1_active").addClass('on')
//   $(".sub1_nametxt").removeClass("on")
//   $(this).find(".sub1_nametxt").addClass("on")
// })
// $(".sub1_sect6 ul li").mouseleave(function () {
//   $(this).find(".sub1_name").show()
//   $(this).find(".sub1_active").removeClass('on')
//   $(".sub1_nametxt").removeClass("on")
// })

$(".history_tab a").click(function (e) {
  e.preventDefault()
  var idx = $(this).parent("li").index()
  $(".history_con img").stop().fadeOut()
  $(".history_con img").eq(idx).stop().fadeIn()
  $(".history_txt").stop().fadeOut()
  $(".history_txt").eq(idx).stop().fadeIn()
  $(".history_tab a").removeClass("on")
  $(this).addClass("on")
})

// 애니

// $(window).scroll()

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
    }else if(sw==3){
      $('.animalInfo').removeClass('on')
      $('.animalInfo:nth-child(4)').addClass('on')
  }console.log(sw)
  })
  $('.sub2-sect2 .swiper-button-prev').click(function(){
    sw -= 1;
    console.log(sw)
  })
///////////// sub3

$('.S3-name li').click(function(e){
    e.preventDefault()
    $(this).parents().children().removeClass('on')
    $(this).addClass('on')

    var S3in = $(this).index()
    $(this).closest('section').find('.S3-m-title li').removeClass('on')
    $(this).closest('section').find('.S3-m-title li').eq(S3in).addClass('on')
    $(this).closest('section').find('.S3-video iframe').removeClass('on')
    $(this).closest('section').find('.S3-video iframe').eq(S3in).addClass('on')
})

///////////// sub4



// support

// FAQ
