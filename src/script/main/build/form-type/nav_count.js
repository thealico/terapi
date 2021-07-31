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


