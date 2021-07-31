/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ Tema Update   */

function mediasizemod(resize){
	
		
	var j = 'ms' ; 									// 0376
	
	j = set.win.x > set.media.ms ?  'xs' : j ;  	// 0568
	j = set.win.x > set.media.xs ?  'sm' : j ;		// 0768
	j = set.win.x > set.media.sm ?  'md' : j ;		// 1024
	j = set.win.x > set.media.md ?  'lg' : j ;		// 1280
	
	set.user.media = j ;
	//console.log(set.user.media);
}