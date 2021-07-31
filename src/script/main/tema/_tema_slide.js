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