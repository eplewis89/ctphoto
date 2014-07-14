/*

Responsive Mobile Menu v1.0
Plugin URI: responsivemobilemenu.com

Author: Sergio Vitov
Author URI: http://xmacros.com

License: CC BY 3.0 http://creativecommons.org/licenses/by/3.0/

*/

var currentMenuTitle = "Chris Thomas Photo";

function responsiveMobileMenu() {	
	$('.rmm').each(function() {
		$(this).children('ul').addClass('rmm-main-list');	// mark main menu list
		
		$(this).addClass($(this).attr('data-menu-style'));
				
		/* 	width of menu list (non-toggled) */
		var $width = 0;
		
		$(this).find('ul li').each(function() {
			$width += $(this).outerWidth();
		});
			
		// if modern browser
		if ($.support.leadingWhitespace) {
			$(this).css('max-width' , '830px');
		} else {
			$(this).css('width' , $width*1.05+'px');
		}
	});
}

function getMobileMenu() {
	/* 	build toggled dropdown menu list */
	$('.rmm').each(function() {	
		var $menulist = $(this).children('.rmm-main-list').html();

		var $menucontrols = "<div class='rmm-toggled-controls'><div class='rmm-toggled-title'>"
			+ currentMenuTitle + "</div><div class='rmm-button'><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div></div>";
			
		$(this).prepend("<div class='rmm-toggled rmm-closed'>"+$menucontrols+"<ul>"+$menulist+"</ul></div>");
	});
}

function adaptMenu() {
	/* 	toggle menu on resize */
	
	$('.rmm').each(function() {
			var $width = 830;//$(this).css('max-width');
			//$width = $width.replace('px', ''); 
			if ( $(this).parent().width() < $width ) {
				$(this).children('.rmm-main-list').hide(0);
				$(this).children('.rmm-toggled').show(0);
			}
			else {
				$(this).children('.rmm-main-list').show(0);
				$(this).children('.rmm-toggled').hide(0);
			}
		});
		
}

$(function() {

	 responsiveMobileMenu();
	 getMobileMenu();
	 adaptMenu();
	 
	 /* slide down mobile menu on click */
	 
	 $('.rmm-toggled, .rmm-toggled .rmm-button').click(function(){
	 	if ( $(this).is(".rmm-closed")) {
		 	$('.rmm-toggled ul').stop().show(300);
			$('.rmm-toggled ul ul').hide();
		 	$(this).removeClass("rmm-closed");
	 	}
	 	else {
		 	$('.rmm-toggled ul').stop().hide(300);
		 	$(this).addClass("rmm-closed");
	 	}
		
	});	

});
	/* 	hide mobile menu on resize */
$(window).resize(function() {
 	adaptMenu();
});