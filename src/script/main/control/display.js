function display(resize,newDocSize)
{
	if(newDocSize) doc_update();
	
	if(resize)
	{
	   
	    waitForFinalEvent(function(){
	   		tema(true);
	   	},800, "some unique string");
	}
}

