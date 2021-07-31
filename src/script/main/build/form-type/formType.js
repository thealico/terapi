function form_type(){


	if ($().datepicker) { 

		$('.datepicker-here.go').datepicker({
			
			onSelect: function(formattedDate, date, inst) {
				var url = $(inst.el).data('perma')+'/'+formattedDate;
				window.location = url;
			}
			
		})
	}

	
	$(document).on('focus','.field-find input',function(){
		// console.log('focus');
		$(this).parent().addClass('focus');
	})

	$(document).on('blur','.field-find input',function(){
		
		// console.log('blur 0');

		let e = $(this).parent();
		window.setTimeout(function(){
			// console.log('bulur 1');
			$(e).removeClass('focus');
		},200) 		

	})

	$(document).on('click','.field-find .find-reset',function(){

		_find_reset({
			
			js   : ($(this).attr('js') ? true : false),
			rel  : $(this).attr('rel')
		});

	})


	// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

	$(document).on('click','.e-val',function(){

		$($(this).attr('rel')).val($(this).attr('value'));
	})

	// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

	$(document).on('click','input.check',function(event){
		
		event.stopPropagation();

		var el = $(this).parent();
		
		if($(this).is(':checked')){

			$(this).prop( "checked",true);
			$(el).addClass('on');
		}
		else{
			
			$(this).prop( "checked",false);
			$(el).removeClass('on');	
		}
	})


	
	// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	
	$(document).on('click','mask-switch',function(event){

		event.stopPropagation();
	
	 	if ( !$(this).hasClass('on') ) {

	    	$('#field-'+$(this).data('name')).prop('checked', true);
			$(this).children('s').text('ON');
	    	$(this).addClass('on');
	   	}
	  	else { 

	    	$('#field-'+$(this).data('name')).prop('checked', false);
			$(this).children('s').text('OFF');
	    	$(this).removeClass('on');
	  	}
	})

	// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

	$(document).on('click','input.radio',function(){
		
		if($(this).is(':checked'))
		{
			name= $(this).attr('name');
			
			$('input[name="'+name+'"]').parent().removeClass('on');;
			$(this).parent().addClass('on');
		}
		else
		{
			$(this).parent().removeClass('on');	
		}
	})
	
	// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	
	__ft_input_load();

	// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

	
	
	$(document).on('blur','input.e-upper',function(event){

		var str = $(this).val(),
		words   = str.split(' '),
		newstr  = new Array();
	  
		$.each(words, function(i, word){ 
			newstr[i] = word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
		})

		$(this).val(newstr.join(' '));
	});

	$(document).on('blur','.e-emoji-unset',function(event){

		$(this).val(un_emoji($(this).val()));
	})
	
}

function un_emoji (string) {
  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
  return string.replace(regex, '');
}

function uppertext(e){

	var str = $(e).val(),
	words   = str.split(' '),
	newstr  = new Array();
  
	$.each(words, function(i, word){ 
		newstr[i] = word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
	})

	$(e).val(newstr.join(' '));
}


function __ft_input_load(){

	if ($().mask) { 
		
		
		$('input.mask-money[onda=4]').mask('#.##0,0000',{reverse: true});
		$('input.mask-money[onda=2]').mask('#.##0,00',{reverse: true});

		$("input.mask-phone").mask("0(999) 999 99 99");
		$("input.mask-birth").mask("99.99.9999");
		//$("input.mask-number").mask("999");
		//$('.mask-num').mask('##0');
		$('.mask-num[maxlength=5]').mask('99999');
		$('.mask-num[maxlength=4]').mask('9999');
		$('.mask-num[maxlength=3]').mask('999');
		$('.mask-num[maxlength=2]').mask('999');
		$('.mask-num[maxlength=1]').mask('999');
		
		$('.mask-cek').mask("999 99 99"); //{reverse: true}

	}

	/*
	if ($().inputmask) { 
	

		$("input.numeric").inputmask("numeric"); 	
		$("input").inputmask();
	}
	*/


	if ($().numeric) {
		
		$("input.numeric").numeric();	 
	}

}