<?php

/**
* Wordpress Naked, a very minimal wordpress theme designed to be used as a base for other themes.
*
* @licence LGPL
* @author Darren Beale - http://siftware.co.uk - bealers@gmail.com - @bealers
* 
* Project URL http://code.google.com/p/wordpress-naked/
*/

/**
* naked_nav()
*
* @desc a wrapper for the wordpress wp_list_pages() function that
* will display one or two unordered lists:
* 1) primary nav, a ul with css id #nav - always shown even if empty
* 2) Optional secondary nav, a ul with css id #subNav
*
* @todo default css provided to allow space for both nav 'bars' one below the other to stop the page jig
*
* @param obj post
* @return string (html)
*/
function naked_nav($post = 0)
{
	$output = "";
	$subNav = "";
	$params = "title_li=&depth=2&echo=0&post_type=page&exclude=22";

	// always show top level
	$output .= '<div class="rmm minimal"><ul><li class="home"><a href="' . get_site_url() . '"><img id="logo" src="' . get_template_directory_uri() . '/img/logo.jpg" alt="home logo" /></a></li>';
	$output .= wp_list_pages($params);
	$output .= '</ul></div>';
	return $output;
}

/**
* register_sidebar()
*
*@desc Registers the markup to display in and around a widget
*/
if ( function_exists('register_sidebar') )
{
	register_sidebar(array(
		'before_widget' => '<li id="%1$s" class="widget %2$s">',
		'after_widget' => '</li>',
		'before_title' => '',
		'after_title' => '',
	));
}

/**
* Check to see if this page will paginate
* 
* @return boolean
*/
function will_paginate() 
{
	global $wp_query;

	if ( !is_singular() ) 
	{
		$max_num_pages = $wp_query->max_num_pages;

		if ( $max_num_pages > 1 ) 
		{
			return true;
		}
	}
	return false;
}

add_action( 'wp_enqueue_scripts', 'mysite_enqueue' );

function mysite_enqueue() {
	wp_deregister_script( 'jquery' );
	$_url = get_template_directory_uri();
	wp_enqueue_script( 'jquery', "http://code.jquery.com/jquery-latest.min.js" );
	wp_enqueue_script( 'loaded', "{$_url}/js/loaded.js" );
	wp_enqueue_script( 'browser', "{$_url}/js/browser.js" );
	wp_enqueue_script( 'easing', "{$_url}/js/easing.js" );
	wp_enqueue_script( 'isotope', "{$_url}/js/isotope.js" );
	wp_enqueue_script( 'debounced', "{$_url}/js/debounced.js" );
	wp_enqueue_script( 'menu', "{$_url}/js/menu.js" );
	wp_enqueue_script( 'slider', "{$_url}/js/slider.js" );
	wp_enqueue_script( 'portfolio', "{$_url}/js/portfolio.js" );
	wp_enqueue_script( 'ctphoto', "{$_url}/js/ctphoto.js" );
}


?>