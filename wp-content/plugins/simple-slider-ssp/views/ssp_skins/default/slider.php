<?php
/**
Plugin Name: Default Skin
**/
?>
<div class="slider" id="slider">
	<div class="slider_container">
	<?php foreach( $slides as $slide ):	?>
	<div class="slide">
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
	<?php endforeach; ?>
	</div>
	<?php if (count($slides) > 1) { ?>
		<div class="slidePrev"><i class="fa fa-chevron-left"></i></div>
		<div class="slideNext"><i class="fa fa-chevron-right"></i></div>
		<div class="timers" style="display:none;"></div>
		<div class="bullets"></div>
	<?php } ?>
</div>