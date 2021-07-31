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



