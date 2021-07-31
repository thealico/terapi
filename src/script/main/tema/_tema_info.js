fs.info  	= {
	
	open 	: false,
	case 	: {
		1 	: {  stat : false, name:'market-start', key : 1 },
		2 	: {  stat : false, name:'market-reyon', key : 2 }
	}
}



function _tema_info() {

	var info,u; 

	
	info = localStorage.getItem('info') ? $.parseJSON(localStorage.getItem('info')) : fs.info.case;

	_ti_destory();

	u 	 = set.page;

	if( u.cat == 'market' && u.sub == 'urun'  && !info[1].stat ) { fs.info.open=1; $('#h').addClass('on-info-1'); window.setTimeout(function(){ $('#h').addClass('st-info')},2000); }
	if( u.cat == 'market' && u.sub == 'reyon' && !info[2].stat ) { fs.info.open=2; $('#h').addClass('on-info-2'); window.setTimeout(function(){ $('#h').addClass('st-info')},2000); }

	//$('.e-info').off().on('click',function(e){

	$(document).on('click','.e-info',function(e){
	
		var s;

		e.preventDefault();
		
		s = $(this).data('set');

		if( s.sema == 'market-start' ){

			$('#h').addClass('of-info');
			
			window.setTimeout(function(){
				
				$('#h').removeClass('on-info-'+s.key);
				$('#h').removeClass('of-info');
				
				fs.info.open = false;

				info[1].stat = true;
				
				localStorage.setItem('info',JSON.stringify(info));

			},700)

		}

	})

}

function _ti_destory() { 

	if(!fs.info.open) return false;
	
	$('#h').removeClass('on-info-'+fs.info.open);
	$('#h').removeClass('st-info of-info');
	noScroll(false);
	fs.info.open= false;

}