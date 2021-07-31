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