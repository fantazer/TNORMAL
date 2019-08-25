$(document).ready(function () {

// nice select
$('.select-beauty').niceSelect();
// nice select === end

//closeModal() - закрыть окна
//initModal('data-name-attr') - Открыть нужное окно

//modals
var modalState = {
	"isModalShow": false, //state show modal
	"scrollPos": 0
};
$('.modal-content').click(function (event) {
	event.stopPropagation();
});

var openModal = function () {
	if (!$('.modal-layer').hasClass('modal-layer-show')) {
		$('.modal-layer').addClass('modal-layer-show');
		modalState.scrollPos = $(window).scrollTop();
		$('body').css({
			overflow: 'hidden',
			position: 'fixed',
			overflowY: 'hidden',
			top: -modalState.scrollPos,
			width: '100%'
		});
	}
	modalState.isModalShow = true;
};
var closeModal = function () {
	$('.modal-layer').removeClass('modal-layer-show');
	$('body').css({
		overflow: '',
		position: '',
		top: modalState.scrollPos
	});
	$(window).scrollTop(modalState.scrollPos);
	$('.modal').removeClass('modal__show');
	modalState.isModalShow = false;
};

var initModal = function (el) {
	openModal();
	$('.modal').each(function () {
		if ($(this).data('modal') === el) {
			$(this).addClass('modal__show')
		} else {
			$(this).removeClass('modal__show')
		}
	});
	var modalHeightCont = $(window).height();
	$('.modal-filter').height(modalHeightCont);

};

$('.modal-get').click(function () {
	var currentModal = $(this).data("modal");
	initModal(currentModal);
});

$('.modal-layer , .modal-close').click(function () {
	closeModal();
});
//modals===end

//mobile menu
//Фиксируем скрол
$('.head-toggle--open').click(function(){
	$('body').css({
		overflow: '',
		position: '',
		top: ''
	})
});

$('.head-toggle').click(function(event){
	event.stopPropagation();
	$(this).toggleClass('head-toggle--open');
	$('.slide-menu').toggleClass('slide-menu--open');
	//$('body').toggleClass('body-fix')
});

$('.slide-menu').on("click", function (event) {
	event.stopPropagation();
});

$(document).on("click", function () {
		$('.head-wrap').removeClass('head--up');
		$('.head-toggle').removeClass('head-toggle--open');
		$('.slide-menu').removeClass('slide-menu--open');
		console.log(modalState.isModalShow);
		if(modalState.isModalShow == false){
			$('body').removeClass('body-fix')
	}
});
//mobile menu===end

// fix top-menu
var shrinkHeader = 250;
var heightHeader=$('.header').height();
$(window).scroll(function() {
	var scroll = $(this).scrollTop();
	if ( scroll >= shrinkHeader ) {
			$('body').css('paddingTop',heightHeader);
			$('.header').addClass('shrink');
		}
		else {
				$('body').css('paddingTop',0);
				$('.header').removeClass('shrink');
		}
});

$(window).resize(function(){
	heightHeader=$('.header').height();
});
// fix top-menu === end

});
