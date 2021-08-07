'use strict';


/*
@ Front-end Developer & UI Designer by alico 
@ http://akman.me */

var fs 				= {}

$(document).ready(function(){



	/*
	@ display  */
 
	if( set.display )
	{

		set.doc.y	= Math.round($(document).height());
		set.doc.x	= Math.round($(document).width());
		
		set.win.y 	= Math.round($(window).height());
		set.win.x	= Math.round($(window).width());

	
		display(false);

		$(window).resize(function(){
			
			set.win.y 	= Math.round($(window).height());
			set.win.x	= Math.round($(window).width());
			
			display(true);
		});		
	}
	

	/*  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Tema  */
	
	tema();

	/*  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Form */
	
 	form_post();
 	form_type();
 	
 	nav_select();
	nav_count();
	
	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Utility  */
		
	kit();
	
	stick(100); 

	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Build > table  */

	//table();

	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Build > Modal Yapilari  */

	// modal();

	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Model   */
	
	
	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ tema  */
	
	fs.context =  new Context();

	_tema_slide();
	_tema_tost();

	//_tema_app_menu();
	//_tema_nav_tab();
	//_tema_context();
	//_tema_info();
	//_tema_side();
	//_tema_app();




	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ pages  */



})

class Context {
	
	constructor(){
		
		let _this = this;

		this.sets();

		$(document).on('click','.context .cxt-u li a',(e)=> {

			//_('.context .cxt-u li a').on('click',(e)=> {
			
			this.of();
		});

		$(document).on('click','.context .cxt-r',(e)=> {
		
			// _('.context .cxt-r').on('click',(e)=> {
			// e = e.target;

			e = e.currentTarget;
			
			let el = e.parentNode;
			
			
			this.set 	= el.data('cxt') ?  el.data('cxt') :  { id: el.attr('rel') ? el.attr('rel') : 1 } ;
			this.btn 	= e;
			this.el 	= el;

			if( !this.el.isClass('cxt-on') ){
				
				this.on();
			}
			
		});
		
		$(document).on('click','.cxt-o',(e)=> {
			
			//_('.cxt-o').on('click',(e) => {
			
			e.stopPropagation();
			_this.of(true);
		});


		document.addEventListener('keydown', function(e) {
			
			if( _this.open && e.keyCode==27 ){ 
				
				_this.of(true);
			}
		});

    }
	
	
    on(){
		
		this.el.onClass('cxt-on');

		if(this.set.id)  _('html').attr('cxt',this.set.id);
        
        _('html').onClass('cxt');
		
		let unscr = this.set.unscr ? false : true;
		
		if(unscr) _('html').onClass('un-scr');
		
		this.open =true;
    }
    
	
	of(cancel){
		
		if( fs.tab.sub ){

			if(fs.tab.box){
				
				_tab_con();
			}

			if(cancel) 	_tab_prev();	
			if(!cancel) _tab_subs();	

		}

    	_('html').unClass('cxt').unAttr('cxt');
		
		this.el.unClass('cxt-on');

		let unscr = this.set.unscr ? false : true;

		if(unscr) _('html').unClass('un-scr');
		
		this.sets();
	}


	sets() {
		
		
		this.mouse  = 'click';
        this.open   = false;
        this.set    = false;
        this.btn 	= false;
        this.el  	= false;
	}

}




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
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@  tema > slide */

fs.slide = {'media':false,'count':0,'span':{},'spanmedia':{},'surum':4,'storage':false};

if( localStorage.slide){

	fs.slide.storage = JSON.parse(localStorage.slide);
	if( fs.slide.storage.surum != fs.slide.surum ){
		
		localStorage.removeItem("slide");
		fs.slide.storage = false;
	}
}

function _tema_slide(slide){


	if( ( fs.slide.media == set.user.media) ) return false;

	fs.slide.media = set.user.media;

	//if( fs.slide.count > 0 || fs.slide.storage) {
	if( fs.slide.count > 0 ) {
		 
		
		//var v = fs.slide.count > 0 ? fs.slide.span : fs.slide.storage.span;
		var v = fs.slide.span;
	
		$.each(v,function(key,val) {
			
			slick_each(false,val);
	    });     
	}
	else {
		
		if(slide){
			
			slick_each(slide);
		}
		else {
			
			$('.slide').each(function(i){
				slick_each($(this));
			})
		}
		
		
		//localStorage.setItem("slide", JSON.stringify({'surum':fs.slide.surum, 'span':fs.slide.span}));  
	}
}

function slick_each(e,cache){

	//console.log('slick_each');

	var data,kur,j,id,active,it;

	if ( cache ){
		
		//console.log('cache slide');	
		
	
		j  	  	= cache ;
		id 	 	= j.id;

		active  = fs.slide.spanmedia[""+id+""] ? fs.slide.spanmedia[""+id+""] : false ;	
		
		// console.log(id+':'+ active); 
		// console.log(cache);	  
	}
	else {

		
		//console.log('dom slide');

		fs.slide.count = ( fs.slide.count+1 );

		data  	= new Object($(e).data('set'));
		id 		= $(e).attr('id');
		it		= id.replace("slide-", "");
		active  = false; 
		
		j 		= { 

			id 			: id,
			dom 		: {
				div 	: '#'+id,
				list 	: $('#'+it+'-list').length ? '#'+it+'-list' : false,
				dots 	: $('#'+it+'-dots').length ? '#'+it+'-dots' : false,
				prev 	: $('#'+it+'-prev').length ? '#'+it+'-prev' : false,
				next 	: $('#'+it+'-next').length ? '#'+it+'-next' : false
			},
			dots 		: {
				over 	: (typeof(data.dots)!=='undefined' && data.dots.over) ? true : false,
				link 	: (typeof(data.dots)!=='undefined' && data.dots.link) ? true : false,
				css 	: (typeof(data.dots)!=='undefined')? data.dots.css : '' ,
				htm 	: (typeof(data.dots)!=='undefined')? data.dots.htm :  false ,
			}, 
			active 			: false, 
			slidestoshow 	: data.slidestoshow ?  data.slidestoshow : false, 
			responsive  	: data.responsive ? data.responsive : false,
			adaptive   	 	: data.adaptive ? true : false,
			autoplay  		: data.autoplay ? true : false,
			vertical   	 	: data.vertical ? true : false,
			media 			: data.media ?  data.media : false,
			native 			: data.native ?  data.native : false,
			lazyLoad 		: data.lazyLoad ? data.lazyLoad : false,
			lzy				: data.lzy ? true : false,
			blazy			: data.blazy ? true : false,
			speed			: data.speed ? data.speed : 300,
			cssease			: data.cssease ? data.cssease : 'ease',
			centerMode 		: data.centerMode ? true : false ,
			variableWidth 	: data.variableWidth ? true : false,
			infinite 		: data.infinite ? true : false,
			kur 			: false,
			section			: data.section ? data.section : false
		}
	}


	j.kur    = mediakur(j.media);

	fs.slide.span[""+id+""] = (j);
	
	if(j.kur) {
		
		//console.log('kura girdi');
		
		//console.log(active)

		if(!active) {
			
			//console.log('aktif degil ilk kurulum yapti');

			var slickset = {
				prevArrow 		: j.dom.prev,
				nextArrow 		: j.dom.next,
				appendDots 		: j.dom.dots,
				dotsClass 		: j.dots.css,
				vertical    	: j.vertical ? true : false ,
				verticalSwiping : j.vertical ? true : false ,
				slidesToShow   	: j.slidestoshow ? j.slidestoshow : 1,
				slidesToScroll 	: j.slidestoshow ? j.slidestoshow : 1,
				autoplay 		: j.autoplay,
	  			responsive  	: j.responsive ? slick_response(j.responsive) : false,
				dots 			: true,
				adaptiveHeight  : j.adaptive,
				lazyLoad 		: j.lazyload,
				centerMode 		: j.centerMode,
				variableWidth 	: j.variableWidth,
				infinite 		: j.infinite
			}

			if(j.dots.link) {
				
				slickset['customPaging'] = function (slider, i){
					
				   	var e = $('#'+j.id).find('.list .slick-slide[data-slick-index='+i+']'),
					val = $(e).data('dots') ?  $(e).data('dots') : (i+1), 
					css = $(e).data('name') ?  'class="dots-'+$(e).data('name')+'"' : '' ,
					url = $(e).attr('href') ?  $(e).attr('href') : $(e).attr('data-href');

					return '<a href="'+url+'" '+css+'>'+val+'</a>';

				};
			}  


			if(j.dots.htm) {

				slickset['customPaging'] = function (slider, i){
					
					return j.dots.htm == 'i' ? '<i></i>' : j.dots.htm;
				};
			}
		 	
 			//console.log(j); 
			$(j.dom.list).on('init',function(){
	           	
	           	//console.log(id+" slick install");

	           	if( !$(j.dom.div).hasClass('on') ) $(j.dom.div).addClass('on');
				
				$('#'+id).find('.dots .after').remove();

				// slick_track_slide(j.section, 0);

	           	//slick_view(j);
	        })

			$(j.dom.list).slick(slickset);
			
			//fs.slide.span[""+id+""].active = true;

			fs.slide.spanmedia[""+id+""] = true;

			if(j.dots.over) {
				
				$('#'+id).find('.dots ul li').on('mouseover', function(){
   	 				$(j.dom.list).slick('goTo', $(this).index(),true);
				});
			} 
		
			$('#'+id).find('.ctrl a').click(function(){
				
				
				$(j.dom.list).addClass('ctrl-on');

				$(j.dom.list).on('afterChange', function(event, slick, currentSlide){
					clearTimeout(slide_ctrl_click);
					var slide_ctrl_click = window.setTimeout(function(){
						$(j.dom.list).removeClass('ctrl-on');
					},400)
				});
			});

			$(j.dom.list).on('afterChange', function(event, slick, currentSlide){
				
				if(j.blazy) { 
					bLazy.revalidate();
				}
			});


			if(j.lzy) {
				
				var ItemsLzy = $(j.dom.list).find('.lzy');

				$(j.dom.div).hover(function(){ 
					
					slick_lzy( j.dom.div,ItemsLzy);
				}) 

				$(j.dom.list).on('afterChange', function(event, slick,currentSlide){

					slick_lzy( j.dom.div, ItemsLzy);
				});

				$(j.dom.div).bind('touchstart touchend', function(e) {

			      	slick_lzy( j.dom.div,ItemsLzy); 
			    });

		        if(cssua.ua.mobile) {

			    	slick_lzy( j.dom.div,ItemsLzy); 
			    };
			}
		}
	}
	else {
		
		
		//console.log('kurdan cikti');

		if(active) {
			
			//console.log('kuru bozdu');

			$(j.dom.list).slick('unslick');

			fs.slide.spanmedia[""+id+""] = false;
		}
		
	
		if( j.native && j.lzy ) {
			
			if(mediakur(j.native) ) {

				slick_native(j.dom.div,j.dom.list);
			}
		}
	}
}



function slick_response(i){

	

	var j = {
		'4321'	: [
			{ breakpoint: 961,settings: {slidesToShow:3, slidesToScroll:3}},
			{ breakpoint: 767,settings: {slidesToShow:2, slidesToScroll:2}},
			{ breakpoint: 420,settings: {slidesToShow:1, slidesToScroll:1}} 
		],
		'321'	: [
			{ breakpoint: 961,settings: {slidesToShow:3, slidesToScroll:3}},
			{ breakpoint: 767,settings: {slidesToShow:2, slidesToScroll:2}},
			{ breakpoint: 530,settings: {slidesToShow:1, slidesToScroll:1}} 
		] 
	}
	
	return j[i];
}


function slick_view(j,event,slick,currentSlide){
	var item = $('#'+j.id).find('.item.slick-active');
	if( !$(item).hasClass('view-on') ){
		$(item).addClass('view-on');
	}
} 

function slick_lzy(span,items,skip){
	
	if( !$(span).hasClass('on-lzy') ){
		var y = true;
		
		$(items).each(function(i){
			
			y = ( skip && i < skip) ? false : true;
			
			if(y){

				$(this).attr('src',$(this).data('lzy'));	
				$(this).removeAttr('data-lzy');		
			}
			
		});
		$(span).addClass('on-lzy'); 
	}
}

function slick_native(slide,list){

	//slick_track_slide(j, event, slick, currentSlide, event)

	var f = $(list).find('.item:nth-child(2) .real');
	$(f).attr('src',$(f).data('lzy'));
	$(f).removeAttr('data-lzy'); 

	var ItemsLzy = $(list).find('.lzy');

	$(slide).bind('touchstart touchend',function(e){
		slick_lzy(slide,ItemsLzy,1);
	});	
}
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
function display(resize,newDocSize)
{
	if(newDocSize) doc_update();
	
	if(resize)
	{
	   
	    waitForFinalEvent(function(){
	   		tema(true);
	   	},800, "some unique string");
	}
}


/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ Resize Update   */

function doc_update() {
	
	set.doc.y	= Math.round($(document).height());
	set.doc.x	= Math.round($(document).width());	
}
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ Tema Update   */

function mediasizemod(resize){
	
		
	var j = 'ms' ; 									// 0376
	
	j = set.win.x > set.media.ms ?  'xs' : j ;  	// 0568
	j = set.win.x > set.media.xs ?  'sm' : j ;		// 0768
	j = set.win.x > set.media.sm ?  'md' : j ;		// 1024
	j = set.win.x > set.media.md ?  'lg' : j ;		// 1280
	
	set.user.media = j ;
	//console.log(set.user.media);
}
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ Tema Update   */

function tema(time){

	if(time)
	{
			
		mediasizemod();
		kit('RootStyle');
		
		return false
	}
	
	kit('RootStyle');
	mediasizemod();

	$('#code-builds').removeClass('hidden');

}

function trig(){
	
	if( app.mods[app.mod].on ) return false;

	console.log('trig');
	
	__ft_input_load();

}
function unArry(arr,key,index){
	$(arr).each(function(i,v){
		if ( !index && v == key ) { delete arr[i]; arr.splice(i, 1); }
		if ( index && i == key ) { delete arr[i]; arr.splice(i, 1); }
	})
	return arr;
}
			
function isKey(obj,key) {
	
	return obj.indexOf(key) != -1 ? true : false; 

}
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

function base64(id,out) {
	var reader = new FileReader();
	reader.onload = function(){
		var dataURL = reader.result;
		$(out).val(dataURL);
	};
	return reader.readAsDataURL(document.getElementById(id).files[0]);
};
// sil
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@  Scroll To */


function capa(json)
{
	var set = json ;
	
	set.hiz  = (!set.hiz)? 	400 	: set.hiz;
	set.pay	 = (!set.pay)? 	0 		: set.pay;
	set.run	 = (!set.run)? false 	: set.run;
		
		

	if ( (!set.top) && (!set.dom) ) { console.log('capa icin dom veya top set\'in degeri gerekli'); return false  }	

	set.top  = (!set.top)? (($(set.dom).offset().top)-set.pay) : set.top;

	

	var scrollElem=scrollableElement('html','body');

	if(set.hiz > 1) {
		$(scrollElem).animate({scrollTop:set.top},set.hiz,function(){
			if(set.run) eval(set.run+"()");
		});
	}
	else {
		$(scrollElem).scrollTop(set.point);
	}
	
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
function css(e,c,on,time){
	
	if(time){
		
		window.setTimeout(function(){
			if(on) $(e).addClass(c); else $(e).removeClass(c);	
		},time)
		
		return false;
	}

	if(on) $(e).addClass(c); else $(e).removeClass(c);

	

}


// sil
function dateTime(){

	var d = new Date();
	
	var Y  = d.getFullYear();
	var M  = (d.getMonth()+1).toString().padStart(2,'0');
	var X  = d.getDate().toString().padStart(2,'0');
	
	var h = d.getHours().toString().padStart(2,'0');
	var m = d.getMinutes().toString().padStart(2,'0');
	var s = d.getSeconds().toString().padStart(2,'0');	

	return Y+'-'+M+'-'+X+' '+h+':'+m+':'+s;
}


function dateDiff(one, two) {

	let dt1 = new Date(one);
	let dt2 = new Date(two);
	
	return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}


function err(opt){

	let SwalOpt = { 
		
		customClass 	: {
			container   : 'sw-err'
		},
		width 			: 400,
		text 			: ''
	} 
	
	SwalOpt.text = 'Bir sorun oluştu, tekrar deneyiniz';
	
	Swal.fire(SwalOpt);
}
fs.find = {}

function find(input,j){

	if( !j || !j.span ){
		
		//console.log('err : find(this,j) j.span yok !');
		return false;
	}



 	let name  = $(input).attr('name').replace('find-','');
 	let span, item, val,str, on, i;

 	span = document.getElementById(j.span);
	//item = span.querySelectorAll(j.item ? j.item : 'li');
	
	
	item = document.querySelectorAll(j.item ? j.item : '#'+j.span+' > li');
	
	str  = input.value.toUpperCase();
	
	on   = fs.find[j.span] ? fs.find[j.span] : false;
	
	$('.find-'+name+' input').val(input.value);
 
	if (str && !on) { 

		if(j.snc) $('.find-'+name).addClass('on');
		if(j.js)  eval('_find_'+name+'(true)');
		
		span.classList.add("iskey"); 
		fs.find[j.span] = true ; 

		if( $('.tab-find-cek').hasClass('on') ) $('.tab-find-cek').addClass('op').removeClass('on');

	}
	
	
	if(!str &&  on) { 
		
		for(let i = item.length - 1; i >= 0; i-- ){ 

			item[i].classList.remove("onkey");
		}

		if(j.snc) $('.find-'+name).removeClass('on');
		if(j.js)  eval('_find_'+name+'(false)');
		
		span.classList.remove("iskey");
		
		if( $('.tab-find-cek').hasClass('op') ) $('.tab-find-cek').addClass('on').removeClass('op');

		fs.find[j.span] = false;
		return false;
	}

	
	for (i = 0; i < item.length; i++) {
	  
	  	let scop = j.scop=='root' ? item[i] : item[i].getElementsByTagName( j.scop ? j.scop : 'a' )[0];
	 	
	 	let text = scop.textContent || scop.innerText;

		if ( text.toUpperCase().indexOf(str) > -1 ){
			
			item[i].classList.add("onkey");
	    }
	    else {

			item[i].classList.remove("onkey");;
	    }
	    
	}

}

function _find_reset(g){


	let j = g.js ;
	let r = g.rel ;
	let n = '.find-'+r;
	let i = n+' input';
	
	$(n).removeClass('on');
	$(i).val('');
	
	if(j) eval('_find_'+r+'(false)');
	
	$('.tab-find-'+r).addClass('on').removeClass('op');

	$('#list-'+r+' > .onkey').removeClass('onkey');
	$('#list-'+r).removeClass('iskey');
	
	fs.find['list-'+r] = false;
}




function goBack() {
	window.history.back();	
}
var signaturePad;
var hasSignature;

function imza(){
	
	

	var canvas = document.getElementById('imza-pad');

	signaturePad = new SignaturePad(canvas, {
		backgroundColor: 'rgb(255, 255, 255)' ,
		onEnd: function() {
        	hasSignature = true;
        }
	});


	var clearButtonAction = function () {
	    hasSignature = false;
	    signaturePad.clear();
	}

	
	function resizeCanvas() {

		if (hasSignature) {
            var signatureCopy = signaturePad.toDataURL();
        }

	    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
	    canvas.width = canvas.offsetWidth * ratio;
	    canvas.height = canvas.offsetHeight * ratio;
	    canvas.getContext("2d").scale(ratio, ratio);

	   if (hasSignature) {
            signaturePad.fromDataURL(signatureCopy);
        } else {
            // signaturePad doesn't watch canvas and needs to be told it's clear now
            signaturePad.clear(); 
        }
	}

	window.onresize = resizeCanvas;
	resizeCanvas();

	


	$(document).on('click','.imza-clear',function(){
		signaturePad.clear();
	})

}


function imzaHas(){

	return signaturePad.isEmpty();
}


function imzaClear(){
	
	signaturePad.clear();
}

function imzaData(){

	const data = signaturePad.toData();

	return data;
}


// Draws signature image from an array of point groups




function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);

}

function isset(str){
	return (typeof str !== 'undefined') ? true : false;
}

function kdv(a,b){ 
	return (( a * b)/100)+a
}
function kit(scop){
	

	if(scop =='url-snc'){
		

		const urls = document.querySelectorAll('a[data-usnc]'); 
		const host = window.location.origin;

		if (!urls.length)  return false; 
		
		let sets,url,us,as,is;

		Object.entries(urls).forEach(([i,el]) => {
  		
  			sets = JSON.parse(el.dataset['usnc']);
  			url  = el.getAttribute('href');
  			
  			is 		= ( url.substr(0, 4) == 'http' ||  url.substr(0, 4) == 'www.' ) ? true : false ;
  			us   	= new URL( is ? url : host+url);
			
		
  			if(sets.sub){

  				sets.sub.forEach(function(uskey){
					
					let as  = new URL(decodeURIComponent(us.searchParams.get(uskey)));

					if(sets.c) sets.c.forEach(function(askey) { as.searchParams.set(askey,app.cari.tur.id) });
					if(sets.z) sets.z.forEach(function(askey) { as.searchParams.set(askey,app.user.z.code)	  });
				
					us.searchParams.set(uskey,as);
				})
  			}

  			if(sets.c) sets.c.forEach(function(uskey) { us.searchParams.set(uskey,app.cari.tur.id) });
			if(sets.z) sets.z.forEach(function(uskey) { us.searchParams.set(uskey,app.user.z.code)	   });
	
			url = is ? us : us.href.replace(host,'');
			
			el.setAttribute('href',url);

		});

		return false;
	}

	
	/*
	@ Blank Url */

	$(document).on('click','a[href="#"]',function(e){
 		
 		e.preventDefault();
 	});

	/*
	@ Triger Click */ 	

 	$(document).on('click','.trig',function(e){
 		
 		$($(this).attr('rel')).click();
 	});


}



function kit_lazy(){

	if( fs.run.lazy ) return false;
	fs.run.lazy = true;

	fs.lazyLoad = new LazyLoad({

    	elements_selector: ".lazy",
    	load_delay: 300
	});
}
	
	


/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@  Media kurma anahtarı : v.1.0 */

function mediakur(j) {

	var kur=true;

	if(j){ 
		
		var eksen = j.substr(2, 1);
		var media = j.substr(0, 2);
		var size ;
		
		if( eksen=='+' ) { 
			
			switch(media){
    			case 'ms' : size = 0; break;
    			case 'xs' : size = set.media['ms']; break;
    			case 'sm' : size = set.media['xs']; break;
    			case 'md' : size = set.media['sm']; break;
    			case 'lg' : size = set.media['md']; break;
 			}
		}
		
		if( eksen=='+') { kur = set.win.x > size ? true : false }
		if( eksen=='-') { kur = (set.win.x < (set.media[media] + 1 )) ? true : false }
	}
	
	return kur;
}
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

/* nParse    : Number Parse
@  Desc      : Format'i number'a cevir */

function nPar(strg,isNum) {
   
   if ( isNum && isNumeric(strg) ) return strg;

    var strg = strg || "";
    var decimal = '.';
    strg = strg.replace(/[^0-9$.,]/g, '');
    if(strg.indexOf(',') > strg.indexOf('.')) decimal = ',';
    if((strg.match(new RegExp("\\" + decimal,"g")) || []).length > 1) decimal="";
    if (decimal != "" && (strg.length - strg.indexOf(decimal) - 1 == 3) && strg.indexOf("0" + decimal)!==0) decimal = "";
    strg = strg.replace(new RegExp("[^0-9$" + decimal + "]","g"), "");
    strg = strg.replace(',', '.');
    return parseFloat(strg);

}


/* nFor   : Number Format 
@  Soruce : https://gist.github.com/xiel/5688446
@  Desc   : Number'i Format'a cevir */

function nFor(number, decimals, decPoint, thousandsSep,num) {
    
    decimals = ( set.page.cat == 'market' || set.page.mod == 'sepet' ) ? app.market.onda  :  decimals;
    
    //decimals = Math.abs(decimals) || ( decimals === false ? 2 : decimals );
    
    decimals = decimals || decimals===0 ? Math.abs(decimals) : 2;

    number = parseFloat(number);

    if (!decPoint || !thousandsSep) {
        decPoint = ',';
        thousandsSep = '.';
    }

    var roundedNumber = Math.round(Math.abs(number) * ('1e' + decimals)) + '';
    
    while (roundedNumber.length < decimals) {
        roundedNumber = '0' + roundedNumber;
    }

    var numbersString = decimals ? (roundedNumber.slice(0, decimals * -1) || 0) : roundedNumber;
    var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : '';
    var formattedNumber = "";

    while (numbersString.length > 3) {
        formattedNumber += thousandsSep + numbersString.slice(-3)
        numbersString = numbersString.slice(0, -3);
    }

    if (decimals && decimalsString.length === 1) {
        while (decimalsString.length < decimals) {
            decimalsString = decimalsString + decimalsString;
        }
    }

    var str = (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');

    return num ? str.replace(',','') : str;
}



/* nFor   : Number Html Format 
@  Soruce : https://gist.github.com/xiel/5688446
@  Desc   : Number'i Format'a cevir */

function nHtm(str) {
   
    str = nFor(str);
    str = str.split(",");
    
    return '<span>'+str[0]+'</span><sup>,'+str[1]+'</sup>';
}


/* nFix  : Number Fix 
@  Desc  : Number'i odanlik kesim yapar yine number olarak doner */

function nFix(number,hane){

   hane = hane ? hane : 2;
   return parseFloat(number.toFixed(hane));
}


function nFit(num){

    let n;
    n = num.toString();
    n = n.split(".");
    
    if(!n[1]) return num;

    let onda = n[1] ? n[1].substr(0,2) : false;

    n = Number(n[0]+'.'+onda);

    return n;
}


/* mKur  : Money Kur
@  Desc  : Para kur turlerine gore donus yapar */

function mKur(str,id,span){
    
    if(id) {

        switch (id) {
            case 0:  $str = '₺'; break;
            case 1:  $str = '$'; break;
            case 2:  $str = '€'; break;
            case 6:  $str = 'f'; break;
            default: $str = '₺'; break;
        }    
    }
    
    let chf = '₣';

    if( span ){

        chf = span.chf == 'ico' ? '<i class="icon-franc"></i>'      : chf;
        chf = span.chf == 'htm' ? '<dd class="chf">f<i>i</i></dd>'  : chf;
        chf = span.chf == 'txt' ? '₣'                               : chf;
    }

    str = ( str == 'CHF' ) ? chf : str;

    return str;
}

/* percent_diff  
@  Desc  : A ve B arası yuzde farki */

function percent_diff(a,b){

    var int = 100 - (100/a)*b;
    
    int =  int > 0 ? int : 0 ;

    return nFix(int);
}

/* percent_diff  
@  Desc  : B yüzde kac inmis  */

function percent_disc(a,b,c,num){

   
    var int =  c ? ((100/a)*b) : 100 - ((100/a)*b);
    
    int =  int > 0 ? int : 0 ;

    return num ? int : nFix(int);
}





function ofPoint(e){

	e = e ? $(e) : $('html');
	$(e).addClass('of-point');
	
}

function onPoint(e){
	
	e = e ? $(e) : $('html');
	$(e).removeClass('of-point');
}


fs.refresh = true;

let refresh;

function pull_refresh(){
	
	refresh = PullToRefresh.init({
		mainElement: 'body',
		triggerElement: '#reload',
		onRefresh() {
			
			if(fs.refresh) {
				$('html').addClass('query');
				window.location.reload();
			}
		}
	});
}

function _pb_destory() { 
	
	refresh.destroy();
}



function reset(){

}
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ Screen */

function screen(is,no){
	
	no = !no ? 'one' : no;
	var cs = 'ovrly-'+no;
		
	if(is) $('html').addClass(cs); else $('html').removeClass(cs);
}
function scrollableElement(els) { for (var i = 0, argLength = arguments.length; i <argLength; i++){var el = arguments[i],$scrollElement = $(el);if ($scrollElement.scrollTop()> 0){return el;}else{$scrollElement.scrollTop(1);var isScrollable = $scrollElement.scrollTop()> 0;$scrollElement.scrollTop(0);if (isScrollable){ return el;}}}return [];}

/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@  Serialize to Object */

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}
fs.stick = {}

function stick(v,p,of){

	fs.stick[v] = false;

	var r = $(window).scrollTop();
	var s = fs.stick[v];
	var c = 'stick-'+v;

	var obj = {c:c,v:v,p:p,of:of};

	if( r < (v-1) && s  ) stickOf(obj);
	if( r > (v-1) && !s ) stickOn(obj);

	$(window).scroll(function(event){
		
		r = $(window).scrollTop();
		s = fs.stick[v];

		if( r < (v-1) && s  ) stickOf(obj);
		if( r > (v-1) && !s ) stickOn(obj);
	});
}


function stickOf(obj){
	


	$('body').removeClass(obj.c); 
	
	if(obj.of) $(obj.p).addClass('of');

	var time =  obj.of ? obj.of : 0 ;

	clearTimeout(runTime)

	var runTime =  window.setTimeout(function(){ 
		
		$(obj.p).removeClass('on of');
		
		fs.stick[obj.v] = false;

	},time);

}


function stickOn(obj){

	$('body').addClass(obj.c);
	
	$(obj.p).addClass('on');

	fs.stick[obj.v] = true

}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
@ ShowValues : Php de ki strpos gibi kullan   */


function str_pos (haystack, needle, offset)
{
  var i = (haystack + '').indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}
function ucFirst(string) {
	
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function capitalize(str) {

	let words   = str.split(' ');
	let newstr  = new Array();
  
	$.each(words, function(i, word){ 
		newstr[i] = word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
	})

	return newstr.join(' ');
}
$(document).on('click','.under',function(e){
	let text = 'Bu bölüm geliştiriliyor';

	Swal.fire({
		text 		: $(this).data('mesaj') ? $(this).data('mesaj') : text,
		width 		: 350,
		customClass	: {
		 	popup 	: 'sw-ios sw-note sw-ok'
		}
	})

	return false; 
})
function href(name, value){

  var href = window.location.href;
  var regex = new RegExp("[&\\?]" + name + "=");
  
  if(regex.test(href)){

    regex = new RegExp("([&\\?])" + name + "=\\d+");
    window.location.href = href.replace(regex, "$1" + name + "=" + value);
  }
  else{
    
    if(href.indexOf("?") > -1)
      window.location.href = href + "&" + name + "=" + value;
    else
      window.location.href = href + "?" + name + "=" + value;
  }
  
}
function delcss(e,k){ e.classlist.remove(k) }
function addcss(e,k){ e.classlist.add(k) }







/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ Time Triger  */


var waitForFinalEvent = (function () {
	
	var timers = {};
	
	return function (callback, ms, uniqueId) {
		if (!uniqueId){
		  uniqueId = "Don't call this twice without a uniqueId";
		}
		if (timers[uniqueId]) {
		  clearTimeout (timers[uniqueId]);
		}
		
		timers[uniqueId] = setTimeout(callback, ms);
	};

})();
function wait_task(name,time){
	console.log(name);
	waitForFinalEvent(function(){
   		console.log('run');
   		eval(name+"()");
   	},time,"some unique string");
}
function webView(data){
	
	console.log(data);

 //  window.webkit.messageHandlers.nativeapp.postMessage(data);
}
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
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/* @ nav count : sayısal birim içeren field alanı icin kontrol  */

fs.navcnt = nav_count('create');


function nav_count(rst){

	
	/*
	@  rst : ayarları olusturm veya resetle  */

	if(rst){
		
		let con = { name:false,eksi:0,arti:0,temp:0, range:false }
		
		if ( rst =='create') return con;
		
		fs.navcnt = con;

		return false;
	}

	
	/*
	@  nav count butunlar tıklanırsa burası calisir, bu butonlar arti eksi varsa ondalik
	@  butonlarından olusur */

	$(document).on('click','nav.count button',function(event){
	
		event.preventDefault();
		
		var nav,arr,snc;

		nav = $(this).parent();
		arr = $(nav).data('set');
		
		//console.log(arr);

		arr = (typeof arr =='object') ? arr : $.parseJSON(arr);

		//console.log(arr);

		//JSON.parse()

		var f = {

			max 	: arr.max ? nPar(arr.max) : $(arr.field).attr('max') ? nPar($(arr.field).attr('max')) : false,
			min  	: arr.min ? nPar(arr.min) : $(arr.field).attr('min') ? nPar($(arr.field).attr('min')) : 0,
			val 	: nPar($(arr.field).val()),
			range   : { e:false, onda:false},
			name    : arr.field.replace("#",''),
			islem 	: $(this).attr('rel'),
			oran 	: 1,
			onda 	: $(arr.field).attr('onda')

		};

		//console.log(f);
		
		if( fs.navcnt.name != arr.field ) nav_count('reset');
		
		fs.navcnt.temp = f.val;
	
		if(arr.range) {
			
			f.range.e 	 = '.count-range[rel='+f.name+']';
			f.range.onda = f.range.e+' .onda';
		}

		if( arr.type == 'money' && f.islem == 'onda' ) {

			if( !$(this).hasClass('on') ) {
				
				if(arr.range) $(f.range.e).addClass('onda');

				$(this).addClass('on');
				arr['onda'] = true;

			}
			else {

				if(arr.range) $(f.range.e).removeClass('onda');

				$(this).removeClass('on');
				arr['onda'] = false;
			}
		
			$(nav).attr('data-set',JSON.stringify(arr));

			return false;
		}	
		
		
		/*
		@  arr.type : para formatı ve onda varsa eksi / arti oranini setliyoruz   */

		if( arr.type == 'money') {
			
			f.oran = arr.onda ? ( f.onda=='4' ? 0.0001 : 0.01) : f.oran;

			//console.log(f.oran);	
		}

		/*  
		@ nav count -  arttirma islemi geldi  */

		if( f.islem == 'arti' ){
		
			snc = f.val + f.oran;
			
			//console.log(snc);

			/*
			@ arttirma degeri max sınırı kontrolunu yapiyoruz  */

			if( snc == f.max || snc > f.max ) {

				if(!$(this).hasClass('pause'))
				{
					$(this).addClass('pause'); 	// @ max icin arttirma yi kapa 
					_nc_out(arr,f,f.max);      	// @ maximun degeri ver
				}
				
				/* 
				@ arttirma kapanmasi halinde ısrarla tıklanmaya devam edilmesi icin
				@ uyarı mesaj dondurulmek isteniyor ise gir */

				if( arr.msj && fs.navcnt.arti > 0  ){

					var msj = arr.msj.arti.replace('#1',f.max);

					Swal.fire ({
						confirmButtonText 	: 'Tamam',
						text 				: msj
					});
				}

				fs.navcnt.arti++;

				$(nav).children('.eksi').removeClass('pause');
				return false;
			}

			fs.navcnt.arti = 0;
			$(nav).children('.eksi').removeClass('pause');
			
			_nc_out(arr,f,snc)
		}
		
		
		/*  
		@ nav count -  eksiltme islemi geldi  */

		if( f.islem == 'eksi' ){

			snc = f.val - f.oran;
		
			if( snc == f.min || snc < f.min ) {
				
				if(!$(this).hasClass('pause'))
				{

					$(this).addClass('pause');   // @ max icin arttirma yi kapa 
					_nc_out(arr,f,f.min) 		//  @ maximun degeri ver
				}

				/* 
				@ arttirma kapanmasi halinde ısrarla tıklanmaya devam edilmesi icin
				@ uyarı mesaj dondurulmek isteniyor ise gir */

				if( arr.msj && fs.navcnt.eksi > 0  ){
					
					var msj = arr.msj.eksi.replace('#1',f.min);

					Swal.fire ({

						confirmButtonText 	: 'Tamam',
						text 	: msj
					});
				}

				fs.navcnt.eksi++;

				$(nav).children('.arti').removeClass('pause');

				return false;
			}

			fs.navcnt.eksi = 0;
			$(nav).children('.arti').removeClass('pause');

			_nc_out(arr,f,snc);
		}

		return false;
	});

	
	/*
	@  nav count range
	@  butonlarından olusur */


	
	$(document).on('input','.count-range input',function(){

		let r = fs.navcnt.range;

		if(!r){
			
			let olay = $(this).hasClass('onda') ? 'onda' : 'sayi';
			
			fs.navcnt.range = {

				sayi : olay == 'sayi' ? '#'+$(this).attr('id') : '#'+$(this).prev().attr('id'),
	 			onda : olay == 'onda' ? '#'+$(this).attr('id') : '#'+$(this).next().attr('id'),	
	 			js   : $(this).parent().attr('js'),
	 			olay : olay
			}
	 	}
	 	
	 	if ( r.olay=='sayi' ) { 

			_nc_range_onda(r.onda,r.sayi)
		}


		if ( r.olay=='onda' ) {
			
			let n = $(r.sayi).val().split('.')[0]+'.'+$(this).val();
			$(r.sayi).val(n);
		}

		if(r.js){
			
			eval(r.js+'(r.olay)');	
		}
	
	})

	$(document).on('blur touchend','.count-range input',function(){
		
		nav_count('reset');
	})
}





/* 
 @ Nav Count - Range Barı Onda 
 @ Degisen fiyat sonrası onda maksimun ayarını formatlar */

function _nc_range_onda(onda,sayi){

	const max = $(sayi).attr('max').split('.');
	const num = $(sayi).val().split('.');
	
	if(!num[1]) return false;

	$(onda).val(num[1].length == 1 ? num[1]+'0' : num[1])

	if(num[0]==max[0]){ 
		
		$(onda).attr('max',max[1]);
	}
	else{

		$(onda).attr('max',99);	
	}	
}

/* 
 @ Nav Count - Out
 @ Arti eksi degeri degisiklik sonrasi input, html ve json degiskenleri formatlar  */

function _nc_out(arr,f,snc){
	
	let val = ( arr.range || arr.type != 'money') ? snc : nFor(snc,f.onda);
	$(arr.field).val(val);

	if(arr.out){
		
		let out = arr.type=='money' ? nFor(snc) : snc;
		$(arr.out).html(out)	

		//console.log(out);
	}

	if(arr.js){

		let j = { val:snc }; if(arr.id) j.id = arr.id;
		console.log(j);
		eval(arr.js+'(j)');
	}

	if(arr.range){

		_nc_range_onda(f.range.onda,arr.field);	
	}
	
	fs.navcnt.temp=0;
}




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