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

///////////// sub3

///////////// sub4
