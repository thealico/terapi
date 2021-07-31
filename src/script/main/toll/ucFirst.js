function ucFirst(string) {
	
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function capitalize(str) {

	let words   = str.split(' ');
	let newstr  = new Array();
  
	$.each(words, function(i, word){ 
		newstr[i] = word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
	})

	return newstr.join(' ');
}