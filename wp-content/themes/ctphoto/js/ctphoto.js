var currentpage = '';

$(document).ready(function() {
	SetupSlideshow();
	
	SetupMenu();

	$(window).trigger('resize');
});

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
			},
		    masonry: {
		      columnWidth: 100
		    }
		});

		return false;
	});
});

$(window).resize(function(){
	var height = 650;

	if (window.innerWidth <= 1020 && window.innerWidth > 829) {
		height = window.innerWidth * 0.6372;
	} else if (window.innerWidth <= 829) {
		height = window.innerWidth * 0.612;
	} else {
		height = 650;
	}

	$('.about').css('height', height);
	$('.background').css('height', height + 30);
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