<?php
  /*
  Template Name: About Page
  */
  get_header();

  while (have_posts()) :
    the_post();      
?>
    <div class="background">
      <?php the_post_thumbnail('full'); ?>
    </div>
    <div class="about">
      <div class="aboutright">
        <h3>About Me</h3>
        <div class="post-content">
          <p><?php the_content(); ?></p>
        </div>
      </div>
    </div>
<?php
  endwhile;
    
  get_footer();
?>