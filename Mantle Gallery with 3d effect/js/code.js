document.addEventListener('DOMContentLoaded', function() {
	const showSlider = new Swiper('.gallery-carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1800,
		centeredSlides: true,
		navigation: {
			prevEl: '.gallery-nav_prev',
			nextEl: '.gallery-nav_next'
		}
	});
	document.querySelector('video').playbackRate = 2;
})
