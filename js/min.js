$(window).on('load', function() {
  $('.loder').fadeOut('3000');
})

$(document).ready(function() {
  $('.carousel').carousel({
    interval: 2000
  })
  $("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "flipInX",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    // separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000
  });
  $("#js-rotating2").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "flipInX",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    // separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000
  });
  $("#js-rotating3").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "flipInX",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    // separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000
  });
  $("#js-rotating4").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "flipInX",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    // separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000
  });

  $('#lightSlider').lightSlider({
    adaptiveHeight: true,
    item: 1,
    slideMargin: 0,
    loop: true,
    enableDrag: false,

  });

  ///AddClass Active Sec4
  $('.list-sec4 li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  })

  ///Tabs Sec4
  $('.my-content:not(:first)').hide();
  $('.list-sec4 li').on('click', function() {
    var myid = $(this).attr("id");
    $('.my-content').hide();
    $('#' + myid + "-contetnt").fadeIn();
    console.log(myid);
  });
  ///Tabs Sec4

  $('.my-contente:not(:first)').hide();
  $('.list-sec4 li').on('click', function() {
    var myid = $(this).attr("id");
    $('.my-contente').hide();
    $('#' + myid + "-contetnte").fadeIn();
    console.log(myid);
  });

  // Add Class Active HElP Center
  $('.ctrate-tab .tabs li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
  //Tabs HELP CENTER page

  $('.ctrate-tab .tabs li').on('click', function() {
    const myId = $(this).attr('id');
    $('.ctrate-tab .all-tabs img').hide();
    $("#" + myId + "-content").fadeIn();
  });

  // Add Class Active HElP Center
  $('.tabs2 li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('.tabs3 li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
  //Tabs HELP CENTER page

  $('.tabs2 li').on('click', function() {
    const myId = $(this).attr('id');
    $('.ctrate-tab2 .all-tabs img').hide();
    $("#" + myId + "-contente").fadeIn();
  });

  $('.tabs3 li').on('click', function() {
    const myId = $(this).attr('id');
    $('.ctrate-tab3 .all-tabs img').hide();
    $("#" + myId + "-contentee").fadeIn();
  });

  //Scroll To elment
  // $('.box-fixed ul li').on('click',function(){
  //   $(this).addClass('active').siblings().removeClass('active');
  // });

  $('.box-fixed ul li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('html , body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
    }, 1000);
  });

  $(window).scroll(function() {
    $('.block').each(function() {
      if ($(window).scrollTop() > $(this).offset().top) {
        var blockID = $(this).attr('id');
        $('.box-fixed ul li[data-scroll="' + blockID + '"]').addClass('active').siblings().removeClass('active');
      }
    })
  });

  var myhight = $(window).height();
  var myheader =  parseInt($('.header-help-center').height());
  // var mybox = $('.box-fixed');
  console.log(myhight);
  console.log(myheader);

  $(window).scroll(function(){

    if ($(window).scrollTop() > myheader) {
      $('.box-fixed').css({
        top: 100 ,
      });
    }
    else{
      $('.box-fixed').css({
        top: '53%' ,
      });
    }
  });
});
