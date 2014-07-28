<?php
/*
Template Name: Contact Page
*/
get_header();

	while (have_posts()) :
		the_post();
?>
    <div class="background">
      <?php the_post_thumbnail('full'); ?>
    </div>
    <div class="contact">
      <div class="contactleft">
        <h3>Contact Me</h3>
        <div class="post-content">
          <p><?php the_content(); ?></p>
        </div>
      </div>
    </div>
<?php
	endwhile;
    
	get_footer();
?>