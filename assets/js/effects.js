const urls = {
	redIslandSeafoodUrl: 'https://www.redislandseafood.com/',
	threeGUrl: 'https://www.redislandseafood.com/',
	furnitureDeluxeUrl: 'https://www.furnituredeluxe.com/',
	scarletsEateryUrl: 'https://kwoods1911.github.io/Restaurant/',
	woodsMaintenanceUrl: 'https://www.woodsmaintenance.com/',
	musicNationUrl: 'https://www.musicnation.com/',
	shellysUrl: 'https://www.musicnation.com/'
}


$(document).ready(function(){
	$('.dropdown_btn').click(function(){
	$('.dropdown_content').slideToggle(500,'swing');
})


$('.project_card').hover(
			function(){$(this).find('.project_description:first').fadeIn(300,'swing');},
			function(){$(this).find('.project_description:first').fadeOut(800);})
//Add slide show function

});



document.getElementById('redisland-seafood-card').addEventListener('click',function(){
	window.open(urls.redislandseafood,'_blank').focus();
});

document.getElementById('threeg-card').addEventListener('click',function(){
	window.open(urls.threeGUrl,'_blank').focus();
});

document.getElementById('scarlets-eatery-card').addEventListener('click',function(){
	window.open(urls.scarletsEateryUrl,'_blank').focus();
});