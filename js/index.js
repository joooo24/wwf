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

///////////// sub3

///////////// sub4
