function dateTime(){

	var d = new Date();
	
	var Y  = d.getFullYear();
	var M  = (d.getMonth()+1).toString().padStart(2,'0');
	var X  = d.getDate().toString().padStart(2,'0');
	
	var h = d.getHours().toString().padStart(2,'0');
	var m = d.getMinutes().toString().padStart(2,'0');
	var s = d.getSeconds().toString().padStart(2,'0');	

	return Y+'-'+M+'-'+X+' '+h+':'+m+':'+s;
}


function dateDiff(one, two) {

	let dt1 = new Date(one);
	let dt2 = new Date(two);
	
	return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}

