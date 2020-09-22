
let swiper1 = document.querySelector('.slider-container'),
		swiper2 = document.querySelector('.swiper-container'),
		burger = document.querySelector('.burger'),
		close = document.querySelector('.menu__close'),
		menu = document.querySelector('.menu'),
		playButtonsFirst = document.querySelectorAll('.main-slider__play'),
		slidePlay = document.querySelectorAll('.slide-play');

let swiperSlider1 = new Swiper(swiper1, {
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 105,
});

let swiperSlider2 = new Swiper(swiper2, {
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
	fadeEffect: {
		crossFade: true
	},
	effect: 'fade',
	navigation: {
    nextEl: '.btn-right',
    prevEl: '.btn-left',
  },
});

swiperSlider2.on('transitionEnd', function () {
	let video = document.querySelectorAll('.first__slider video');
	video.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	});
	playButtonsFirst.forEach(el => {
		el.style.display = 'block';
	});
});

burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
});

playButtonsFirst.forEach(el => {
	el.addEventListener('click', (e) => {
			let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
			video.play();
			e.currentTarget.style.display = 'none';
			setTimeout (() => {
				video.volume = 0.5;
			},1000);
	});
});

slidePlay.forEach(el => {
	el.addEventListener('click', (e) => {
			let video = e.currentTarget.closest('.swiper-slide').querySelector('video');
			video.play();
			e.currentTarget.style.display = 'none';
			setTimeout (() => {
				video.volume = 0.5;
			},1000);
	});
});


swiperSlider1.on('transitionEnd', function () {
	let video = document.querySelectorAll('.swiper-slide video');
	video.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	});
	slidePlay.forEach(el => {
		el.style.display = 'flex';
	});
});

