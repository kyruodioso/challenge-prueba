
// global vars
var $wrapper;
var $body;
var $html;
var $htmlBody;
var $window;
var WH;
var WW;
var HH;

// ---

// the magic begins
$(document).ready(function() {
	
	// global vars
	$wrapper = $('#wrapper');
	$body = $('body');
	$html = $('html');
	$htmlBody = $('html,body');
	$window = $(window);

	// ---

	// Escribir evento popup aqui
	console.log("Test");
	// global resize
	globalResize();
	$window.resize(globalResize);
	
	// ---
	
});

// ---

// global resize
function globalResize() {
	
	// set window size
	WH = $window.height();
	WW = $window.width();
	HH = 0;
	
}

