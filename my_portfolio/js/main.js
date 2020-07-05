$(function(){

  //jQueryチェック
  //alert('a');

  $('.humburgerIcon').on('click', function(){

    //ハンバーガーアイコン
    var hum_span = $(this).children('span');

    if(hum_span.hasClass('is-active')) {
      $(hum_span).removeClass('is-active');
      $('.list').removeClass('is-active');
    } else {
      $(hum_span).addClass('is-active');
      $('.list').addClass('is-active');
    }

  });

})

$(window).on('load', function(){

    //ロード画面
    $('.load_title > h1').fadeIn(600);
    $('.load_title').delay(1000).fadeOut(2000);

});

$(window).on('scroll', function(){

  //Topボタン
  if($(window).scrollTop() > 200) {
    $('.home_btn').addClass('is-active')
  } else {
    $('.home_btn').removeClass('is-active');
  }

  $('[data-fadeIn]').each(function(index, el) {
    if($(window).scrollTop() > ($(el).offset().top) - 250) {
      $(el).addClass('is-active');
    }
  });

  $('[data-section]').each(function(index, el){

    var $list_item = $(el).attr('class').split(" ")[0];
    var $yellow_item = $(`[data-yellow="${$list_item}"]`);

    if($(window).scrollTop() >= ($(el).offset().top)) {
      $yellow_item.addClass('is-active');
      $yellow_item.siblings('li').removeClass('is-active');
    }
  });

});
