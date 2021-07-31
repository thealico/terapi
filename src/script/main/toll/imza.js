var signaturePad;
var hasSignature;

function imza(){
	
	

	var canvas = document.getElementById('imza-pad');

	signaturePad = new SignaturePad(canvas, {
		backgroundColor: 'rgb(255, 255, 255)' ,
		onEnd: function() {
        	hasSignature = true;
        }
	});


	var clearButtonAction = function () {
	    hasSignature = false;
	    signaturePad.clear();
	}

	
	function resizeCanvas() {

		if (hasSignature) {
            var signatureCopy = signaturePad.toDataURL();
        }

	    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
	    canvas.width = canvas.offsetWidth * ratio;
	    canvas.height = canvas.offsetHeight * ratio;
	    canvas.getContext("2d").scale(ratio, ratio);

	   if (hasSignature) {
            signaturePad.fromDataURL(signatureCopy);
        } else {
            // signaturePad doesn't watch canvas and needs to be told it's clear now
            signaturePad.clear(); 
        }
	}

	window.onresize = resizeCanvas;
	resizeCanvas();

	


	$(document).on('click','.imza-clear',function(){
		signaturePad.clear();
	})

}


function imzaHas(){

	return signaturePad.isEmpty();
}


function imzaClear(){
	
	signaturePad.clear();
}

function imzaData(){

	const data = signaturePad.toData();

	return data;
}


// Draws signature image from an array of point groups

