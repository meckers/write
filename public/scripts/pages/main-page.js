// Kändes inte bra först, men kom fram till att det är bra att ha dessa dependencies här, så kan man potentiellt välja bort libs baserat på
// vad man behöver per sida.

require(
	[
		"sji",
		"underscore",
		"jquery",
		"controllers/main-controller"
	], function(sji, underscore, jquery, MainController) {

		var controller = new MainController();

	}
);