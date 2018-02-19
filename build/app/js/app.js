$(document).ready(function () {
    svg4everybody({});
});
// Библиотека wow.js для анимации

(function () {
	new WOW().init();
})();
// Начальная функция

(function(){
	if($('.reviews')) {
		reviewsSlick();
	}
	if($('#contact')) {
		contactSlide();
	}
	if($('.line')) {
		lineFade()
	}
})();

function reviewsSlick(){
	$('.reviews__user').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.reviews__descr'
	})

	$('.reviews__descr').slick({
		dots: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		asNavFor: '.reviews__user',
	})
}

function contactSlide(){
	$('.js-contact').click(function(e) {
		e.preventDefault();
		var direction = $(this).attr('href');
			reqArticle = $('section').filter(direction),
			reqArticlePos = reqArticle.offset().top - 100;

		$('body, html').animate({scrollTop: reqArticlePos}, 500);
	});
}

function lineFade(){
	var line = $('.line'),
		lineNone = 'line--none',
		lineTrs = 'line--trs';

	line.addClass(lineNone);
	setTimeout(function(){
		line.addClass(lineTrs);
	},300);
	for(i=0;i<line.length;i++) {
		var elem = line.eq(i);
		checkScroll(elem)
	}

	function checkScroll(elem) {
		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop();

			if(checkDistance(scrollTop)) {
				elem.removeClass(lineNone);
			}
		});

		var checkDistance = function(scrollTop) {
			var offset = elem.offset().top,
				windowMargin = Math.ceil($(window).height() / 3),
				topBorder = offset - scrollTop - windowMargin - 400,
				bottomEdge = elem.outerHeight(true) + offset,
				bottomBorder = scrollTop + windowMargin - bottomEdge;

				return topBorder <= 0 && bottomBorder <= 0
		}
	}
}