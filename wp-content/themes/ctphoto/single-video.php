<?php

  /**
  *@desc A single blog post See page.php is for a page layout.
  */

  if (have_posts()):
    while (have_posts()) : the_post();

      $post = get_post();

      $link = $post->post_content;

      $href = '';

      preg_match_all('/<a[^>]+href=([\'"])(.+?)\1[^>]*>/i', $link, $result);

      if (!empty($result)) {
          # Found a link.
          $href = $result[2][0];
      }

      if (strpos($href, 'vimeo') !== false) {
        echo '<a href="' . $href . '" rel="vimeo" data-rel="lightbox">vimeo</a>';
      } elseif (strpos($href, 'youtu') !== false) {
        parse_str( parse_url( $href, PHP_URL_QUERY ), $yt_vars );
        echo '<a class="swipebox-video" href="http://youtu.be/' . $yt_vars['v'] . '" rel="youtube" data-rel="lightbox">youtube</a>';
      } else {
        echo $post->post_content;
      }

    endwhile;

  else: ?>

		<a href="//httpcats.herokuapp.com/404" data-rel="lightbox"><img src="//httpcats.herokuapp.com/404" alt="404 - Not Found" title="404 - Not Found" /></a>

<?php
  endif;
?>