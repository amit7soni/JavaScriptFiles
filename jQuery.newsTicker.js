(function($){
  $.fn.newsTicker = function(options){
    var defaults = {
      scrollSpeed:1000,
      easingType:'easeInOutQuint',
      delayTime:0,
      scrollInterval:5000
    },
    
    settings = $.extend({},defaults,options),
    $this = $(this);
    
    setInterval(function(){
      return $this.children('li:first').delay(settings.delayTime).animate({
        marginTop:'-' + $(this).css('height'),
        opacity:'hide'
        },settings.scrollSpeed,settings.easingType,function(){
          $this.children('li:first').appendTo($this).css('margin-top','0px').fadeIn(500);
        });
    },settings.scrollInterval);
  }
})(jQuery);
