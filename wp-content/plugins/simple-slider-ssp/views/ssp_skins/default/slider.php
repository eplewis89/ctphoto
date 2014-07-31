<?php
/**
Plugin Name: Default Skin
**/

$index = 0;

?>
<div class="slider" id="slider">
	<div class="slider_container">
	<?php foreach( $slides as $slide ):	?>

	<div class="slide slide-numero-<?php echo $index; ?>">
		<img src="<?php echo $slide['image']['url']; ?>" alt="<?php echo $slide['image']['alt'] ?>" />
		<div class="slide_content">
			<div class="slide_content_wrap">
				<h4 class="title"><?php echo $slide['image']['title'] ?></h4>               
				<p class="description"><?php echo $slide['image']['alt'] ?></p>
				<?php if ( $slide['image']['link'] != '' ): ?>
					<a class="readmore" href="<?php echo $slide['image']['link'] ?>">Read More</a>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<?php 
		$index++;
		
		endforeach;
	?>
	</div>
	<?php if (count($slides) > 1) { ?>
		<div class="slidePrev"><i class="fa fa-chevron-left indicators"></i></div>
		<div class="slideNext"><i class="fa fa-chevron-right indicators"></i></div>
		<div class="bullets"></div>
	<?php } ?>
</div>