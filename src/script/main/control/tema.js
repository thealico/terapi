/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ Tema Update   */

function tema(time){

	if(time)
	{
			
		mediasizemod();
		kit('RootStyle');
		
		return false
	}
	
	kit('RootStyle');
	mediasizemod();

	$('#code-builds').removeClass('hidden');

}
