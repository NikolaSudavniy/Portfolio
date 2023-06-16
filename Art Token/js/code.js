	var rellax = new Rellax('.rellax');

	window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 760) {
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.header-nav').clientHeight <= scrollDistance) {
				document.querySelectorAll('.header-nav a').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});

				document.querySelectorAll('.header-nav li')[i].querySelector('a').classList.add('active');
			}
		});
	}
	});


	function fag(){
		$('.faq .info p').slideUp(0);
		$('.faq h4').click(function(){
			$(this).next().slideToggle();
			$(this).closest('.info').toggleClass('active-fag')
		})
	}

	fag();

	new Parallax(document.getElementById('scene'));
	new Parallax(document.getElementById('scene2'));

	SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 1100,
    // Размер шага в пикселях 
    stepSize         : 75,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 2,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})
