function css(e,c,on,time){
	
	if(time){
		
		window.setTimeout(function(){
			if(on) $(e).addClass(c); else $(e).removeClass(c);	
		},time)
		
		return false;
	}

	if(on) $(e).addClass(c); else $(e).removeClass(c);

	

}

