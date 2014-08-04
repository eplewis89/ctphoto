<?php

  /**
  *@desc A single blog post See page.php is for a page layout.
  */

  if (have_posts()):
    while (have_posts()) : the_post();

      the_content();

    endwhile;

  else: ?>

    <a href="//httpcats.herokuapp.com/404" data-rel="lightbox"><img src="//httpcats.herokuapp.com/404" alt="404 - Not Found" title="404 - Not Found" /></a>

<?php
  endif;
?>