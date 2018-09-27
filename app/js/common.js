$(function() {
	var swiper = new Swiper('.swiper-container', {
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		  renderBullet: function (index, className) {
			return '<li class="' + className + '">' + (index + 1) + '</li>';
		  },
		},
		});

		// var hamburger = $('.js-toggle-menu');
		// var menu = $('.header-menu');
		
		// hamburger.on('click', function() {
		// 	hamburger.toggleClass('hamburger-block_active');
		// 	menu.toggleClass('header-menu_open');
		// });

		// $(window).resize(function() {
		// 	if($(window).width() >= 960) {
		// 		hamburger.removeClass('hamburger-block_active');
		// 		menu.removeClass('header-menu_open');
		// 	}
 		// });
});
