<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

<head profile="http://gmpg.org/xfn/11">
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
	<link rel="icon" type="image/png" href="<?php echo get_site_url(); ?>/favicon.png">

	<title><?php wp_title('Chris Thomas Photo | '); //the_title('Chris Thomas Photo | '); ?></title>

	<style type="text/css" media="screen">
		@import url( <?php bloginfo('stylesheet_url'); ?> );
	</style>

	<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="<?php bloginfo('rss2_url'); ?>" />
	<link rel="alternate" type="text/xml" title="RSS .92" href="<?php bloginfo('rss_url'); ?>" />
	<link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="<?php bloginfo('atom_url'); ?>" />

	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<?php
		wp_get_archives('type=monthly&format=link');
		wp_head();
	?>
	
	<script type="text/javascript">
		currentpage = '<?php echo $_SERVER['REQUEST_URI']; ?>';
	</script>
</head>

<body>
    <header>
		<nav>
			<?php print naked_nav($post); ?>
		</nav>
    </header>

    <content>