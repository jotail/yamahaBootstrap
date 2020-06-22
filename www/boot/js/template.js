
$(document).ready(function(){
	if(location.pathname.startsWith('/na')){
		$('body').addClass('na');
	}
	if(location.pathname.startsWith('/author/na')){
		$('body').addClass('na');
	}
});


/*** Layout **/
$(function(){
	if($('.prod_nav_cont li').length < 3){
		$('.prod_nav_box').addClass('d2');
	}

	$(window).resize (resizeBox).resize();
	function resizeBox(){
		var locW = $(window).width();
		var locWs = 1082;
		var locWs2 = 903;
		//$('body').append('<div id=\"locate\" style=\"position:fixed;left:10px;bottom:10px;width:50px;padding:2px 0;background:#fff;border:1px solid #000;text-align:center;z-index:1111112;\">' + locW + '</div>');

		function scrollEvent() {
			locS =  $(window).scrollTop();
			if(locS > 51){
				$('header, #container').addClass('top');
			}
			if(locS < 50){
				$('header, #container').removeClass('top');
			}
		}
		$(window).scroll(function() {
			scrollEvent();
		});
		$(window).resize(function() {
			scrollEvent();
		});
		if(locW > locWs){
			$('.btn_m_gnb_op').addClass('on');
			$('.btn_m_gnb_cl').removeClass('on');
			$('#gnb').removeClass('off').removeClass('on');
			$('#gnb').find('.dep').removeClass('over');
			$('.bg_mask').fadeOut();
			$('#utill_nav .link').removeClass('off').removeClass('on');

			$('.solar_btn.op').addClass('on');
			$('.solar_btn.cl').removeClass('on');
			$('.solar_cont_nav').removeClass('on');
		} else {
		}

		if(locW > locWs2){
			$('.tab_ul_btn.op').addClass('on');
			$('.tab_ul_btn.cl').removeClass('on');
			$('.tab_ul_ty ul').removeClass('on');
		} else {
		}

		setTimeout(function(){
			$('.prod_nav').prod_nav();
			$('.step_list').step_list();
			$('.step_list02').step_list02();
			$('.mc_slide').slide_m();
		}, 50);
		setTimeout(function(){
			$('.solar_cont_area').solar_ty();
		}, 100);
		$('.prod_search').prod_search_chk();
		$('.ico_how').banner_a();
	}


	var header = $('header');
	var wrap = $('#wrap');
	header.prepend('<a href="#gnb" class=\"btn_m_gnb_op on\"><em>Menu Open</em></a>');
	header.append('<a href="#gnb" class=\"btn_m_gnb_cl\"><em>Menu Close</em></a>');
	wrap.prepend('<span class=\"bg_mask\"></span>');

	var nav_m_op = $('.btn_m_gnb_op');
	var nav_m_cl = $('.btn_m_gnb_cl, .bg_mask');
	var bg_mask = $('.bg_mask');

	var gnb = $('#gnb');
	var gnb_m = $('.dep_m');
	var gnb_dep = $('#gnb .dep');
	var gnb_dep2 = $('#gnb .dep2');
	var gnb_dep3 = $('.gnb_nav .li_dep .li');
	var utill_nav  = $('#utill_nav .link');

	$('#gnb .dep2 a').wrapInner('<em></em>');


	/* Mobile */
	nav_m_op.click(function(){
		var locW = $(window).width();
		var locWs = 1082;
		if(locW > locWs){
		} else {
			header.addClass('ms')
			nav_m_op.removeClass('on');
			nav_m_cl.addClass('on');
			gnb.addClass('on');
			bg_mask.fadeIn();
			utill_nav.addClass('on');
		}
		return false;
	});

	nav_m_cl.click(function(){
		var locW = $(window).width();
		var locWs = 1082;
		if(locW > locWs){
		} else {
			header.removeClass('ms')
			nav_m_op.addClass('on');
			nav_m_cl.removeClass('on');
			gnb.addClass('off');
			bg_mask.fadeOut();
			utill_nav.addClass('off');
			utill_nav_gs_close();
			setTimeout(function(){
				gnb.find('.dep').removeClass('over');
				gnb.removeClass('off').removeClass('on');
				utill_nav.removeClass('off').removeClass('on');
			}, 600);
		}
		return false;
	});

	gnb_m.click(function(){
		var locW = $(window).width();
		var locWs = 1082;
		var tar = $(this).closest('.dep');
		if(locW > locWs){
			return false;
		} else {
			var foldingChk = (tar.hasClass('over'));
			tar.removeClass('over');
			gnb.find('.dep').each (function(){
				$(this).removeClass('over');
			});
			if (foldingChk){
				tar.removeClass('over');
			} else {
				tar.addClass('over');
			}
			return false;
		}
	});


	/* PC */
	gnb_m.bind('mouseover focusin',function(){
		var locW = $(window).width();
		var locWs = 1082;
		if(locW > locWs){
			header.addClass('over');
			gnb_m.removeClass('over');
			$(this).addClass('over');
			gnb_dep2.removeClass('over');
			$(this).closest('.dep').find('.dep2').addClass('over');
			$('.header_banner').addClass('on');
		} else {
		}
	});

	header.mouseleave(function(){
		var locW = $(window).width();
		var locWs = 1082;
		if(locW > locWs){
			gnb_close();
		}
	});

	$('h1, #utill_nav').mouseover(function(){
		var locW = $(window).width();
		var locWs = 1082;
		if(locW > locWs){
			gnb_close();
		}
	});

	gnb_dep3.bind('mouseover',function(){
		gnb_dep3.removeClass('over');
		$(this).addClass('over');
	});

	gnb_dep3.bind('mouseout',function(){
		gnb_dep3.removeClass('over');
	});

	function gnb_close(){
		header.removeClass('over');
		gnb_m.removeClass('over');
		gnb_dep.removeClass('over');
		gnb_dep2.removeClass('over');
		gnb_dep3.removeClass('over');
		$('.header_banner').removeClass('on');
	}


	/* Search *//* 18.02.05 수정 */
	var utill_nav_search = $('#utill_nav .search');

	utill_nav_search.find('.list_m').click(function(){
		$('.search .utill_nav_op').show();
		//setTimeout(function(){
			$('body').addClass('search_w');
			//$('html, body').stop().animate({scrollTop:0}, 600);
		//}, 100);
		return false;
	});

	utill_nav_search.find('.btn_close_s').click(function(){
		utill_nav_search_close();
		$('header').removeClass('link_w');
		$('.header_top').removeClass('on');
		return false;
	});

	function utill_nav_search_close(){
		$('body').removeClass('search_w');
		//setTimeout(function(){
			$('.search .utill_nav_op').hide();
		//}, 550);
	}

	utill_nav_search.find('input').focusin(function(){
		utill_nav_search.addClass('on');
	});

	utill_nav_search.find('input').focusout(function(){
		utill_nav_search.removeClass('on');
	});


	/* Language */
	var utill_nav_gs = $('#utill_nav .language');
	var utill_nav_gs_cont = $('.language .utill_nav_op');
	var gs_m = $('#language_cont .tit');

	utill_nav_gs.find('.list_m').click(function(){
		utill_nav_gs_cont.fadeIn();
		return false;
	});
	utill_nav_gs.bind('mouseover focusin',function(){
		var locW = $(window).width();
		var locWs = 722;
		if(locW > locWs){
			 //utill_nav_gs_cont.fadeIn();
			utill_nav_gs_cont.removeAttr('style');
			utill_nav_gs_cont.addClass('on');
		}

		return false;
	});

	utill_nav_gs.find('.btn_close_gs').click(function(){
		utill_nav_gs_close();
		return false;
	});

	$('header').mouseleave(function(){
		var locW = $(window).width();
		var locWs = 722;
		if(locW > locWs){
			 utill_nav_gs_close();
		}
	});

	function utill_nav_gs_close(){
		var locW = $(window).width();
		var locWs = 722;
		if(locW > locWs){
			utill_nav_gs_cont.removeAttr('style');
			utill_nav_gs_cont.addClass('off');
			setTimeout(function(){
				utill_nav_gs_cont.removeClass('off').removeClass('on');
			}, 400);
		} else {
			utill_nav_gs_cont.fadeOut();
		}



		//utill_nav_gs_cont.addClass('off');
		//setTimeout(function(){
			//utill_nav_gs_cont.removeClass('off').removeClass('on');
		//}, 400);
	}

	gs_m.click(function(){
		var locW = $(window).width();
		var locWs = 1082;
		var tar = $(this).closest('nav');
		if(locW > locWs){
		} else {
			var foldingChk = (tar.hasClass('on'));
			tar.removeClass('on');
			if (foldingChk){
				tar.removeClass('on');
			} else {
				$('#language_cont nav').removeClass('on');
				tar.addClass('on');
			}
			return false;
		}
	});

	$('.utill_nav_cont .qcells').click(function(){
		var locW = $(window).width();
		var locWs = 722;
		if(locW > locWs){
			$('header').addClass('link_w');
			$('.header_top').removeClass('on');
			$('.header_top.qcell').addClass('on');

			utill_nav_search_close();  //18.02.05 수정
			$('html, body').stop().animate({scrollTop:0}, 400);//18.02.05 수정
			return false;
		}
	});
	$('.utill_nav_cont .partners').click(function(){
		var locW = $(window).width();
		var locWs = 722;
		if(locW > locWs){
			$('header').addClass('link_w');
			$('.header_top').removeClass('on');
			$('.header_top.partners').addClass('on');

			utill_nav_search_close();  //18.02.05 수정
			$('html, body').stop().animate({scrollTop:0}, 400);//18.02.05 수정
			return false;
		}
	});
	$('.header_top .view').click(function(){
		$('header').removeClass('link_w');
		$('.header_top').removeClass('on');
	});
	/*
	$('header').bind('mouseleave',function(){
		var locW = $(window).width();
		var locWs = 722;
		if(locW > locWs){
			$('header').removeClass('link_w');
			$('.header_top').removeClass('on');
			return false;
		}
	});
	*/
	$('.header_top .close').click(function(){
		$('header').removeClass('link_w');
		//setTimeout(function(){
			$('.header_top').removeClass('on');
		//}, 600);
		return false;
	});

	$('.na .gnb03 .dep3').closest('li').addClass('hid')
	$('.na .gnb03 .hid > a').click(function(){
		return false;
	});



	/*** Footer ***/
	$('.family_site .btn').click(function(){
		if($('.family_site').hasClass('on')){
			$('.family_site').addClass('off');
			setTimeout(function(){
				$('.family_site').removeClass('off').removeClass('on');
			}, 400);
		}else{
			$('.family_site').addClass('on');
			setTimeout(function(){
				$('html, body').stop().animate({scrollTop:$('.family_site').offset().top}, 600);
			}, 100);
		}
		return false;
	});
});


/*** Form ***/
$(function(){
	if($("input[type='checkbox']").length > 0){
		$("input[type='checkbox']").ezMark();
	}
	if($("input[type='radio']").length > 0){
		$("input[type='radio']").ezMark();
	}
});


/*** Template ***/
$(function(){
	/* Vusual Area */
	$('.visual_area .img').imgLiquid({fill:true, horizontalAlign:"center", verticalAlign:"top"});

	/* Tab */
	var tab_ty = $('.tab_ul_ty');
	tab_ty.prepend('<a href="#" class=\"tab_ul_btn op on\"><span><em>Tab Menu Open</em></span></a>');
	tab_ty.append('<a href="#" class=\"tab_ul_btn cl\"><span><em>Tab Menu Close</em></span></a>');

	var tab_ty_cont = $('.tab_ul_ty ul');
	var tab_ty_op = $('.tab_ul_btn.op');
	var tab_ty_cl = $('.tab_ul_btn.cl');
	tab_ty_op.click(function(){
		var locW = $(window).width();
		var locWs = 1082;
		if(locW > locWs){
		} else {
			tab_ty_op.removeClass('on');
			tab_ty_cl.addClass('on');
			tab_ty_cont.addClass('on');
		}
		return false;
	});

	tab_ty_cl.click(function(){
		var locW = $(window).width();
		var locWs = 903;
		if(locW > locWs){
		} else {
			tab_ty_op.addClass('on');
			tab_ty_cl.removeClass('on');
			tab_ty_cont.addClass('off');
			setTimeout(function(){
				tab_ty_cont.removeClass('off').removeClass('on');
			}, 600);
		}
		return false;
	});

	/* tab Nav */
	$.fn.tabTy = function(){
		$.each(this, function(i,v){
			$(v).closest('.tab_ty').find('a').removeClass('on');
			$(v).addClass('on');
			var s = $(v).attr("href");
			$(s).parent().find('.tab_cont').removeClass('on');
			$(s).addClass('on');
		});
	};
	$('.tab_ty a').click(function(){
		$(this).tabTy();
		return false;
	});

	/* Popup */
	$.fn.popOpen = function(){
		$(this).bind('click', function(e){
			var s = $(this).attr("href");
			$(s).popup();
		});
		return this;
	};
	$('.btn_pop').popOpen();

	/* accordian_ty */
	$.fn.accordian_ty = function(){
		var tar = $(this).closest('.list');
		var foldingChk = tar.hasClass('on');
		if (foldingChk){
			tar.removeClass('on');
		} else {
			tar.siblings('.list').removeClass('on');
			tar.addClass('on');
		}
	};
	$('.accordian_ty .list .btn').click(function(){
		$(this).accordian_ty();
		return false;
	});

	$('.accordian_ty02 .list .btn').click(function(){
		$(this).accordian_ty();
		return false;
	});


	/* Btn */
	$('.btn_arrow').append('<span><em></em></span>');
	$('.btn_download .btn').append('<span><em></em></span>');

	$('.btn_download .btn').click(function(){
		if($(this).closest('.btn_download').hasClass('on')){
			$(this).closest('.btn_download').removeClass('on');
		} else{
			$(this).closest('.btn_download').addClass('on');
		}
		return false;
	});
	$('.btn_download').mouseleave(function(){
		$(this).removeClass('on');
		return false;
	});

	/* Cont_list / Step_list */
	$('.cont_list .img, .step_list .list .img, .step_list02 .list .img, .step_list_area02 .bg_img').imgLiquid({fill:true, horizontalAlign:"center", verticalAlign:"top"});
	$('.cont_wide_box .img.img_w').imgLiquid({fill:true, horizontalAlign:"center", verticalAlign:"center"});

	$('.player_box .img').imgLiquid({fill:true, horizontalAlign:"center", verticalAlign:"top"});
	$('.step_list .box').bind('mouseover',function(){
		var locW = $(window).width();
		var locWs = 903;
		if(locW > locWs){
			$('.step_list .list').removeClass('on');
			$(this).closest('.list').addClass('on');
		} else {
		}
	});
	$('.step_list .box_over').bind('mouseleave',function(){
		var locW = $(window).width();
		var locWs = 903;
		if(locW > locWs){
			$('.step_list .box_over').removeClass('act');
		} else {
		}
	});

	$('.step_list .box > dl dd a').click(function(){
		$(this).closest('.list').find('.box_over').addClass('act');
		var s = $(this).attr("href");
		$('.step_list .box_over li').removeClass('on');
		$(s).addClass('on');
		return false;
	});
	$('.step_list .btn_box_over_cl').click(function(){
		$(this).closest('.box_over').removeClass('act');
		$(this).closest('.box_over').find('li').removeClass('on');
		return false;
	});
	$('.step_list .box_over .t_line').click(function(){
		$('.box_over').removeClass('act');
		$('.box_over li').removeClass('on');
	});

	$('.step_list02 a').click(function(){
		return false;
	});


	/* Movie */
	var vid = document.getElementById('movieVideo');
	function playVid() {
		vid.play();
	}
	function pauseVid() {
		vid.pause();
	}

	$('.btn_movie').click(function(){
		playVid();
	});
	$('.btn_movie02').click(function(){
		$('.movie_area iframe')[0].src += '&amp;autoplay=1&amp;loop=1';
	});
	$('.player_box .btn_pop').click(function(){
		$('.movie_area iframe')[0].src += '&amp;autoplay=1&amp;loop=1';
	});
	$('.btn_movie_close').click(function(){
		pauseVid();
	});

	$('.solar_residential_visual .tab_ty a').click(function(){
		$(this).tabTy();
		$(this).closest('.solar_residential_visual').find('.img_over_b li').removeClass('on');
		var a = $(this).attr("href").split("#tcs")[1];
		$('.img_over_b li.n' + a).addClass('on');
		return false;
	});
});


/* step_list */
$.fn.step_list = function(){
	$.each(this, function(i,v){
		$(v).carouFredSel({
			responsive:false,
			firstLoadChk :true,
			direction:'left',
			circular:true,
			infinite:true,
			swipe:{onMouse:true, onTouch:true},
			align:false,
			auto:false,
			prev:false,
			next:false,
			pagination:'.step_list_pagn',
			scroll:{items:1}
		});
	});
};

$.fn.step_list02 = function(){
	$.each(this, function(i,v){
		var locW = $(window).width();
		var locWs = 982;
		if(locW > locWs){
			$(v).carouFredSel({
				responsive:true,
				firstLoadChk :true,
				direction:'left',
				circular:true,
				infinite:true,
				swipe:{onMouse:false, onTouch:false},
				items:{ visible:{min:1, max:4}},
				align:false,
				auto:false,
				prev:'.step_list_prev',
				next:'.step_list_next',
				pagination:false,
				scroll:{items:1}
			});

		} else {
			$(v).carouFredSel({
				responsive:false,
				firstLoadChk :true,
				direction:'left',
				circular:true,
				infinite:true,
				swipe:{onMouse:true, onTouch:true},
				align:false,
				auto:false,
				prev:false,
				next:false,
				pagination:'.step_list_pagn',
				scroll:{items:1}
			});
		}
	});
};





/*** Products ***/
/** prod_nav **/
$.fn.prod_nav = function(){
	$.each(this, function(i,v){


		var prod_nav_st = $('.prod_nav_cont li.on').index();
		$(v).find('.prod_nav_cont').carouFredSel({
			responsive:false,
			firstLoadChk :true,
			direction:'left',
			circular:true,
			infinite:true,
			items:{start:prod_nav_st},
			swipe:{onMouse:true, onTouch:true},
			align:false,
			auto:false,
			prev:'.prod_nav_ctr_prev',
			next:'.prod_nav_ctr_next',
			pagination:false,
			scroll:{items:1}
		});

	});
};

/* Products Search */
$.fn.prod_search_chk = function(){
	$.each(this, function(i,v){
		var locW = $(window).width();
		var locWs = 982;
		if(locW > locWs){
			$(v).addClass('on');
			$('.prod_search span').text('CLOSE');
		} else {
			$(v).removeClass('on');
			$('.prod_search span').text('OPEN');
		}
	});
};




$(function(){
	$('.prod_search').prod_search_chk();
	$('.btn_prod_search').click(function(){
		if($('.prod_search').hasClass('on')){
			$('.prod_search').removeClass('on');
			$('.prod_search span').text('OPEN');
		} else {
			$('.prod_search').addClass('on');
			$('.prod_search span').text('CLOSE');
		}
		return false;
	});
});



$.fn.rotProd = function(){
	$.each(this, function(i,v){
		window.onload = init;
		function init(){
			g_prod = $(v).ThreeSixty({
				totalFrames: 24,
				endFrame: 24,
				currentFrame: 0,
				framerate: 24,
				imgList: '.g_rot_img',
				progress: '.g_load',
				imagePath: imagePath,
				filePrefix: prodName,
				ext: '.jpg',
				navigation: false,
				disableSpin: true,
				responsive: true,
				frameAll : true
			});
		}
	});
};

$(function(){
	$('.g_rot').rotProd();


	$('.btn_g1').click(function(){
		$('.gallery_btn a').removeClass('on');
		$(this).addClass('on');
		g_prod.stop();
		g_prod.gotoAndPlay(0);
		return false;
	});
	$('.btn_g2').click(function(){
		$('.gallery_btn a').removeClass('on');
		$(this).addClass('on');
		g_prod.stop();
		g_prod.gotoAndPlay(12);
		return false;
	});
	$('.btn_g3').click(function(){
		if($(this).hasClass('on')){
			$('.btn_g1').trigger('click');
		}else{
			$('.gallery_btn a').removeClass('on');
			$(this).addClass('on');
			g_prod.play();
		}
		return false;
	});
});


/* 하단 컨텐츠 View */
function NextStepOpen(){
	$(function($){
		$('.next_step_cont').addClass('on');
		$('html, body').stop().animate({scrollTop:$('.next_step_cont').offset().top - 200}, 400);
	});
}


/*** SOLAR PROJECT ***/
$(function(){
	var solar_ty = $('.solar_cont_nav_area');
	solar_ty.prepend('<a href="#" class=\"solar_btn op on\"><span><em>Tab Menu Open</em></span></a>');
	solar_ty.append('<a href="#" class=\"solar_btn cl\"><span><em>Tab Menu Close</em></span></a>');

	var solar_ty_cont = $('.solar_cont_nav');
	var solar_ty_op = $('.solar_btn.op');
	var solar_ty_cl = $('.solar_btn.cl');
	solar_ty_op.click(function(){
		var locW = $(window).width();
		var locWs = 1082;
		if(locW > locWs){
		} else {
			solar_ty_op.removeClass('on');
			solar_ty_cl.addClass('on');
			solar_ty_cont.addClass('on');
		}
		return false;
	});

	solar_ty_cl.click(function(){
		var locW = $(window).width();
		var locWs = 1082;
		if(locW > locWs){
		} else {
			solar_ty_op.addClass('on');
			solar_ty_cl.removeClass('on');
			solar_ty_cont.addClass('off');
			setTimeout(function(){
				solar_ty_cont.removeClass('off').removeClass('on');
			}, 600);
		}
		return false;
	});
/*
$('#wrap').easeScroll({
  animationTime:1500,
  stepSize:120,
});
*/
	// $('html').smoothWheel();
	$('.scrollbar-inner').scrollbar();
	//$('.scrollbar-inner').smoothWheel();

});
/* solar_ty */
$.fn.solar_ty = function(){
	$.each(this, function(i,v){
		$(v).find('.solar_cont_nav li').each(function(i) {
			$(this).addClass('itm'+i);
			$(v).find('.solar_cont_nav li.itm0').addClass('selected');

			$(this).click(function() {
				$(v).find('.solar_cont_ty').trigger('slideTo', [i, 0, true]);
				$('.solar_btn.op').addClass('on');
				$('.solar_btn.cl').removeClass('on');
				$('.solar_cont_nav').removeClass('on');
				return false;
			});
		});
		$(v).find('.solar_cont_ty').carouFredSel({
			responsive:true,
			firstLoadChk :true,
			direction:'left',
			circular:true,
			infinite:false,
			auto:false,
			prev:'.solar_c_prev',
			next:'.solar_c_next',
			pagination: false,
			scroll:{
				fx :'crossfade',
				onBefore: function() {
					var pos = $(this).triggerHandler('currentPosition');
					$(v).find('.solar_cont_nav li').removeClass('selected');
					$(v).find('.solar_cont_nav li.itm' + pos).addClass('selected');
					var page = Math.floor( pos / 4 );
					$(v).find('.solar_cont_nav').trigger( 'slideToPage', page );
				}
			}
		});
		$(v).find('.solar_cont_nav').carouFredSel({
			responsive:true,
			firstLoadChk :true,
			direction:'left',
			circular:true,
			infinite:false,
			items:{visible:{min:1, max:4}},
			//scroll:{items:1},
			align:false,
			swipe:{onMouse:true, onTouch:true},
			auto:false,
			prev:false,
			next:false
		});
	});
};

/* ico_how */
$.fn.banner_a = function(){
	$.each(this, function(i,v){
		$(v).carouFredSel({
			responsive:true,
			firstLoadChk :true,
			direction:'left',
			circular:false,
			infinite:false,
			swipe:{onMouse:true, onTouch:true},
			auto:false,
			prev:'.how_i_prev',
			next:'.how_i_next',
			pagination: false,
			scroll:{
				//fx :'crossfade'
			}
		});
	});
};
$(function(){
	$('.ico_how').banner_a();
});


/*** Main ***/
/* Products Banner */
$.fn.slide_m = function(){
	$.each(this, function(i,v){
		var locW = $(window).width();
		var locWs = 982;
		if(locW > locWs){
			$(v).find('.slide_m').carouFredSel({
				responsive:true,
				firstLoadChk :true,
				direction:'left',
				circular:true,
				infinite:true,
				items:3,
				align:false,
				auto:false,
				prev:'.slide_m_prev',
				next:'.slide_m_next',
				pagination:false,
				scroll:{items:1}
			});

		} else {
			$(v).find('.slide_m').carouFredSel({
				responsive:false,
				firstLoadChk :true,
				direction:'top',
				circular:true,
				infinite:true,
				items:3,
				align:false,
				auto:false,
				prev:'.slide_m_prev',
				next:'.slide_m_next',
				pagination:false,
				scroll:{items:1}
			});
		}

	});
};

/* Visual Banner */
$.fn.keyBanner = function(){
	$.each(this, function(x,v){
		/** Banner Visual **/
		var autoObj;
		var currentNum = 1;
		function s_right(){
			currentNum++;
			if(currentNum > $(v).find('.mb_list').length){
				currentNum = 1;
			}
			showPic(currentNum);
		}
		function s_left(){
			currentNum--;
			if(currentNum<1){
				currentNum = $(v).find('.mb_list').length
			}
			showPic(currentNum);
		}
		function play(){
			currentNum++;
			if(currentNum > $(v).find('.mb_list').length){
				currentNum = 1;
			}
			if($(v).find('.mb_list').length>1){
				showPic(currentNum);
			}
		}

		function showPic(num){
			$(function(){
				$(v).find('.mb_list').each(function(i){
					if(num-1==i){
						$(this).fadeIn();
					}else{
						$(this).fadeOut();
					}
				});

				$(v).find('.paging a').each(function(i){
					if(i==num-1){
						$(this).addClass('on');
					}else{
						$(this).removeClass('on');
					}
				});
			});
		}

		$(v).find('.btn_b_next').click(function(){
			s_right();
			clearInterval(autoObj);
			$(this).closest('.pagn_act').removeClass('on');
			return false;
		});
		$(v).find('.btn_b_prev').click(function(){
			s_left();
			clearInterval(autoObj);
			$(this).closest('.pagn_act').removeClass('on');
			return false;
		});
		$(v).find('.btn_stop').click(function(){
			clearInterval(autoObj);
			$(this).closest('.pagn_act').removeClass('on');
			return false;
		});
		$(v).find('.btn_play').click(function(){
			//console.log();
			autoObj = setInterval(play, 8000);
			$(this).closest('.pagn_act').addClass('on');
			return false;
		});
		$(v).swipe({
			swipeLeft:function(event,direction,distance,duration,fingerCount){
				s_right();
				clearInterval(autoObj);
				$(v).find('.pagn_act').removeClass('on');
			},
			swipeRight:function(event,direction,distance,duration,fingerCount){
				s_left();
				clearInterval(autoObj);
				$(v).find('.pagn_act').removeClass('on');
			}
		});

		var imgLength=$(v).find('.slide .mb_list').length
		if(imgLength==1){
			$(v).find('.stop').hide();
			$(v).find('.play').hide();
			$(v).find('.btn_b_prev').hide();
			$(v).find('.btn_b_next').hide();
			$(v).find('.pagn_act').hide();
		}
		for(var i = 1 ; i < imgLength+1; i++) {
			var a = document.createElement('a');
			var e = document.createElement('em');
			$(a).text(i)
			$(a).attr('href','#')
			$(e).text(i)
			$(v).find('.paging').append(a)
			$(v).find('.count p').append(e)

		}
		$(v).find('.paging a').click(function(){
			$(v).find('.pagn_act').removeClass('on');
			menuNum=$(this).index()+1;
			showPic(menuNum);
			clearInterval(autoObj);
			return false;
		});

		$(v).find('.mb_list').eq(0).show();
		$(v).find('.paging a').eq(0).addClass('on');
		$(v).find('.paging a').append('Slide View');
		autoObj = setInterval(play, 8000);
		$('.pagn_act').addClass('on');
	});
};

/* References */
$.fn.keyBanner02 = function(){
	$.each(this, function(x,v){
		var autoObj;
		var currentNum = 1;
		function s_right(){
			currentNum++;
			if(currentNum > $(v).find('.mb_list').length){
				currentNum = 1;
			}
			showPic(currentNum);
		}
		function s_left(){
			currentNum--;
			if(currentNum<1){
				currentNum = $(v).find('.mb_list').length
			}
			showPic(currentNum);
		}
		function play(){
			currentNum++;
			if(currentNum > $(v).find('.mb_list').length){
				currentNum = 1;
			}
			if($(v).find('.mb_list').length>1){
				showPic(currentNum);
			}
		}

		function showPic(num){
			$(function(){
				$(v).find('.mb_list').each(function(i){
					if(num-1==i){
						$(this).fadeIn();
					}else{
						$(this).fadeOut();
					}
				});

				$(v).find('.paging a').each(function(i){
					if(i==num-1){
						$(this).addClass('on');
					}else{
						$(this).removeClass('on');
					}
				});
			});
		}

		$(v).find('.btn_b_next').click(function(){
			s_right();
			clearInterval(autoObj);
			$(this).closest('.pagn_act').removeClass('on');
			return false;
		});
		$(v).find('.btn_b_prev').click(function(){
			s_left();
			clearInterval(autoObj);
			$(this).closest('.pagn_act').removeClass('on');
			return false;
		});
		$(v).find('.btn_stop').click(function(){
			clearInterval(autoObj);
			$(this).closest('.pagn_act').removeClass('on');
			return false;
		});
		$(v).find('.btn_play').click(function(){
			//console.log();
			autoObj = setInterval(play, 8000);
			$(this).closest('.pagn_act').addClass('on');
			return false;
		});
		$(v).swipe({
			swipeLeft:function(event, direction, distance, duration, fingerCount) {
				s_right();
				clearInterval(autoObj);
				$(this).closest('.pagn_act').removeClass('on');
			},
			swipeRight:function(event, direction, distance, duration, fingerCount) {
				s_left();
				clearInterval(autoObj);
				$(this).closest('.pagn_act').removeClass('on');
				return false;
			}
		});

		var imgLength=$(v).find('.slide .mb_list').length
		if(imgLength==1){
			$(v).find('.stop').hide();
			$(v).find('.play').hide();
			$(v).find('.btn_b_prev').hide();
			$(v).find('.btn_b_next').hide();
			$(v).find('.pagn_act').hide();
		}
		for(var i = 1 ; i < imgLength+1; i++) {
			var a = document.createElement('a');
			var e = document.createElement('em');
			$(a).text(i)
			$(a).attr('href','#')
			$(e).text(i)
			$(v).find('.paging').append(a)
			$(v).find('.count p').append(e)

		}
		$(v).find('.paging a').click(function(){
			$(v).find('.pagn_act').removeClass('on');
			menuNum=$(this).index()+1;
			showPic(menuNum);
			clearInterval(autoObj);
			return false;
		});

		$(v).find('.mb_list').eq(0).show();
		$(v).find('.paging a').eq(0).addClass('on');
		$(v).find('.paging a').append('Slide View');
		//autoObj = setInterval(play, 8000);
		$('.pagn_act').addClass('on');
	});
};
$.fn.referencesEvent = function(){
	$.each(this, function(x,v){
		$(window).resize(resizeReferences).resize();
	});
}
function resizeReferences(){
	function scrollEvent() {
		locS =  $(window).scrollTop();
		locProd =  $('.references_cont').offset().top - 5;
		locProd02 =  locProd + 340;
		locProd02_2 =  locProd + 650;
		locProd03 =  locProd + 840;
		locProd04 =  locProd + 1235 ;
		if(locS > locProd){
			$('.references_cont').addClass('act');
		} else{
			$('.references_cont').removeClass('act');
		}
		if(locS > locProd02){
			$('.references_cont').addClass('act02');
		} else{
			$('.references_cont').removeClass('act02');
		}
		if(locS > locProd02_2){
			$('.references_cont').addClass('act02_2');
		} else{
			$('.references_cont').removeClass('act02_2');
		}
		if(locS > locProd03){
			$('.references_cont').addClass('act03');
		} else{
			$('.references_cont').removeClass('act03');
		}
		if(locS > locProd04){
			$('.references_cont').addClass('act04');
		} else{
			$('.references_cont').removeClass('act04');
		}
	}
	$(window).scroll(function() {
		scrollEvent();
	});
	$(window).resize(function() {
		scrollEvent();
	});
}



$(function(){
	$('.btn_bg_ctr').click(function(){
		if($('.references_area').hasClass('on')){
			$('.references_area').removeClass('on');
		} else{
			$('.references_area').addClass('on');
		}
		return false;
	});
});

/* solar panels */
$.fn.solarEvent = function(){
	$.each(this, function(x,v){
		$(window).resize(resizeProd).resize();
	});
}
function resizeProd(){
	function scrollEvent() {
		locS =  $(window).scrollTop();
		locProd =  $('.solar_panels_banner').offset().top - 5;
		locProd02 =  locProd + 340;
		locProd02_2 =  locProd + 650;

		locProd03 =  locProd + 840;
		locProd04 =  locProd + 1235;
		if(locS > locProd){
			$('.solar_panels_banner').addClass('act');
		} else{
			$('.solar_panels_banner').removeClass('act');
		}
		if(locS > locProd02){
			//$('.solar_panels_banner').removeClass('act');
			$('.solar_panels_banner').addClass('act02');
		} else{
			$('.solar_panels_banner').removeClass('act02');
		}
		if(locS > locProd02_2){
			$('.solar_panels_banner').addClass('act02_2');
		} else{
			$('.solar_panels_banner').removeClass('act02_2');
		}

		if(locS > locProd03){
			$('.solar_panels_banner').addClass('act03');
		} else{
			$('.solar_panels_banner').removeClass('act03');
		}
		if(locS > locProd04){
			$('.solar_panels_banner').addClass('act04');
		} else{
			$('.solar_panels_banner').removeClass('act04');
		}
	}
	$(window).scroll(function() {
		scrollEvent();
	});
	$(window).resize(function() {
		//scrollEvent();
	});
}

$(function(){
	$('.solar_panels_banner_area .bg, .banner_visual .mb_bg').imgLiquid({fill:true, horizontalAlign:"center", verticalAlign:"top"});
	$('.solar_panels_banner_nav a').click(function(){
		$('.solar_panels_banner_nav li').removeClass('on');
		$(this).closest('li').addClass('on');
		var s = $(this).attr("href");
		$('.solar_panels_banner_area .list').removeClass('on');
		$(s).addClass('on');
		return false;
	});

	/* Main Visual */
	$(window).resize(mcResizeBox).resize();
		function mcResizeBox(){
		$('.banner_visual').css('height', $(window).height());
	}
});


/*** Active ***/
$(function(){
	$('.step_list').step_list();
	$('.step_list02').step_list02();
	$('.prod_nav').prod_nav();

	$('.solar_panels_banner').solarEvent();
	$('.references_cont').referencesEvent();
	$('.mc_slide').slide_m();
	$('.banner_visual').keyBanner();
	$('.references_area').keyBanner02();
});
