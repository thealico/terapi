function base64(id,out) {
	var reader = new FileReader();
	reader.onload = function(){
		var dataURL = reader.result;
		$(out).val(dataURL);
	};
	return reader.readAsDataURL(document.getElementById(id).files[0]);
};