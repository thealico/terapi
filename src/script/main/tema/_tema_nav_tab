fs.tab = _tema_nav_tab('reset');

function _tema_nav_tab(obj){

	if( obj=='reset' ){
		
		//console.log('_tema_nav_tab(reset)');

		return { id:false, li:false, index:false, prev:false, sub:false, box:false };
	}
	
	//console.log('_tema_nav_tab()');

	$(document).on('click','.tab a.t',function(e){
		
	
		e.preventDefault();

		if(!app.session && !app.guest ){ 
			
			session(); return false;
		}

		let el  = $(this).parent();
		let nv 	= '#'+$(el).parent().parent().attr('id');
		let li  = nv+' > ol > li';
		
		
		let tb  = $(this).hasClass('tc') ? ( $(this).attr('tab') ? $(this).attr('tab') : ( $(el).index()+1) ) : false;

		fs.tab.box 	= tb;

		
		fs.tab.li   = li;
		fs.tab.id 	= nv;

		fs.tab.sub   = $(el).hasClass('sub') ? true : false;
		fs.tab.prev  = $(nv).attr('on');
		fs.tab.index = $(el).index()+1;
		
		$(nv).attr('on',fs.tab.index);
		$(li).removeClass('on op');
		$(el).addClass('on');
		
	
		if( tb && !fs.tab.sub ){
			
			//console.log('x');

			_tab_con();
		}
		
		if(!fs.tab.sub){
			fs.tab = _tema_nav_tab('reset');
		}

	});

}

function _tab_con(id,index){
	
	id 		= id 	? '#tab-'+id : fs.tab.id;
	index 	= index ? index 	: fs.tab.box;

	$(id+'-con .tc-item').removeClass('on');
	$(id+'-con > .tc-item:nth-child('+index+')').addClass('on');	
}

function _tab_subs(){
	
	//console.log('_tab_subs()');
	let tab = fs.tab;

	$(tab.li).removeClass('on op');
	$(tab.li+':nth-child('+tab.index+')').addClass('op');

	fs.tab = _tema_nav_tab('reset');
}

function _tab_prev(){

	

	let tab = fs.tab;
	let prv = $(tab.li+':nth-child('+tab.prev+')');
	
	$(tab.li).removeClass('on');
	if($(prv).hasClass('sub')) $(prv).addClass('op'); else $(prv).addClass('on');
	$(tab.id).attr('on',tab.prev);

	
	fs.tab = _tema_nav_tab('reset');
}