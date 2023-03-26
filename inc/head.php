<?php include('set.php'); ?>
<!DOCTYPE HTML>
<html lang="tr" class="tr no-js">
	
	<head>
		<meta charset="UTF-8">
		<title></title>

		<meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no">
		
		<?php
		/*
		<link rel="stylesheet" href="<?php path('libs/slick/slick.css') ?>" />
		<link rel="stylesheet" href="<?php path('libs/photoswipe/dist/photoswipe.css') ?>" />
		<link rel="stylesheet" href="<?php path('libs/photoswipe/dist/default-skin/default-skin.css') ?>" />
		*/
		?>
		
		<?php if(isset($set['css'])) : foreach ($set['css'] as $key => $value): ?>
			<link rel="stylesheet" href="<?php path($value) ?>" />
		<?php endforeach; endif ?>

		<link rel="stylesheet" href="<?php path('bootstrap/css/_bootstrap.min.css') ?>" />
		<link rel="stylesheet" href="<?php path('app.min.css') ?>" />
	
	</head>


	<body class="<?php echo $set['class'] ?>">