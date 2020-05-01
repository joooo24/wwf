///////////// index

///////////// sub1

///////////// sub2

///////////// sub3

$('.S3-name li').click(function(e){
    e.preventDefault()
    var S3in = $(this).index()
    $(this).closest('section').find('.S3-m-title li').removeClass('on')
    $(this).closest('section').find('.S3-m-title li').removeClass('on')
    $(this).closest('section').find('.S3-m-title li').eq(S3in).addClass('on')
})

///////////// sub4
