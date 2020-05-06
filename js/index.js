///////////// index

///////////// sub1

$(".sub1_sect6 ul li").mouseenter(
  function () {
    $(this).find("img").addClass("on")
    $(this).find(".sub1_name").css({ color: "#f8be03" })
  },
  1000,
  function () {
    $(".sub1_nametxt").addClass("on")
  }
)
$(".sub1_sect6 ul li").mouseleave(function () {
  $(this).find("img").removeClass("on")
  $(this).find(".sub1_name").css({ color: "#fff" })
})

// background-color: #f8be03;
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
