var currentpage = '';

$(window).load(function() {
	$('.post-item').fadeIn('fast');

	var $container = $('#post-container');

	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 500,
			easing: 'linear',
			queue: false
		}
	});

	$('.post-filter a').click(function() {
		$('.post-filter a.active').removeClass('active');

		$(this).addClass('active');

		var selector = $(this).attr('data-filter');

		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});
});

$(document).ready(function() {
	SetupSlideshow();
	
	SetupMenu();
});

function SetupSlideshow() {
	$('.slideshow img:gt(0)').hide();
	
    setInterval(function() {
	  $('.slideshow :first-child').next('img').fadeIn('slow');
      $('.slideshow :first-child').fadeOut('slow');
	  $('.slideshow :first-child').appendTo('.slideshow');
	  }, 5000);
}

function SetupMenu() {
	if (currentpage != '') {
		$('nav * a').removeClass('active');
		$('a[href=$"/' + currentpage + '/"]').addClass('active');
	}
}