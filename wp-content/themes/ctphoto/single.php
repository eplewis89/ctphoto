<?php

  /**
  *@desc A single blog post See page.php is for a page layout.
  */

  if (have_posts()):
    while (have_posts()) : the_post();

      the_content();
    if( is_category( 'gallery' ) ) {
      //the_content();
    } elseif( is_category( 'videos' ) ) {
      //get_template_part( 'template_name' );
    }

    endwhile;

  else: ?>

		<img src="http://httpcats.herokuapp.com/404" alt="404 - Not Found" />

<?php
  endif;
?>