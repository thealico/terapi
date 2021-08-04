'use strict';

let dte    = new Date();

var set    = {

 
	'display' 	: true,
	'media' 	: {
		
		'xxl'	: 1400,
		'xl'	: 1200,
		'lg'	: 1170,
		'md'	: 1024,
		'sm'	: 864,
		'xs'	: 568,
		'ms'	: 416
	},

	'win' :{
		
		'y' : null,
		'x' : null
	},
	'doc':{
		
		'y' : null,
		'x'	: null
	},
	
	'page' : {

		'current'			: null,    
		'prev'				: null,    
		'url'				: null,
		'theme' 			: null,
		'upload' 			: null,
		'cat'				: null,    
		'sub'				: null,    
 		'mod'				: null,    
	},
	'user':{
		'media'    		 	: 'lg'
	},
	'reset' 				: false,
	'date'  : {
		ymd : dte.getFullYear() + '-' + (('0' + (dte.getMonth() + 1)).slice(-2))  + '-' + ('0' + (dte.getDate() )).slice(-2),
		dmy : ('0' + (dte.getDate())).slice(-2) + '/' + (('0' + (dte.getMonth() + 1)).slice(-2)) + '/' + dte.getFullYear(),
		y   : dte.getFullYear(),
		m   : ('0' + (dte.getMonth() + 1)).slice(-2),
		d   : ('0' + dte.getDate()).slice(-2),
		g   : dte.getDay()
	}

	
};

