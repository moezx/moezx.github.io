//capture scroll any percentage
$(window).scroll(function(){
var wintop = $(window).scrollTop(), docheight = 
    
    $(document).height(), winheight = $(window).height();
 			var scrolled = (wintop/(docheight-winheight))*100;
  
  		$('.scroll-line').css('width', (scrolled + '%'));
    
    $('.goTOP').each(function () {
        var gotop = scrolled.toFixed(0)
        $(this).html(gotop + '% <i class="fa fa-arrow-up" aria-hidden="true"></i>');
    });
});
