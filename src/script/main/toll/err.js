function err(opt){

	let SwalOpt = { 
		
		customClass 	: {
			container   : 'sw-err'
		},
		width 			: 400,
		text 			: ''
	} 
	
	SwalOpt.text = 'Bir sorun oluştu, tekrar deneyiniz';
	
	Swal.fire(SwalOpt);
}