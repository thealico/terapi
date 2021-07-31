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



