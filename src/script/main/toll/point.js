function ofPoint(e){

	e = e ? $(e) : $('html');
	$(e).addClass('of-point');
	
}

function onPoint(e){
	
	e = e ? $(e) : $('html');
	$(e).removeClass('of-point');
}

