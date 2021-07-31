function unArry(arr,key,index){
	$(arr).each(function(i,v){
		if ( !index && v == key ) { delete arr[i]; arr.splice(i, 1); }
		if ( index && i == key ) { delete arr[i]; arr.splice(i, 1); }
	})
	return arr;
}
			