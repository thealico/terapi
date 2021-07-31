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
	
	
