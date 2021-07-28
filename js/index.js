$('.btnMenu').on('click', function(){
    $(this).fadeOut()
    $('nav').addClass('on')
    $('section').addClass('on')
})

$('#gnb li a').on('click', function(e){
    e.preventDefault()
    $('nav').removeClass('on')
    $(".btnMenu").fadeIn(800)
    $('section').removeClass('on')
    let num = $(this).parent().index()
    $("section > div").eq(num).siblings().removeClass('on')
    $("section > div").eq(num).addClass('on')

})