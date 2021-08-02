'use strict';


/*
@ Front-end Developer & UI Designer by alico 
@ http://akman.me */

var fs 				= {}

$(document).ready(function(){



	/*
	@ display  */
 
	if( set.display )
	{

		set.doc.y	= Math.round($(document).height());
		set.doc.x	= Math.round($(document).width());
		
		set.win.y 	= Math.round($(window).height());
		set.win.x	= Math.round($(window).width());

	
		display(false);

		$(window).resize(function(){
			
			set.win.y 	= Math.round($(window).height());
			set.win.x	= Math.round($(window).width());
			
			display(true);
		});		
	}
	

	/*  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Tema  */
	
	tema();

	/*  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Form */
	
 	form_post();
 	form_type();
 	
 	nav_select();
	nav_count();
	
	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Utility  */
		
	kit();
	
	stick(100); 

	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Build > table  */

	//table();

	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Build > Modal Yapilari  */

	// modal();

	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Model   */
	
	
	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ tema  */
	
	fs.context =  new Context();

	_tema_slide();

	//_tema_app_menu();
	//_tema_nav_tab();
	//_tema_context();
	//_tema_info();
	//_tema_side();
	//_tema_app();




	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ pages  */



})
