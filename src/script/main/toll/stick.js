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

