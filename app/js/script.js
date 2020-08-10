$(document).ready(function () {

	// nice select
	//$('.select-beauty').niceSelect();
	// nice select === end

	//modals
	var modalState = {
		"isModalShow": false, //state show modal
		"scrollPos": 0
	};
	var scrollWidth= window.innerWidth - $(document).width();
	var openModal = function () {
		if (!$('.modal-layer').hasClass('modal-layer-show')) {
			$('.modal-layer').addClass('modal-layer-show');
			modalState.scrollPos = $(window).scrollTop();
			$('body').css({
				overflowY: 'hidden',
				top: -modalState.scrollPos,
				width: '100%',
				paddingRight:scrollWidth
			});

		}
		modalState.isModalShow = true;
	};

	var closeModal = function () {
		$('.modal-layer').removeClass('modal-layer-show');
		$('body').css({
			overflow: '',
			position: '',
			top: modalState.scrollPos,
			paddingRight:0
		});
		$(window).scrollTop(modalState.scrollPos);
		$('.modal').addClass('modal-hide-animation');
		setTimeout(function(){
			$('.modal').removeClass('modal-hide-animation');
			$('.modal').removeClass('modal__show');
		},600);
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

	$('.modal-close, .modal-hide').click(function () {
		closeModal();
	});
	//modals===end

	// fix top-menu
	var shrinkHeader = 250;
	var head = $('.header');
	var heightHeader = head.height();
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= shrinkHeader ) {
				$('body').css('paddingTop',heightHeader);
				head.addClass('shrink');
			}
			else {
					$('body').css('paddingTop',0);
					head.removeClass('shrink');
			}
	});
	// fix top-menu === end


	// toggle single
	$('.js-toggle').click(function(){
		$(this).toggleClass("active")
	})
	// toggle single === end

	//toggle class + neighbor
	$('.js-commutator-el').click(function(){
		var thisItem = $(this).data("item");
		var thisGroup = $(this).data("group") || false;
		var isEach = $(this).data("each") || false;
		var selector;
		$(this).toggleClass("active")
		if($('.js-commutator-cont').data('group')) {
			selector = $(".js-commutator-cont[data-group=" + thisGroup + "");
		}else{
			selector = $(".js-commutator-cont");
		}
		selector.each(function(){
			if($(this).data("item")=== thisItem){
				$(this).toggleClass('active');
			}else{
				isEach ? $(this).removeClass("active") : false
			}
		})
	})
	//toggle class + neighbor === end

	//toggle class + parent
	$('.js-switch').click(function(){
		var thisItem = $(this).data("item");
		var isEach = $(this).data("each") || false;
		var parrent = $(this).closest(".js-switch-parrent");
		$(this).toggleClass("active")
		var selector;
		selector = $(".js-switch[data-item=" + thisItem + "")
		if(isEach){
			selector.not(this).removeClass('active')
			selector.not(this).closest(".js-switch-parrent").find(".js-switch-cont").removeClass('active')
		}
		parrent.find(".js-switch-cont[data-item=" + thisItem + "]").toggleClass('active')
	})
	//toggle class + parent === end

	// incr
	var incrEl= {}
	$('.incr__nav').click(function(){
		incrEl.parent = $(this).closest(".incr");
		incrEl.value = parseInt($(this).closest(".incr").find('.incr__val span').html());
		incrEl.state = $(this).closest(".incr").find('.incr__val span')
	});

	$('.incr__minus').click(function () {
		--incrEl.value;
		if(incrEl.parent.hasClass("incr--one")){
				incrEl.value = incrEl.value < 1 ? 1 : incrEl.value
		}
		incrEl.value = incrEl.value < 1 ? 0 : incrEl.value
		incrEl.state.html(incrEl.value);
	});

	$('.incr__plus').click(function () {
		++incrEl.value;
		incrEl.value = incrEl.value > 100 ? 100 : incrEl.value;
		incrEl.state.html(incrEl.value);
	});

	// Переключение с кнопки на инкремент
	// increment btn
	$('.incr-btn__el').click(function(){
		$(this).closest(".incr-btn").addClass('incr-btn--active');
	});
	$('.incr-btn .incr__minus').click(function () {
		incrEl.value === 1 ? $(this).closest(".incr-btn").removeClass("incr-btn--active") : ''
	})
	// increment btn === end
	// incr === end

	// dropdown
	$('.dropdown').click(function () {
		$(this).attr('tabindex', 1).focus();
		$(this).toggleClass('active');
		$(this).find('.dropdown-menu').slideToggle(300);
	});
	$('.dropdown').focusout(function () {
		$(this).removeClass('active');
		$(this).find('.dropdown-menu').slideUp(300);
	});
	$('.dropdown .dropdown-menu__el').click(function () {
		var parent = $(this).parents('.dropdown')
		parent.find('.dropdown-current__val').html($(this).html());
		parent.find('input').attr('value', $(this).data('value'));
	});
	// dropdown === end

	//window.condition = {};
	//window.condition.info = info;
});
