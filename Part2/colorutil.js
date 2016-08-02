//****************** Part 2 Luminosity Node Require *******************\\

module.exports = {

	checkLuminosity : function(r, g, b) {

		var checkLuminosity = ( (0.2126 * r) + (0.7152 * g) + (0.0722*b) );

		return checkLuminosity;
	}

	
};