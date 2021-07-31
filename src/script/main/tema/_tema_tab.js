/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ tema > tab */

function _tema_tab(){
	
	$('.tab-nav a').click(function(e){
		
		var tabgroup   = $(this).data('tab'),
			tabscript  = $(this).data('script') ? $(this).data('script') : false,
			tabindex   = $(this).index();
		
		console.log(tabgroup);
		
		$('.tab-nav a').removeClass('on');
		$(this).addClass('on');


		$('.tab-'+tabgroup+' > *').removeClass('on');
		$('.tab-'+tabgroup+' > *:nth-child('+(tabindex+1)+')').addClass('on');

		if(tabscript) eval(tabscript+"()");

		e.preventDefault();
	})
}