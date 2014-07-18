jQuery(document).ready(function() { 
	var sidebarWidth = 280;
	var leftOffset = sidebarWidth;
	var $container = jQuery('#portfolio-grid');
	
	$container.imagesLoaded(function(){
		setColumnWidth();
		$container.isotope({
			itemSelector : '.portfolio-item',
			resizable : false,
			transformsEnabled : true
		});
	});
	
	var optionFilter = jQuery('#filter'), optionFilterLinks = optionFilter.find('a');
	
	optionFilterLinks.click(function() {
		if (jQuery(this).hasClass('active')) {
			return false;
		}
		
		var selector = jQuery(this).attr('data-filter');
		$container.isotope({filter : selector});
		optionFilterLinks.removeClass('active');
		jQuery(this).addClass('active');
		return false;
	});
	
	function getNumColumns() {
		var winWidth = jQuery(window).width();
		var column = 3;
		if (winWidth<380) {
			column = 1;
		} else if (winWidth >= 380 && winWidth < 1160) {
			column = 2;
		} else if (winWidth>=1160) {
			column = 3;
		}
		
		return column;
	}
	
	function setColumnWidth() {
		var columns = getNumColumns();
		
		leftOffset = sidebarWidth;
		
		if (jQuery(window).width() < 768) {
			leftOffset = 0;
		}
		
		var containerWidth = jQuery(window).width() - leftOffset;
		var postWidth = containerWidth/columns;
		
		postWidth = Math.floor(postWidth);
		
		jQuery(".portfolio-item").each(function(index) {
			jQuery(this).css({"width":postWidth+"px"});
		});
	}
	
	function arrange() {
		setColumnWidth();
		$container.isotope('reLayout');
	}
	
	jQuery(window).on("debouncedresize", function(event) {
		arrange();
	});
	
	jQuery('a.entry-link').hover(function() {
		jQuery(this).find('.overlay').stop().css({opacity: 0,display: 'block'}).animate({ opacity: 1}, 150);
	}, function() {
		jQuery(this).find('.overlay').stop().fadeOut(150);
	});
}); 