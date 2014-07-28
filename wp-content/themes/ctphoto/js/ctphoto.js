var currentpage = '';

$(document).ready(function() {
	SetupSlideshow();
	
	SetupMenu();

	$(window).trigger('resize');

	$('.background img').animate({
			opacity: 1
		}, 4000, function() {
		// Animation complete.
	});

	$('.contact p').each(function() {
    	var $this = $(this);

    	if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
        	$this.remove();
	});
});

$(window).load(function() {
	$('.post-item').fadeIn('fast');

	var $container = $('#post-container');

	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 500,
			easing: 'easeInOutExp',
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
				easing: 'easeInOutExp',
				queue: false
			}
		});

		return false;
	});
});

$(window).resize(function(){
	var height = 700;

	if (window.innerWidth <= 1020 && window.innerWidth > 829) {
		height = window.innerWidth * 0.6372;
	} else if (window.innerWidth <= 829) {
		height = window.innerWidth * 0.612;
	} else {
		height = 700;
	}

	$('.slider_container').css('height', height + 30);
	$('.about').css('height', height);
	$('.contact').css('height', height);
	$('.background').css('height', height + 30);
});

function SetupSlideshow() {
	// to do: custom script for slideshow
	$('.slide:first-child').fadeIn(1500, function() {
		$(this).find('.slide_content_wrap').show();
		setTimeout(function() {	$(this).find('.slide_content_wrap .title').fadeIn(1000); }, 300);
		setTimeout(function() { $(this).find('.slide_content_wrap .description').fadeIn(1000); }, 600);
		setTimeout(function() { $(this).find('.slide_content_wrap .readmore').fadeIn(1000); }, 900);
	});
}

function SetupMenu() {
	if (currentpage != '') {
		$('nav * a').removeClass('active');
		$('a[href=$"/' + currentpage + '/"]').addClass('active');
	}
}