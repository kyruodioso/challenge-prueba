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
$(document).ready(function () {

	// global vars
	$wrapper = $('#wrapper');
	$body = $('body');
	$html = $('html');
	$htmlBody = $('html,body');
	$window = $(window);

	// ---
	//DOM elements
	const modalActive = document.getElementById('modal-active');
	const modal = document.getElementById('modal');

	// Escribir evento popup aqui
	console.log("Test");
	createModal()
	// global resize
	globalResize();
	$window.resize(globalResize);

	// ---

});

//create modal
function createModal() {
	const modalGenerator = `<div class="modal-container middle">	
			                            <div class="modal-header">
				                            <h2>sign in</h2>
		                                </div>
			                                <div class="modal-body">
				                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro provident modi ad dignissimos vel accusamus a         umquam, architecto inventore dolorum magnam quisquam aliquam ipsa quae odit aut aspernatur doloremque odio.s
											  </p>
		                                	</div>
                                            <div class="modal-footer">
			                                    <button class="btn btn-transparent" id="close-modal">Close</button>
		                                    </div>
	                        </div>`
	$(".modal").html(modalGenerator)
	$("#open-modal").on("click", function () {
		$(".modal-container").show()
	})
	$("#close-modal").on("click", function(){
		$(".modal-container").hide()
	})




}



// ---

// global resize
function globalResize() {

	// set window size
	WH = $window.height();
	WW = $window.width();
	HH = 0;

}