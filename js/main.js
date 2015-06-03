'use strict';

$( window ).resize(function() {
  var h = $( window ).height();
  //console.log("Resize happened. Height = " + h + " px");
  h = h - 70;
  var items_to_fit = (h - (h % 58)) / 58;
  //console.log("Can fit = " + items_to_fit );
  var menu_h = items_to_fit * 58;
  $("#navbar").css("max-height", (menu_h+"px"));
  
});

$(".scroll").click(function(event){
     event.preventDefault();
     //calculate destination place
     var dest=0;
     if($(this.hash).offset().top > $(document).height()-$(window).height()){
          dest=$(document).height()-$(window).height();
     }else{
          dest=$(this.hash).offset().top;
     }
     //go to destination
     $('html,body').animate({scrollTop:(dest - 100)}, 1000,'swing');
});

$('.nav-alice').find('a').click(function(event){
	var visibility = $('.navbar-toggle').css('display');
	console.log("visibility" + visibility);
	//$('.nav-alice').collapse('hide');
	if(!(visibility.localeCompare('none') == 0)) {
		$('.navbar-toggle').click();
	}
})

