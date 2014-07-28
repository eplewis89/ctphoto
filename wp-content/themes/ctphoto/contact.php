<?php
/*
Template Name: Contact Page
*/
get_header();

while (have_posts()) :
	the_post();      ?>
	<div class="contact">
		<?php the_content(); ?>
	</div>
<?php
  endwhile;
    
  get_footer();
?>