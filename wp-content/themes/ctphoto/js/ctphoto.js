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
	$('.slide:first-child').fadeIn(2000, 'easeInSine', function() {});

	setTimeout(function() {
		var wrap = $('.slide:first-child').find('.slide_content_wrap');

		$(wrap).show();

		$(wrap).find('.title').animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeInSine' });

		setTimeout(function() { $(wrap).find('.description').animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeInSine' }) }, 300);
		setTimeout(function() { $(wrap).find('.readmore').animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeInSine' }) }, 600);
	}, 300);

	if($('.slider_container > div').length > 1) {
		$.each($('.slide'), function() {
			$('.bullets').append('<div class="bullet"><i class="fa fa-circle indicators"></i></div>');
		});

		$('.bullets .bullet:first-child').addClass('active');

		$('.indicators').fadeIn(2000, 'easeInSine', function () {});
	}
}

function NextSlide()
{

}

function PrevSlide()
{

}

function ShowSlide(wrap)
{
	$(wrap).find('.slide_content_wrap').show();

	$(wrap).find('.title').animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeInSine' });

	setTimeout(function() { $(wrap).find('.description').animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeInSine' }) }, 300);
	setTimeout(function() { $(wrap).find('.readmore').animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeInSine' }) }, 600);
}

function SetupMenu() {
	if (currentpage != '') {
		$('nav * li').removeClass('active');

		$('li a[href$="' + currentpage + '"]').parent().addClass('active');

		if($('ul > li.active').parent().hasClass('sub-menu')) {
			$('ul > li.active').parent().parent().addClass('active');
		}
	}
}