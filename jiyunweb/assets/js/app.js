(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });
  });
})(jQuery);


$(function(){
  var list =$("#list");
  var lists =$("#lists")
  var template =$("#templates").html();
  var dots=doT.template(template);
  var data={"a":"dsad","ad":"ad"};


  
  alert(data.a[1]);
  list.html(dots('data'));
  lists.html(dots('data'))
  alert(dots(data));

})

