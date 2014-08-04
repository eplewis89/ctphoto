<?php
	/**
	 * Include the TGM_Plugin_Activation class.
	 */
	require_once dirname( __FILE__ ) . '/class-tgm-plugin-activation.php';

	add_action( 'tgmpa_register', 'my_theme_register_required_plugins' );

	/**
	 * Register the required plugins for this theme.
	 *
	 * In this example, we register two plugins - one included with the TGMPA library
	 * and one from the .org repo.
	 *
	 * The variable passed to tgmpa_register_plugins() should be an array of plugin
	 * arrays.
	 *
	 * This function is hooked into tgmpa_init, which is fired within the
	 * TGM_Plugin_Activation class constructor.
	 */
	function my_theme_register_required_plugins() {

	    /**
	     * Array of plugin arrays. Required keys are name and slug.
	     * If the source is NOT from the .org repo, then source is also required.
	     */
	    $plugins = array(
	        array(
	            'name'      => 'Advanced Custom Fields',
	            'slug'      => 'advanced-custom-fields',
	            'required'  => false
	        ),
	        array(
	            'name'      => 'Askimet',
	            'slug'      => 'askimet',
	            'required'  => false
	        ),
	        array(
	            'name'      => 'Better WordPress reCAPTCHA',
	            'slug'      => 'bwp-recaptcha',
	            'required'  => false
	        ),
	        array(
	            'name'      => 'Contact Form 7',
	            'slug'      => 'contact-form-7',
	            'required'  => false
	        ),
	        array(
	            'name'      => 'Stealth Login Page',
	            'slug'      => 'stealth-login-page',
	            'required'  => false
	        ),
	        array(
	            'name'               => 'WordPress Slider Plugin',
	            'slug'               => 'simple-slider-ssp',
	            'source'             => get_stylesheet_directory() . '/lib/plugins/simple-slider-ssp.zip',
	            'required'           => true,
	            'version'            => '',
	            'force_activation'   => false,
	            'force_deactivation' => false,
	            'external_url'       => ''
	        ),
	        array(
	            'name'      => 'WP No Category Base',
	            'slug'      => 'wp-no-category-base',
	            'required'  => false,
	        )
	    );

	    /**
	     * Array of configuration settings. Amend each line as needed.
	     * If you want the default strings to be available under your own theme domain,
	     * leave the strings uncommented.
	     * Some of the strings are added into a sprintf, so see the comments at the
	     * end of each line for what each argument will be.
	     */
	    $config = array(
	        'id'           => 'tgmpa',                 // Unique ID for hashing notices for multiple instances of TGMPA.
	        'default_path' => '',                      // Default absolute path to pre-packaged plugins.
	        'menu'         => 'tgmpa-install-plugins', // Menu slug.
	        'has_notices'  => true,                    // Show admin notices or not.
	        'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
	        'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
	        'is_automatic' => false,                   // Automatically activate plugins after installation or not.
	        'message'      => '',                      // Message to output right before the plugins table.
	        'strings'      => array(
	            'page_title'                      => __( 'Install Required Plugins', 'tgmpa' ),
	            'menu_title'                      => __( 'Install Plugins', 'tgmpa' ),
	            'installing'                      => __( 'Installing Plugin: %s', 'tgmpa' ), // %s = plugin name.
	            'oops'                            => __( 'Something went wrong with the plugin API.', 'tgmpa' ),
	            'notice_can_install_required'     => _n_noop( 'This theme requires the following plugin: %1$s.', 'This theme requires the following plugins: %1$s.', 'tgmpa' ), // %1$s = plugin name(s).
	            'notice_can_install_recommended'  => _n_noop( 'This theme recommends the following plugin: %1$s.', 'This theme recommends the following plugins: %1$s.', 'tgmpa' ), // %1$s = plugin name(s).
	            'notice_cannot_install'           => _n_noop( 'Sorry, but you do not have the correct permissions to install the %s plugin. Contact the administrator of this site for help on getting the plugin installed.', 'Sorry, but you do not have the correct permissions to install the %s plugins. Contact the administrator of this site for help on getting the plugins installed.', 'tgmpa' ), // %1$s = plugin name(s).
	            'notice_can_activate_required'    => _n_noop( 'The following required plugin is currently inactive: %1$s.', 'The following required plugins are currently inactive: %1$s.', 'tgmpa' ), // %1$s = plugin name(s).
	            'notice_can_activate_recommended' => _n_noop( 'The following recommended plugin is currently inactive: %1$s.', 'The following recommended plugins are currently inactive: %1$s.', 'tgmpa' ), // %1$s = plugin name(s).
	            'notice_cannot_activate'          => _n_noop( 'Sorry, but you do not have the correct permissions to activate the %s plugin. Contact the administrator of this site for help on getting the plugin activated.', 'Sorry, but you do not have the correct permissions to activate the %s plugins. Contact the administrator of this site for help on getting the plugins activated.', 'tgmpa' ), // %1$s = plugin name(s).
	            'notice_ask_to_update'            => _n_noop( 'The following plugin needs to be updated to its latest version to ensure maximum compatibility with this theme: %1$s.', 'The following plugins need to be updated to their latest version to ensure maximum compatibility with this theme: %1$s.', 'tgmpa' ), // %1$s = plugin name(s).
	            'notice_cannot_update'            => _n_noop( 'Sorry, but you do not have the correct permissions to update the %s plugin. Contact the administrator of this site for help on getting the plugin updated.', 'Sorry, but you do not have the correct permissions to update the %s plugins. Contact the administrator of this site for help on getting the plugins updated.', 'tgmpa' ), // %1$s = plugin name(s).
	            'install_link'                    => _n_noop( 'Begin installing plugin', 'Begin installing plugins', 'tgmpa' ),
	            'activate_link'                   => _n_noop( 'Begin activating plugin', 'Begin activating plugins', 'tgmpa' ),
	            'return'                          => __( 'Return to Required Plugins Installer', 'tgmpa' ),
	            'plugin_activated'                => __( 'Plugin activated successfully.', 'tgmpa' ),
	            'complete'                        => __( 'All plugins installed and activated successfully. %s', 'tgmpa' ), // %s = dashboard link.
	            'nag_type'                        => 'updated' // Determines admin notice type - can only be 'updated', 'update-nag' or 'error'.
	        )
	    );

	    tgmpa( $plugins, $config );

	}

	if ( function_exists( 'add_theme_support' ) ) {
		add_theme_support( 'nav-menus' );
		add_theme_support( 'post-thumbnails' );
	}

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
		$home = '<li class="home"><a href="' . get_site_url() . '"><img id="logo" src="' . get_template_directory_uri() . '/img/logo.png" alt="home logo" />';

		$args = array(
	                'menu'            => 'main-menu', 
	                'container'       => '', 
	                'container_class' => 'false', 
	                'container_id'    => '',
	                'menu_class'      => '', 
	                'echo'            => true,
	                'fallback_cb'     => 'wp_page_menu',
	                'before'          => '',
	                'after'           => '',
	                'items_wrap'      => '<div class="rmm minimal"><ul>' . $home . '%3$s</ul></div>',
	                'depth'           => 0,
	      );

		return wp_nav_menu($args);
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

	add_filter('post_gallery', 'my_post_gallery', 10, 2);

	function my_post_gallery($output, $attr) {
	    global $post;

	    if (isset($attr['orderby'])) {
	        $attr['orderby'] = sanitize_sql_orderby($attr['orderby']);
	        if (!$attr['orderby'])
	            unset($attr['orderby']);
	    }

	    extract(shortcode_atts(array(
	        'order' => 'ASC',
	        'orderby' => 'menu_order ID',
	        'id' => $post->ID,
	        'itemtag' => 'dl',
	        'icontag' => 'dt',
	        'captiontag' => 'dd',
	        'columns' => 3,
	        'size' => 'thumbnail',
	        'include' => '',
	        'exclude' => ''
	    ), $attr));

	    $id = intval($id);

	    if ('RAND' == $order) $orderby = 'none';

	    if (!empty($include)) {
	        $include = preg_replace('/[^0-9,]+/', '', $include);
	        $_attachments = get_posts(array('include' => $include, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby));

	        $attachments = array();

	        foreach ($_attachments as $key => $val) {
	            $attachments[$val->ID] = $_attachments[$key];
	        }
	    }

	    if (empty($attachments)) return '<a href="//httpcats.herokuapp.com/404" data-rel="lightbox"><img src="//httpcats.herokuapp.com/404" alt="404 - Not Found" title="404 - Not Found" /></a>';

	    // Here's your actual output, you may customize it to your need
	    $output = "";

	    // Now you loop through each attachment
	    foreach ($attachments as $id => $attachment) {
	        // Fetch the thumbnail (or full image, it's up to you)
	        $img = wp_get_attachment_image_src($id, 'full');

	        $output .= "<a href=\"{$img[0]}\" rel=\"lightbox\" data-rel=\"lightbox\">\n";
	        $output .= "<img src=\"{$img[0]}\" width=\"{$img[1]}\" height=\"{$img[2]}\" alt=\"\" />\n";
	        $output .= "</a>\n";
	    }

	    return $output;
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
		wp_enqueue_script( 'lightbox', "{$_url}/js/lightbox.js" );
		wp_enqueue_script( 'portfolio', "{$_url}/js/portfolio.js" );
		wp_enqueue_script( 'ctphoto', "{$_url}/js/ctphoto.js" );
	}

	function get_custom_cat_template($single_template) {
		global $post;

		if ( in_category( 'gallery' )) {
			$single_template = dirname( __FILE__ ) . '/single-gallery.php';
		} elseif ( in_category( 'videos')) {
			$single_template = dirname( __FILE__ ) . '/single-video.php';
		}

		return $single_template;
	}
	 
	add_filter( "single_template", "get_custom_cat_template" ) ;
?>