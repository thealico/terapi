/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@  Madal */

fs.modal = { 
	last 		: { box:false, tab:9 },
	tab 		: {},
	box 		: {},
	set 		: {
		
		'urun' 		: { name:'urun', 	js: true, id:true, key:true, before:'_mu_before(s)' },
		'cek' 		: { name:'cek',  	js: true, id : true },
		'cek-add' 	: { name:'cek-add', js: true },
		'cek-banka' : { name:'cek-banka',	js:true  },
		
		'prms' 	: { name:'prms',js:true,on: false,  }, // promosyon
		'numu' 	: { name:'numu',js:true,on: false,  }, // numune
		'arac' 	: { name:'arac',js:true,on: false,  }, // arac
	},
	prev  		: false,
	next  		: false,
	temp 		: { prev:[] , next:[]}
	
};


function modal(){
	

	$(document).on('click','.modal-prev', function(e){
		
		// let s = $(this).data('modal');
		// if( s.before) return false;

		fs.modal.prev = true;

		_modal_of('prev');
	})


	$(document).on('click','.modal-next', function(e){
		
		let s = $(this).data('modal');

		if( s.before) return false;

		fs.modal.next = true;
		_modal_of('next');
	})


	$(document).on('click','.modal-close', function(e){
		
		_modal_of();
	})


	$(document).keydown(function(e){
		
		if( e.keyCode==27 ){ 
			
			_modal_of();
		}
	})


	$(document).on('click','.modal-prev,.modal-next,.modal-show,.modal-link a,.modal-list > *', function(event){
	
		if(!app.session && !app.guest) { session(); return false; }

		// linki oldur
		event.preventDefault();

		// e: element, s: set ayarlari
		let e,s,sa,sb;

		// this element
		e = $(this);

		// s : modal set ayarlari data-modal al 
		s = $(e).data('modal');
		
		// child ta touch hareket varsa iptal
		if(fs.touchs) return false;


		// next prev islem ise al

		let prev = $(e).hasClass('modal-prev') ? true : false ;
		let next = $(e).hasClass('modal-next') ? true : false ;

		fs.modal.prev = prev;
		fs.modal.next = next;


		// edit mod acik ise iptal

		if( !prev && !next ){

			if(fs.app.edit && (!s || ( s && !s.edit ))) return false;
		}
	
		// modal action 

		let action = false ;

		action =  prev ? 'prev' : ( next ? 'next' : action);
		action = !action && $(e).hasClass('modal-show') ? 'show' : action ;
		action = !action && $(e).parent().hasClass('modal-list') ? 'list' : 'link';

		// s : modal set ayarlari data-modal al 

		s = (!s && action == 'list' ) ? $(e).parent().data('modal') : s;
		

		// s : extend bagla

		s = s && s.extend ? fs.modal.set[s.extend] : s;
		
		// alt list modallar da extend set bagi araniyor ise gir

		if( (action=='list' || action=='link') && $(e).attr('set') ) {
		
			let _extend ; 

			_extend = $(e).attr('set');
			_extend = fs.modal.set[_extend] ? Object.assign({},fs.modal.set[_extend]) : $('.set-'+_extend).data('modal');
 			
 			// this click'de data-modal var ise onu extend modal ile merge et 

 			if(_extend) s = _modal_set_merge(e,s,_extend); else {

 				console.log('error: extend bagi bulunamadi');
 			}
		}
	
	
		// attr modal
		
		if(!s ){
		
		
			let _s = _modal_set_find('modal',e,action);

			s =  _s ? ( fs.modal.set[_s] ? Object.assign({},fs.modal.set[_s])  : { name : _s } ) : false;
			
			if(s) s = _modal_set_merge(e,null,s);

		}


		// prev modal

		if( !s.name ){

			if( prev ) {

				let p = fs.modal.temp.prev;

				p  = p.length > 0 ? p[(p.length-1)] : false ;
				s  = s ? { ...s, ...p} : p;
			}
		}

		//console.log(s);
		
		if(!s.prev && !s.next){

			if(prev) s.prev = true;
			if(next) s.next = true; 
		}

	

		//console.log(s);
		if( s.before ) { if ( !eval(s.before) ) return false; else { if( prev || next ) _modal_of(prev ? 'prev' : 'next') } }
		if( s.openit ) { if ( !eval(s.openit) ) return false; else { if( prev || next ) _modal_of(prev ? 'prev' : 'next') } }

		
		if(!s) { 
			
			console.log('error : modal set bos');
			return false 
		}


		if ( !s.ajax ){

			_modal_on(s); 
		}
		else {

			// modal ajax content ise
			
			var ajxLoad,ajxModal,ajxTime;
			
			ajxLoad   = '#modal-ajax .data';
			ajxModal  = '#modal-ajax';
			ajxTime   = 0;


			$(ajxModal).addClass('load');

			if( !$('html').hasClass('on-modal') ){ 
			
				_modal_on(s);
			}
			else {

				$(ajxLoad).slideUp('fast');	
				ajaxTime = 500;
			}

			var prefix = str_pos($(e).attr('href'),'ttp://')? '' : set.page.url ;

			window.setTimeout(function(){

				$(ajxLoad).html('');

				$.get(prefix+$(e).attr('href'),{ ajax:true, modal:true },function(data) {
					
					$(ajxLoad).html(data);
					
					window.setTimeout(function(){
						
						$(ajxLoad).slideDown('fast');		
						$(ajxModal).removeClass('load');

					},500);

				})	

			},ajaxTime);
			
		}


	});

}

function _modal_set_find(f,e,action){

	let s = false;

	if( f =='modal' ){

		s = $(e).attr('modal') ;
		s = (!s && action == 'list' ) ? $(e).parent().attr('modal') : s;
		s = (!s && action == 'link' ) ? $(e).parent().attr('modal') : s;
		s = (!s && action == 'link' ) ? $(e).parent().parent().attr('modal') : s;
		s = (!s && action == 'link' ) ? $(e).parent().parent().parent().attr('modal') : s;

		return s;
	}

}


function _modal_set_merge(e,s,obj){

	if( obj.attr ){ 

		$.each( obj.attr, function( key, v ) {
		
			if( v == 2 ) obj[key] = $(e).parent().parent().attr(key);
			if( v == 1 ) obj[key] = $(e).parent().attr(key);
			if( v == 0 ) obj[key] = $(e).attr(key);

		});

			delete obj.attr;
	}

	if( obj.key ){
		
		let v = obj.key;

		if( typeof(v)=='object' ){
			
			if( v.u == 2 ) obj.key = $(e).parent().parent().attr(v.t);
			if( v.u == 1 ) obj.key = $(e).parent().attr(v.t);
			if( v.u == 0 ) obj.key = $(e).attr(v.t);	
		}
		else{

			obj.key = $(e).attr('key');	
		}
		
		obj.key = obj.key ? obj.key: false; 
	}

	if( obj.id ) obj.id = $(e).attr('id');	
	

	s = s ? { ...s, ...obj} : obj;

	return s;

}


function _modal_on(s){

	let m = Object.assign({}, fs.modal);

	let name =  s.name ? s.name : 'ajax'; 	
	let span = '#modal-'+name; 		

	if( s.of == 'last' ) _modal_of();		

	if( fs.modal.box[name] ) {
		
		return false; 
	};

	if( Object.keys(m.tab).length == 0 ) {
		
		//$('html').addClass('on-modal');					
		$('html').addClass(s.css);					
	}

	s.open = true;
	
	m.last.tab 			= m.last.tab+1;
	m.tab[m.last.tab] 	= name;
	m.box[name]  	   	= s;
	m.last.box			= s.name;

	if( m.last.tab > 10 ){
		
		$('#modal-'+m.tab[(m.last.tab-1)]).addClass('blur');
	}

	$(span).addClass('on').attr('index',m.last.tab);
	
	clearTimeout(one_time);
	
	var one_time = window.setTimeout(function(){
			
		window.setTimeout(function(){
			$('html').addClass('on-modal');
		},20)

		$(span).addClass('on-start');
	},65)

	if( name == 'ajax' && s.format ) { 

		$(span).addClass('f-'+s.format);
	}

	if(s.js) {
		
		if (s.js === true ) eval('_modal_'+(name.replace('-','_'))+'_js(s)'); else  eval(s.js);
	}


	if(s.prev){

		fs.modal.temp.prev = unArry(fs.modal.temp.prev,(fs.modal.temp.prev.length-1),true);
	}


	fs.modal.prev = false;
	fs.modal.next = false;
}


function _modal_of(get){
	
	var m  = Object.assign({}, fs.modal);
	
	if ( $('#gallery').hasClass('pswp--open') ) return false;

	if (Swal.isVisible()) return false;

	if (!m.last.box) return false;
	
 	let name 	= get && get.modal ? get.modal : m.last.box
	let path 	= '#modal-'+name;
	let e 		= m.box[name];
	
	$(path).addClass('on-close');

	if( m.next){ 

		let obj =  Object.assign({},m.box[name]);

		delete obj.open;
		delete obj.prev;
		delete obj.next;

		m.temp.prev.push(obj);
	}

	
	if( !m.next && !m.prev ){

		m.temp.prev = [];
		m.temp.next = [];
	} 
	
	m.prev = false;
	m.next = false;
	
	if( Object.keys(m.tab).length == 1 ) {
		
		$('html').removeClass('on-modal m-in m-'+name);		
	}
	
	
	
	if( name == 'ajax') $(path+' .data').html('');

	e.open = false; 
	
	fs.modal.box[name] = e;


	if(e.js){
		
		if (e.js === true ) { eval('_modal_'+(name.replace('-','_'))+'_js(get)'); } else  eval(e.js);
	}

	delete m.box[m.last.box];
	
	var tab = m.last.tab;

	if( tab > 9 ) delete m.tab[m.last.tab];

	tab = tab-1;

	m.last.box = tab > 9 ? m.tab[tab] : false ;
	m.last.tab = tab > 9 ? tab		  : 9 ; 


	$('#modal-'+m.tab[tab]).removeClass('blur');

	fs.modal = m;

	clearTimeout(of_time);

	var of_time  = window.setTimeout(function(){
		$(path).removeClass('on on-close on-start');
	},400)
}