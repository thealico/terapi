function wait_task(name,time){
	console.log(name);
	waitForFinalEvent(function(){
   		console.log('run');
   		eval(name+"()");
   	},time,"some unique string");
}