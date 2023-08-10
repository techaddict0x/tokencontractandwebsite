$(document).ready(function(){
	$('.menu__button>a').on('click' , function(e){
		e.preventDefault();
		if ($(this).hasClass("active")) {
			$(this).removeClass('active');
			$('header .outer__header .right__part').css("top" ,"-100%");
			$('body,html').css("overflow-y" ,"initial");
		} else {
			$(this).addClass('active');
			$('body,html').css("overflow-y" ,"hidden");
			$('header .outer__header .right__part').css("top" ,"0px");
		}
	});


	$('.scrollable__button').on("click" ,function(e){
		e.preventDefault();
		let curr = $(this).attr("data-scroll");
		$('html').animate({ 
    	    scrollTop: $(curr).offset().top // прокручиваем страницу к требуемому элементу
        }, 900 // скорость прокрутки
        );
        if ($(window).width() < 991) {
        	$(".menu__button>a").removeClass("active");
        	$('header .outer__header .right__part').css("top" ,"-100%");
			$('body,html').css("overflow-y" ,"initial");
        }
	});

	$('.copy__wrapper a').on("click" ,function(e){
		e.preventDefault();
		var $temp = $("<input>");
	    $("body").append($temp);
	    $temp.val($(this).attr("data-copy")).select();
	    document.execCommand("copy");
	    $temp.remove();
	});
});