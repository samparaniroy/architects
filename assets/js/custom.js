$(document).ready(function () {
	$('.navber-icon, .close-icon').click(function(){
		$('.header-menuarea').toggleClass('offcanvas-menu')
	})
	var owl = $('.roadmap-content');owl.owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		autoplay:true,
		items:2.4,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:1,
			},
			1000:{
				items:2,
				stagePadding:260,
			}
		}
	})
});