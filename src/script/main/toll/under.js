$(document).on('click','.under',function(e){
	let text = 'Bu bölüm geliştiriliyor';

	Swal.fire({
		text 		: $(this).data('mesaj') ? $(this).data('mesaj') : text,
		width 		: 350,
		customClass	: {
		 	popup 	: 'sw-ios sw-note sw-ok'
		}
	})

	return false; 
})