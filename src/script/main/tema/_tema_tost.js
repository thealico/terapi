
function _tema_tost(){

	$('#e-tost').on('click',function(){

		let e = $(this);

		if(!fs.tost) {
			
			$('html').addClass('on-tost un-scr');
			$('header').addClass('on');
			$(e).addClass('on');

			fs.tost = true;
		}
		else{

			$('html').addClass('of-tost');
			$('header').addClass('of');
			

			window.setTimeout(function(){
				
				$('html').removeClass('on-tost of-tost un-scr');
				$('header').removeClass('on of');
				
				$(e).removeClass('on');
				fs.tost = false;	

			},300)


			
		}
	})

}