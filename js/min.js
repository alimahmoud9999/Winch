$(window).on('load',function(){
  $('.loder').fadeOut('3000');
})

$(document).ready(function(){
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
    adaptiveHeight:true,
    item:1,
    slideMargin:0,
    loop:true,
    enableDrag:false,

});

///AddClass Active Sec4
$('.list-sec4 li').on('click', function(){
  $(this).addClass('active').siblings().removeClass('active');
})

///Tabs Sec4
$('.my-content:not(:first)').hide();
$('.list-sec4 li').on('click',function(){
var myid = $(this).attr("id");
$('.my-content').hide();
$('#'+myid+"-contetnt").fadeIn();
console.log(myid);
});

});
