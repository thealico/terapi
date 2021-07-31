<?php 

	//$url		=	'http://127.0.0.1/yeniben/';
	//$url		=	'http://localhost/';
	//$url		=	'https://akman.me/octopus/';
	//$url		=	'http://localhost/ey/octopus/';
	//$url		=	'http://localhost.loc/';
	$url		=	'http://localhost/works/terapi/';
	//$url		=	'http://alico.me/atolye/project/zerobuffer/yeniben/';
	
		
	function path($file='',$don=false)
	{
		global $url ;


		
		//$url		=	'http://127.0.0.1/htm/zerobuffer/yeniben/';
		if( isset($don) && $don==true) 
		{
			$a= $url.'dist/'.$file;
			return $a;
		}
		else
		{
			
			echo $url.'dist/'.$file;
		}
	}
	
	
	
?>