/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ noScroll */



fs.noScroll = false;

function noScroll(action){
	
	if(action) {
		
		fs.noScroll = $(window).scrollTop();
	
		$('#h').addClass('no-scroll');
		
		_pb_destory();
	}
	else {
		
		$('#h').removeClass('no-scroll');
		
		waitForFinalEvent(function(){

			//capa({ hiz:400, top:fs.noScroll });
			
			$(window).scrollTop(fs.noScroll);	
			
			fs.noScroll= false;
			
   		},100, "..");

   		pull_refresh();
	}

}
