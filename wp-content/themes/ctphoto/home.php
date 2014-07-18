<?php
/*
Template Name: Home Page
*/
get_header();

while (have_posts()) :
	the_post();      
	the_content();?>
	
	<?php if (get_field('include_two_columns')) : ?>
	<div class="grid">
		<?php if (!empty(get_field('left_column_title'))) : ?>
		<div class="gridleft">
			<h3><?php echo get_field('left_column_title'); ?></h3>
			<?php echo get_field('left_column'); ?>
		</div>
		<?php endif; ?>
		<?php if (!empty(get_field('right_column_title'))) : ?>
		<div class="gridright">
			<h3><?php echo get_field('right_column_title'); ?></h3>
			<?php echo get_field('right_column'); ?>
		</div>
		<?php endif; ?>
	</div>
	<?php endif; ?>
	
<?php endwhile;
	
get_footer();

?>