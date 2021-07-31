/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ Screen */

function screen(is,no){
	
	no = !no ? 'one' : no;
	var cs = 'ovrly-'+no;
		
	if(is) $('html').addClass(cs); else $('html').removeClass(cs);
}