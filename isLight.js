//************************* Part 1: Luminosity **********************\\

// var r = process.argv[2];
// var g = process.argv[3];
// var b = process.argv[4];


// function luminosity(r, g, b){
// 	var checkLuminosity = ( (0.2126 * r) + (0.7152 * g) + (0.0722*b) );
// 	return checkLuminosity;
// } 

// console.log( luminosity(r, g, b) );



//******************** Luminosity Is Light Program *******************************\\

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];


function isLight(r, g, b){
	
	var checkLuminosity = ( (0.2126 * r) + (0.7152 * g) + (0.0722*b) );

	if(checkLuminosity > 155){
		return 'light';
	}
	else{
		return 'dark';
	}
} 

console.log( isLight(r, g, b) );