<?php

    /**
    *@desc category page
    */

    get_header();

    $curr_cat_id = (string)get_cat_id(single_cat_title("", false));

    $curr_cat_name = 

    $current_categories = get_the_category();

    $post_category;

    foreach($current_categories as $current_category)
    {
      if((string)$current_category->parent == 0 && (string)$current_category->term_id == $curr_cat_id)
      {
        $post_category = $current_category;

        break;
      }
    }

    if($post_category !== null && (string)$post_category->parent == 0)
    {
      $child_categories = get_categories(array('parent' => $post_category->term_id));
?>
      <div class="post-filter grid">
        <p>filter</p>
        <a href="#" data-filter="*" class="active brackets">All Categories</a>
<?php
        foreach($child_categories as $child_category)
        {
          if($child_category->category_parent == $current_category->cat_ID)
          {
?>
            <a href="#" data-filter=".<?php echo $child_category->slug; ?>" class="brackets"><?php echo $child_category->cat_name; ?></a>
<?php
          }
        }
?>
      </div>
<?php
    }
    else
    {
?>
      <div class="post-filter grid">
        <p><?php echo get_cat_name($curr_cat_id) ?></p>
      </div>
<?php
    }
    
?>
    <div id="post-container" class="grid">
<?php
    if (have_posts())
    {
      while (have_posts()) {
        the_post();
        $sub_category = '';

        foreach((get_the_category()) as $category)
        {
          if($category->category_parent > 0)
          {
            $sub_category .= $category->slug . ' ';
          }
        }
?>
        <div class="post-item <?php echo $sub_category; ?>" id="post-<?php the_ID(); ?>">
          <div class="overlay">
          	<span class="plus">
              <?php if (get_cat_name($curr_cat_id) == "Gallery") { ?>
                <i class="fa fa-camera"></i>
              <?php } else if (get_cat_name($curr_cat_id) == "Videos") { ?>
                <i class="fa fa-youtube-play"></i>
              <?php } ?>
            </span>
          </div>
          <?php the_post_thumbnail(); ?>
          <h1 class="postTitle"><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></a></h1>
        </div>

<?php
      }
    }
    else
    {
?>
      <p class="post-item">No posts here! Try again later.</p>
<?php
    }
?>
    </div>
<?php
    get_footer();
?>