///////////// index

///////////// sub1

$("p.sub1_name").click(function () {
  $("p.sub1_name").removeClass("on")
  $(this).addClass("on")
  $(" p.sub1_active").removeClass("on")
  $(this).next().addClass("on")
})

$(".sub1_active span").click(function () {
  $("p.sub1_name").removeClass("on")
  $(" p.sub1_active").removeClass("on")
})
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

// $("section").eq(0).find("> div").addClass("on")

$(window).scroll(function () {
  $("section > div").removeClass("on")

  $("section").each(function (i) {
    var secT = $(this).offset().top
    var scrT = $(window).scrollTop()
    // console.log(secT)
    if (secT - 500 <= scrT) {
      $("section").eq(i).find("> div").addClass("on")
    } //if
  }) //each
}) //scroll

// [ each문 이용해서 스크롤 제어하기 ]
$("section").eq(0).find("article").addClass("on")

$(window).scroll(function () {
  $("section>div").removeClass("on")
  $("section").each(function (i) {
    var secT = $(this).offset().top
    console.log(secT)
    var scrT = $(window).scrollTop()
    if (secT - 400 <= scrT) {
      $("section").eq(i).find(">div").addClass("on")
    }
  }) //each
}) //scroll
// 애니

///////////// sub2

///////////// sub3

///////////// sub4
