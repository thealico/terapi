function _tema_form_box(){

	$(form.e).find('.notification button').click(function(){
		
		$(form.e).addClass('off');

		window.setTimeout(function(){
			$(form.e).removeClass('send-on nosent posted off');  
			$('html').removeClass(form.name+'-nosent');
			
			//screen(false);

   		},500);

	})
}