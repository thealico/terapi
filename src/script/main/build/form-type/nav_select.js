
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/* @ nav select : select formu sıralı kontrol eden navigasyon  */

function nav_select(){

	
	$(document).on("click",'nav.select button',function(event){
		
		event.preventDefault();
		
		var nav,arr,snc;

		nav = $(this).parent();
		arr = $(nav).data('set');

		var f = {
			islem 	: $(this).attr('rel'),
			val 	: $(arr.field).val(),
		};

		if ( f.islem =='next' ){

			snc = $(arr.field+' option[value='+f.val+']').next('option');
		}
		else{

			snc = $(arr.field+' option[value='+f.val+']').prev('option');
		}

		if ( snc.length==0 ) return false;

		snc = $(snc).attr('value');
			
		$(arr.field).val(snc);

		if(arr.js) eval(arr.js+"()");

		

	});
}
