$(document).ready(function(){


	$('.dropdown_btn').click(function(){
	$('.dropdown_content').slideToggle(500,'swing');

})


$('.project_card').hover(
			function(){$(this).find('.project_description:first').fadeIn(300,'swing');},
			function(){$(this).find('.project_description:first').fadeOut(800);})
//Add slide show function

});


// select all cards by ID
//add click event listener
//on click open link in new tab.
