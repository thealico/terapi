var form = _fx_set({make:'create'});

function _fx_set(opt){
	
	let setForm  ={

		submit		: false,  
		data 		: false,
		field		: {},
		name		: 'main',
		prefix 		: false,  
		suffix 		: false,
		sent 		: false,  
		err 		: false, 		
		js			: false, 
		e           : false,
		confirm 	: false,
		feed   		: {
			api 	: 'Üzgünüz işlem gerçekleştirilemedi, sayfayı bir kez yenileyip tekrar denemenizi öneririz.'
		}
	}

	if(opt.make == 'create') return setForm;
	if(opt.make == 'reset')  form = setForm;
}

function form_post(){
	
	$(document).on('submit','form.fx',function(event){
	
		ofPoint();

		event.preventDefault();

		$(this).removeClass('run');

		var e = $(this);
		var s = $(e).data('set')  ? $(e).data('set')  : false ;
		
		// @ Confirm

		if(!form.confirm && s.confirm ){
			
			fx_confirm(e,s); 
			return false;
		}

		form.confirm = false;


		// @ Form Json Data Olustur
		
		form.name   	= $(e).attr('name') ? $(e).attr('name') : form.name;
		form.e  		= '#fx-'+form.name;

		form.prefix		= form.name == 'main' ? '' : '-'+form.name;
		form.suffix		= form.name == 'main' ? '' : form.name+'-';
		
		form.submit  	= '#fx'+form.prefix+' .submit'; 

		form.err		= s.err ? s.err : form.err;
		form.js 		= s.js  ? s.js  : form.js;

		form.sent 		= false;
		
		
		// @ post set verisi 
	
		let type = ( s && s.type ) ? s.type : ( ( $(e).attr('enctype') == 'multipart/form-data' ) ? 'FD' : false );
		let post = { url :s.url ? s.url : $(e).attr('action'), data:false }
		
		// @ post action

		post.url  = post.url ?  post.url : '' ;

		// @ post data icin type formata bul
		
	
		$.each($(e).serializeArray(), function(key, v){
			form.field[v.name]= v.value;
		});


		post.data = (type=='SA') ? $(e).serializeArray() : post.data;
		post.data = (type=='FD') ? new FormData(this)	 : post.data;	
		post.data = post.data 	 ? post.data 			 : $(e).serialize();


		
		// @ post type format formData ise gerekli setleri ekle

		if( type=='FD' ){

			post.enctype 	 = 'multipart/form-data';
			post.contentType = false;
			post.processData = false;
		}

		// @ form data extornal relation add

		if(s.rel){
			
			$.each($('.fx-rel-'+form.name), function(key,val){
				
				let rt = $(val).attr('type');

				if(rt == 'file') post.data.append($(val).attr('name'),$(val)[0].files[0]); 
				if(rt != 'file') post.data.append($(val).attr('name'),$(val).val()); 
			})		
		}
		
		// @ form dataya post.data verisini at

		form.data = post.data;

	
		// @ In : Post'a girmeden once calisacak olan fonksiyolar
		
		_fx_in();

		if(form.js) { 
			
			let fxIn = (form.js === true) ? eval('_fx_in_'+form.name+'()') : eval(form.js); 
			
			if(s.valid && !fxIn ) {
				
				_fx_out(true);
				
				onPoint();
				console.log('valid olmadı');
				return false;
			}

			post.data = form.data;
		}

		console.log('fx in den cikti');

		ofPoint();

		
		// @ post'a basla

		$.post(post).done(function(json){
			
			form.data 	= (typeof json =='object') ? json : $.parseJSON(json);
			form.sent   = true;

			clearTimeout(say);

			var say = window.setTimeout(function(){
				
				_fx_out(); 

				if(form.js){

					var out = ( form.js === true ) ? eval('_fx_out_'+form.name+'()') : eval(form.js);
				}
				
			},600);

		});

	});


	$(document).on('click','.fx-submit',function(event){
		
		$('form[name="'+$(this).attr('rel')+'"]').submit();
	})


	$('form.fx.run').submit();

}

function _fx_in(){
	 
	$(form.e).removeClass('send-on nosent posted');
	$(form.e).addClass('load');

	$('html').removeClass(form.suffix+'form-nosent');
	$('html').addClass(form.suffix+'form-load');


	// if ( form.resultnote ){ 
	// 	$(form.resultnote).text('Lütfen Bekleyin') 
	// }
	
	$(form.submit).attr('disabled','disabled');
	$(form.submit).blur();

	// if($(form.submit).attr('data-load'))
	// {
	// 	$(form.submit).attr('value',$(form.submit).attr('data-load'));	
	// }

	return true;
}


function _fx_out(fxIn) {

	
	console.log('post cikti');

	$('html').removeClass(form.suffix+'form-load');
	

	$(form.e).removeClass('load');

	$(form.e+' .hata').removeClass('hata');
	
	$(form.submit).removeAttr('disabled');
	
	if(fxIn) return false;


	var data = form.data;

	if( !data.result ) {

		$('html').addClass(form.suffix+'form-nosent');
		
		$(form.e).addClass('send-on nosent');

		if( form.err ){

			$.each(data.errors, function(key, value){
				
				$(form.e+' .f-'+key).addClass('hata');
			})	
		}

		if(form.feedback) _fx_feedback();

	}
	else {
		
		
		$('html').addClass(form.suffix+'form-posted');
		
		$(form.e).addClass('send-on posted');
		
		//$(form.e)[0].reset();

		if($(form.submit).attr('data-load')){
			
			$(form.submit).attr('value',$(form.submit).attr('data-value'));
		}
	}

	onPoint();
	


	return true;
}

function fx_confirm(e,s){
	
	onPoint();

	Swal.fire({
  
		confirmButtonText 	: 'Gönder',
		cancelButtonText  	: 'Vazgeç',
		text 				: s.confirm,
		reverseButtons 		: true,
		showCancelButton	: true,
		customClass 		: {
			popup 	: 'sw-ios sw-note sw-confirm',

		}
	}).then((result) => {
		
		if(!result.value) return false;
		
		form.confirm = true;
		$(e).submit();

	});
}

function _fx_feedback(){
}




// if ( form.resultnote ){ 

	// 	var str = form.data.message ?  form.data.message : 'Kırmızı alanları düzeltelim'
	// 	$(form.resultnote).text(str)
	// }
	//_fsa_tema();

// function _fsa_tema(){
	
// 	if( form.box ) _tema_form_box();
	
// };

