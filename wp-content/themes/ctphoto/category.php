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
        <a href="#" data-filter="*" class="active">All Categories</a>
<?php
        foreach($child_categories as $child_category)
        {
          if($child_category->category_parent == $current_category->cat_ID)
          {
?>
            <a href="#" data-filter=".<?php echo $child_category->slug; ?>"><?php echo $child_category->cat_name; ?></a>
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
        <p>category: <?php echo get_cat_name($curr_cat_id) ?></p>
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
          <img src="" height="250px" width="300px" alt="picture" />
          <h1 class="postTitle"><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></a></h1>
          <p class="postMeta"><?php edit_post_link(__('Edit'), ''); ?></p>
        </div>

<?php
      }
    }
    else
    {
?>
      <p>Sorry, no posts matched your criteria.</p>
<?php
    }
?>
    </div>
<?php
    get_footer();
?>