function block_load(scop,url,clear){
	
	if(!app.session) return false;

	if( app.user.mod==3 ){

		console.log('User Mod 3 (Cari) oldugu icin cariye gore content yukleme devre disi kaldi');
		return false;
	}
	
	$('.block-load').each(function(e){
		
		var e  = $(this);
		var s  = $(e).data('set');
		
		var all   = scop ? true : false;
		
		if( !scop || scop == s.name ){
			
			_bl_open(scop,s);
			
			window.setTimeout(function(){ 
				
				url = url ? url : s.url;

			
				$.post(url,{ output:( s.out ? s.out : false ) },function(data){
					
					data = (typeof data =='object') ? data : $.parseJSON(data);
					
					if(data.err){
						
						$(e).html('');
						
						if( data.err == 'session' ) session({js:{name :'block_load',param :scop}});
					
						_bl_exit(scop,s)

						return false;
					}


					$(e).html(data.body);

					if(s.onBody=='all'){

						$('body').addClass(data.meta.class.body);
						_onBodyLod(false);
					}

					app.cari.sepet = data.app.sepet ? data.app.sepet : false ;
					
					
					let pc = data.meta.page;
					
					if(pc.mod=='sepet') app.data.entry = data.entry; 
					if(pc.sub=='urun')  app.data.entry = data.entry; 
					if(pc.cat=='cek')   app.data.entry = data.entry;

					if( s.js=='page' ){
						
						data.app.block = true;

						eval('_page_'+data.app.mod+'(data.app)');
					}
					else{

						if(s.js) eval(s.js);
					}

					if(fs.lazyLoad) fs.lazyLoad.update();

					_bl_exit(scop,s);

				});

			},300) 		
		}
	})
}




function _bl_open(scop,s) {
	
	//$('html').addClass('bl-on');
	
	if(s.onBody)  _onBodyLod(true);
	
	if(s.onBody=='all'){

		_onBodyHas(false);
		_onBodyLod(true);
	}

	if( scop =='cari' && set.page.sub == 'urun') { 

		$('html').addClass('load-url out')
	}
}



function _bl_exit(scop) {
	
	/*
	window.setTimeout(function(){ 
		
		$('html').removeClass('bl-on');

	},300);*/



	if( scop =='cari' ) {  
		
		if( set.page.sub == 'urun' ){
			window.setTimeout(function(){ 
				$('html').removeClass('load-url out');
			},700) 			
		}

		if(!app.session) return false;
		
		_sepet_load();
		
		
	}
}
