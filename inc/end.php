

	<?php  // include('../common/inc/client/modal/modal-ajax.php'); ?>
	<?php  // include('../common/inc/client/modal/modal-login.php'); ?>
	<?php  // include('../common/inc/client/modal/modal-kayit.php'); ?>
	<?php  // include('../common/inc/client/photoswipe.php'); ?>
	<?php  // include('../common/inc/client/mobil-menu.php'); ?>



	<code id="code-builds">
		<div class="ovrly one" id="ovrly-one"></div>
		<div class="ovrly two" id="ovrly-two"></div>
	</code>


	<code id="code-script">
		
		<script src="<?php path('set.js') ?>"></script>	
		<script>
			
			set.page.url = '<?php echo $url?>';
		  	
		  	<?php 
			  	/* 
				  	set.page.current    		= '{{ current_url}}';
					set.page.url       			= '{{ site_url() }}';
					set.page.theme     			= "{{ theme_url('') }}";
					set.page.cat 				= "{{ cat }}";
					set.page.sub 				= "{{ sub }}";
					set.page.mod 				= "{{ mod }}";
					set.user.login 				=  {{ user ? 'true' : 'false' }}; 
				*/
			?>

		</script>

		<script src="<?php path('all.js') ?>"></script>
		

		<?php 
			/*
			
				<link rel="stylesheet" href="<?php path('libs/tooltips/tooltips.css') ?>">
				<script src="<?php path('libs/tooltips/tooltips.min.js') ?>"></script>
				<script type="text/javascript">

					//var Tooltips = require('tooltips');
					var tips = new Tooltips(document, {
						// tooltip:    {
						// 	effectClass: 'slide'
						// },          
						// Optsions for individual Tooltip instances.
						key:       'tip',  		 // Tooltips data attribute key.
						//showOn:    'mouseenter', // Show tooltip event.
						//hideOn:    'mouseleave', // Hide tooltip event.
						//observe:   0             // Enable mutation observer (used only when supported).
					});
				</script>
			*/
		?>
		 
		<?php 
			/* 
				<script src="<?php path('libs/ripple/ripple.js') ?>"></script>
				<script src="<?php path('libs/slick/slick.js') ?>"></script>
				<script src="<?php path('libs/nano-scroller/nanoscroller.min.js') ?>"></script>
				<script src="<?php path('libs/photoswipe/dist/photoswipe.js') ?>"></script>
				<script src="<?php path('libs/photoswipe/dist/photoswipe-ui-default.min.js') ?>"></script>
				<script src="<?php path('libs/photoswipe/dist/photoswipe-install.js') ?>"></script>
			*/
		?>

		<?php if(isset($set['js'])) : foreach ($set['js'] as $key => $value):?>
		   <script src="<?php path($value) ?>"></script>
		<?php endforeach; endif ?>

		
		<script src="<?php path('app.min.js?v='.time()) ?>"></script>
		
	</code>

</body>




</html>
