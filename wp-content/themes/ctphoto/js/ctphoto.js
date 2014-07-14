var currentpage = '';

$(document).ready(function() {
	SetupSlideshow();
	
	SetupMenu();
});

function SetupSlideshow() {
	$('.slideshow img:gt(0)').hide();
	
    setInterval(function(){
	  $('.slideshow :first-child').next('img').fadeIn('slow');
      $('.slideshow :first-child').fadeOut('slow');
	  $('.slideshow :first-child').appendTo('.slideshow');
	  }, 5000);
}

function SetupMenu()
{
	if (currentpage != '') {
		alert(currentpage);
	}
}