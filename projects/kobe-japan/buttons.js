$("#buttonId").button({

		icons: {primary: null},
		text: false

}).addClass("ButtonClass");

var $button = $(document.createElement('a'));
//add class
$button.addClass('blackButton');
//call the jquery-ui button function
$button.button();
