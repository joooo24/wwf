///////////// index

///////////// sub1

$(".sub1_sect6 ul li").mouseenter(function () {
  $(this).find("img").addClass("on")
  $(this)
    .find(".sub1_name")
    .animate({ color: "#f8be03" }, function () {
      $(this).closet(".sub1_nametxt").animate({ backgroundColor: "#f8be03" })
    })
})
$(".sub1_sect6 ul li").mouseleave(function () {
  $(this).find("img").removeClass("on")
  $(this).find(".sub1_name").css({ color: "#fff" })
})

///////////// sub2

///////////// sub3

///////////// sub4
