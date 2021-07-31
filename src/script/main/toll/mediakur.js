
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@  Media kurma anahtarı : v.1.0 */

function mediakur(j) {

	var kur=true;

	if(j){ 
		
		var eksen = j.substr(2, 1);
		var media = j.substr(0, 2);
		var size ;
		
		if( eksen=='+' ) { 
			
			switch(media){
    			case 'ms' : size = 0; break;
    			case 'xs' : size = set.media['ms']; break;
    			case 'sm' : size = set.media['xs']; break;
    			case 'md' : size = set.media['sm']; break;
    			case 'lg' : size = set.media['md']; break;
 			}
		}
		
		if( eksen=='+') { kur = set.win.x > size ? true : false }
		if( eksen=='-') { kur = (set.win.x < (set.media[media] + 1 )) ? true : false }
	}
	
	return kur;
}