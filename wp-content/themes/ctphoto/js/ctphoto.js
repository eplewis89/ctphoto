var currentpage = '';

var slideTimer;

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
	$('.slide:first-child').fadeIn(2000, 'easeInSine', function() {}).addClass('active');

	setTimeout(function() { ShowSlide($('.slide:first-child').find('.slide_content_wrap'));	}, 300);

	if($('.slider_container > div').length > 1) {
		$.each($('.slide'), function() {
			$('.bullets').append('<div class="bullet"><i class="fa fa-circle indicators"></i></div>');
		});

		$('.bullets .bullet:first-child').addClass('active');

		$('.indicators').fadeIn(2000, 'easeInSine', function () {});
	}

	Rotate();
}

function Rotate()
{
	clearInterval(slideTimer);
	slideTimer = setInterval(function() { NextSlide(); Rotate(); }, 6000);
}

function NextSlide()
{
	Rotate();
	HideSlide($('.slide.active').find('.slide_content_wrap'));

	var $curDiv = $('.slide.active').removeClass('active').fadeOut(2000, 'easeOutSine', function() {});
	var divs = $curDiv.parent().children();
	divs.eq((divs.index($curDiv) + 1) % divs.length).addClass('active').fadeIn(2000, 'easeOutSine', function() {});

	ShowSlide($('.slide.active').find('.slide_content_wrap'));
}

function PrevSlide()
{
	Rotate();
	HideSlide($('.slide.active').find('.slide_content_wrap'));

	var $curDiv = $('.slide.active').removeClass('active').fadeOut(2000, 'easeOutSine', function() {});
	var divs = $curDiv.parent().children();
	divs.eq((divs.index($curDiv) - 1) % divs.length).addClass('active').fadeIn(2000, 'easeOutSine', function() {});

	ShowSlide($('.slide.active').find('.slide_content_wrap'));
}

function HideSlide(wrap)
{
	$(wrap).hide();

	$(wrap).find('.title').css('opacity', 0);
	$(wrap).find('.description').css('opacity', 0);
	$(wrap).find('.readmore').css('opacity', 0);
}

function ShowSlide(wrap)
{
	$(wrap).show();

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

function LoadGallery(url)
{
    $.ajax({
        type: 'GET',
        tryCount: 0,
        retryLimit: 1,
        async: false,
        url: url,
        dataType: "html",
        success: function (success) {
        	$('lightbox').html(success);
        	$('a[data-rel="lightbox"]').swipebox();
        	$('a[data-rel*="lightbox"]:first-child').click();
        }
    });
}

function LoadVideo(url)
{

}