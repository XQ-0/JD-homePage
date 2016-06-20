$(function(){

	$('header ._img .wrap .close').click(function(){
		$('header ._img ').css({display:'none'})
	})
	// 左边侧边
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop>1700){
			$('.leftSlideMenu').css({display:'block'})
		}else{
			$('.leftSlideMenu').css({display:'none'})
		}
	})


	// 头部导航的下拉框部分
	$('header .des').hover(function(){
		$('header .dropdown-menu').css({display:'block'})
	},function(){
		$('header .dropdown-menu').css({display:'none'})
	})

	$('.banner-right .down').each(function(i){
		$(this).hover(function(){
			$(this).css({background:'white'})
			$('.ul-dropdown'+i).css({display:'block'})
		},function(){
			$(this).css({background:'#F1F1F1'})
			$('.ul-dropdown'+i).css({display:'none'})
		})
	})

	// 侧边导航
	$('.leftSlideMenu ul li a').each(function(i){
		$(this).hover(function(){
			$(this).addClass('on');
			$('.leftSlideMenu ul li a b').eq(i).css({display:'none'})
			$('.leftSlideMenu ul li a i').eq(i).css({display:'block',color:'white'})
		},function(){
			$(this).removeClass('on');
			$('.leftSlideMenu ul li a i').eq(i).css({display:'none'})
			$('.leftSlideMenu ul li a b').eq(i).css({display:'block'})
		})
	})
	$('.rightSlideMenu .top li a').each(function(i){
		$(this).hover(function(){
			$('.rightSlideMenu .top li a i').eq(i).stop().animate({right:'0'},300)
		},function(){
			$('.rightSlideMenu .top li a i').eq(i).stop().animate({right:'-100px'},300)
		})
	})
	$('.rightSlideMenu .bot li a').each(function(i){
		$(this).hover(function(){
			$('.rightSlideMenu .bot li a i').eq(i).stop().animate({right:'0'},300)
		},function(){
			$('.rightSlideMenu .bot li a i').eq(i).stop().animate({right:'-100px'},300)
		})
	})

	// 图片轮播部分
	$('.main-introduce .main-slider .numUl li').each(function(i){
		$('.main-introduce .main-slider .numUl li').eq(0).addClass('on');
		$('.main-introduce .main-slider .sliderUl li').eq(0).stop().animate({opacity:1})
		$(this).mouseover(function(){
			index=i;
			$(this).addClass('on').siblings().removeClass('on');
			$('.main-introduce .main-slider .sliderUl li').eq(i).stop().animate({opacity:1}).siblings().stop().animate({opacity:0})
		})
	})

	var index=0;
	var t=setInterval(moveR,2500);
	function moveR(){
		index++;
		if(index==6){
			index=0;
		}
		$('.main-introduce .main-slider .numUl li').eq(index).addClass('on').siblings().removeClass('on');
		$('.main-introduce .main-slider .sliderUl li').eq(index).stop().animate({opacity:1}).siblings().stop().animate({opacity:0})

	}
	function moveL(){
		index--;
		if(index==-1){
			index=5;
		}
		$('.main-introduce .main-slider .numUl li').eq(index).addClass('on').siblings().removeClass('on');
		$('.main-introduce .main-slider .sliderUl li').eq(index).stop().animate({opacity:1}).siblings().stop().animate({opacity:0})

	}

	// 图片轮播的左右切换部分
	$('.main-introduce .main-slider .btn-l').click(function(){
		moveL();
	})

	$('.main-introduce .main-slider .btn-r').click(function(){
		moveR();
	})


	$('.main-introduce .main-slider .sliderUl').hover(function(){
		clearInterval(t);
		$('.main-introduce .main-slider .btn').css({display:'block'});
	},function(){
		t=setInterval(moveR,2500);
		$('.main-introduce .main-slider .btn').css({display:'none'});
	})
	


	// 下面下方小的前后翻页部分
	var ii=0;
	$('.main-introduce .littSlider .slide-page .pre').click(function(){
		ii++;
		if(ii==4){
			ii=0;
		}
		$('.main-introduce .littSlider ul').stop().animate({left:-ii*1000})
	})
	$('.main-introduce .littSlider .slide-page .next').click(function(){
		ii--;
		if(ii==-1){
			ii=3;
		}
		$('.main-introduce .littSlider ul').stop().animate({left:-ii*1000})
	})




	// 1楼
	$('.main-body .slide').hover(function(){
		$('.main-body .slide .btn').css({display:'block'});
		clearInterval(tt)
	},function(){
		$('.main-body .slide .btn').css({display:'none'});
		tt=setInterval(m,1500);
	})

	// 4
	$('.appliance .main0 .img-slide').hover(function(){
		$('.appliance  .main0 .btn').css({display:'block'});
		clearInterval(tt);
	},function(){
		$('.appliance .main0 .btn').css({display:'none'});
		tt=setInterval(m,1500);
	})


	var index1=0;
	$('.clothes .pages-slide li').each(function(i){
		$('.clothes .pages-slide li').eq(0).addClass('on');
		$('.clothes .slide1 .pages-slide li').eq(0).addClass('on');
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$(' .clothes .img-slide').stop().animate({left:-440*i+'px'});
			index1=i;
		})
	})
	$('.clothes .main-body .slide .next').click(function(){
		index1++;
		if(index1>3){
			index1=0;
		}
		$(' .clothes .img-slide').stop().animate({left:-440*index1+'px'})
		$('.clothes .pages-slide li').eq(index1).addClass('on').siblings().removeClass('on');
	})
	$('.clothes .main-body .slide .pre').click(function(){
		index1--;
		if(index1<0){
			index1=3;
		}
		$('.clothes .img-slide').stop().animate({left:-440*index1+'px'});
		$('.clothes .pages-slide li').eq(index1).addClass('on').siblings().removeClass('on');
	
	})

	var index6=0;
	$('.sports .pages-slide li').each(function(i){
		$('.sports .pages-slide li').eq(0).addClass('on');
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$(' .sports .img-slide').stop().animate({left:-345*i+'px'})
			index6=i;
		})
	})

	$('.sports .main-body .slide .next').click(function(){
		index6++;
		if(index6>3){
			index6=0;
		}

		$(' .sports .img-slide').stop().animate({left:-339*index6+'px'})
		$('.sports .pages-slide li').eq(index6).addClass('on').siblings().removeClass('on');
	})
	$('.sports .main-body .slide .pre').click(function(){
	
		index6--;
		if(index6<0){
			index6=3;
		}
		$(' .sports .img-slide').stop().animate({left:-339*index6+'px'});
		$('.sports .pages-slide li').eq(index6).addClass('on').siblings().removeClass('on');
		
	})

	var index7=0;
	$('.home_living .pages-slide li').each(function(i){
		$('.home_living .pages-slide li').eq(0).addClass('on');
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$(' .home_living .img-slide').stop().animate({left:-345*i+'px'})
			index7=i;
		})
	})

	$('.home_living .main-body .slide .next').click(function(){
		index7++;
		if(index7>3){
			index7=0;
		}

		$(' .home_living .img-slide').stop().animate({left:-339*index7+'px'})
		$('.home_living .pages-slide li').eq(index7).addClass('on').siblings().removeClass('on');
	})
	$('.home_living .main-body .slide .pre').click(function(){
	
		index7--;
		if(index7<0){
			index7=3;
		}
		$(' .home_living .img-slide').stop().animate({left:-339*index7+'px'});
		$('.home_living .pages-slide li').eq(index7).addClass('on').siblings().removeClass('on');
		
	})

	var index8=0;
	$('.tools .pages-slide li').each(function(i){
		$('.tools .pages-slide li').eq(0).addClass('on');
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$(' .tools .img-slide').stop().animate({left:-345*i+'px'})
			index8=i;
		})
	})

	$('.tools .main-body .slide .next').click(function(){
		index8++;
		if(index8>3){
			index8=0;
		}

		$(' .tools .img-slide').stop().animate({left:-339*index8+'px'})
		$('.tools .pages-slide li').eq(index8).addClass('on').siblings().removeClass('on');
	})
	$('.tools .main-body .slide .pre').click(function(){
	
		index8--;
		if(index8<0){
			index8=3;
		}
		$(' .tools .img-slide').stop().animate({left:-339*index8+'px'});
		$('.tools .pages-slide li').eq(index8).addClass('on').siblings().removeClass('on');
		
	})

	var index9=0;
	$('.foods .pages-slide li').each(function(i){
		$('.foods .pages-slide li').eq(0).addClass('on');
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$(' .foods .img-slide').stop().animate({left:-345*i+'px'})
			index9=i;
		})
	})

	$('.foods .main-body .slide .next').click(function(){
		index9++;
		if(index9>3){
			index9=0;
		}

		$(' .foods .img-slide').stop().animate({left:-339*index9+'px'})
		$('.foods .pages-slide li').eq(index9).addClass('on').siblings().removeClass('on');
	})
	$('.foods .main-body .slide .pre').click(function(){
	
		index9--;
		if(index9<0){
			index9=3;
		}
		$(' .foods .img-slide').stop().animate({left:-339*index9+'px'});
		$('.foods .pages-slide li').eq(index9).addClass('on').siblings().removeClass('on');
		
	})


	var index2=0;
	$('.huli .pages-slide li').each(function(i){
		$('.huli .pages-slide li').eq(0).addClass('on');
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$(' .huli .img-slide').stop().animate({left:-345*i+'px'})
			index2=i;
		})
	})

	$('.huli .main-body .slide .next').click(function(){
		index2++;
		if(index2>3){
			index2=0;
		}

		$(' .huli .img-slide').stop().animate({left:-345*index2+'px'})
		$('.huli .pages-slide li').eq(index2).addClass('on').siblings().removeClass('on');
	})
	$('.huli .main-body .slide .pre').click(function(){
	
		index2--;
		if(index2<0){
			index2=3;
		}
		$(' .huli .img-slide').stop().animate({left:-345*index2+'px'});
		$('.huli .pages-slide li').eq(index2).addClass('on').siblings().removeClass('on');
		
	})





	var index4=0;
	$('.appliance  .pages-slide li').each(function(i){
		$('.appliance  .pages-slide li').eq(0).addClass('on');
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$(' .appliance  .img-slide').stop().animate({left:-440*i+'px'})
			index4=i;
		})
	})

	var index11=0;
	$('.carY  .pages-slide li').each(function(i){
		$('.carY  .pages-slide li').eq(0).addClass('on');
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.carY  .img-slide').stop().animate({left:-440*i+'px'})
			index11=i;
		})
	})

	// $('.appliance .content .next').click(function(){
	// 	index4++;
	// 	if(index4>3){
	// 		index4=0;
	// 	}
	// 	console.log(index4)

	// 	$(' .appliance  .img-slide').stop().animate({left:-440*index4+'px'})
	// 	$('.appliance  .pages-slide li').eq(index4).addClass('on').siblings().removeClass('on');
	// })
	// $('.appliance .content .pre').click(function(){
	
	// 	index4--;
	// 	if(index4<0){
	// 		index4=3;
	// 	}
	// 	console.log(index4)
	// 	$(' .appliance  .img-slide').stop().animate({left:-440*index4+'px'});
	// 	$('.appliance  .pages-slide li').eq(index4).addClass('on').siblings().removeClass('on');
		
	// })


	var tt=setInterval(m,1800);
	function m(){
		index1++;
		if(index1>3){
			index1=0;
		}
		index2++;
		if(index2>3){
			index2=0;
		}
		index4++;
		if(index4>3){
			index4=0;
		}
		index11++;
		if(index11>3){
			index11=0;
		}
		index6++;
		if(index6>3){
			index6=0;
		}
		index7++;
		if(index7>3){
			index7=0;
		}
		index8++;
		if(index8>3){
			index8=0;
		}
		index9++;
		if(index9>3){
			index9=0;
		}

		$('.clothes .img-slide').stop().animate({left:-440*index1+'px'});
		$('.clothes .pages-slide li').eq(index1).addClass('on').siblings().removeClass('on');
		$(' .huli .img-slide').stop().animate({left:-345*index2+'px'});
		$('.huli .pages-slide li').eq(index2).addClass('on').siblings().removeClass('on');

		$('.appliance .img-slide').stop().animate({left:-440*index4+'px'})
		
		
		$('.appliance .pages-slide li').eq(index4).addClass('on').siblings().removeClass('on');
		$('.appliance .pages-slide li').eq(index4).addClass('on').siblings().removeClass('on');
		
		$('.digital .pages-slide li').eq(index1).addClass('on').siblings().removeClass('on');

		$('.carY .pages-slide li').eq(index11).addClass('on').siblings().removeClass('on');

		// 6
		$(' .sports .img-slide').stop().animate({left:-339*index6+'px'});
		$('.sports .pages-slide li').eq(index6).addClass('on').siblings().removeClass('on');
		//7
		$(' .home_living .img-slide').stop().animate({left:-339*index7+'px'});
		$('.home_living .pages-slide li').eq(index7).addClass('on').siblings().removeClass('on');
		//8
		$(' .tools .img-slide').stop().animate({left:-339*index8+'px'});
		$('.tools .pages-slide li').eq(index8).addClass('on').siblings().removeClass('on');
		//9
		$(' .foods .img-slide').stop().animate({left:-339*index8+'px'});
		$('.foods .pages-slide li').eq(index8).addClass('on').siblings().removeClass('on');
	}

	// 小导航 1
	$('.tab li').each(function(i){
		$('.clothes .tab li').eq(0).addClass('on');
		$('.clothes .main0').css({display:'block'});
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.clothes .tab li a').eq(i).addClass('on').parent().siblings().children('a').removeClass('on');
			$('.clothes .main'+i).css({display:'block'}).siblings().css({display:'none'});
		})
	})

	// 小导航 2
	$('.huli .tab li').each(function(i){
		$('.huli .tab li').eq(0).addClass('on');
		$(' .main0').css({display:'block'});
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.huli .tab li a').eq(i).addClass('on').parent().siblings().children('a').removeClass('on');
			$('.huli .main'+i).css({display:'block'}).siblings().css({display:'none'});
		})
	})

	// // 4楼
	$('.appliance  .tab li').each(function(i){
		$('.appliance  .tab li').eq(0).addClass('on');
		$('.appliance  .main0').css({display:'block'}).siblings().css({display:'none'});
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.appliance  .tab li a').eq(i).addClass('on').parent().siblings().children('a').removeClass('on');
			$('.appliance  .main'+i).css({display:'block'}).siblings().css({display:'none'});
		})
	})

	// 5楼
	$('.digital  .tab li').each(function(i){
		$('.digital  .tab li').eq(0).addClass('on');
		$('.digital  .main0').css({display:'block'}).siblings().css({display:'none'});
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.digital  .tab li a').eq(i).addClass('on').parent().siblings().children('a').removeClass('on');
			$('.digital .main'+i).css({display:'block'}).siblings().css({display:'none'});
		})
	})

	// 11楼
	$('.carY  .tab li').each(function(i){
		$('.carY  .tab li').eq(0).addClass('on');
		$('.carY  .main0').css({display:'block'}).siblings().css({display:'none'});
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.carY  .tab li a').eq(i).addClass('on').parent().siblings().children('a').removeClass('on');
			$('.carY .main'+i).css({display:'block'}).siblings().css({display:'none'});
		})
	})

	// 6楼
	$('.sports  .tab li').each(function(i){
		$('.sports  .tab li').eq(0).addClass('on');
		$('.sports  .main0').css({display:'block'}).siblings().css({display:'none'});
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.sports  .tab li a').eq(i).addClass('on').parent().siblings().children('a').removeClass('on');
			$('.sports .main'+i).css({display:'block'}).siblings().css({display:'none'});
		})
	})

	// 7楼
	$('.home_living  .tab li').each(function(i){
		$('.home_living  .tab li').eq(0).addClass('on');
		$('.home_living  .main0').css({display:'block'}).siblings().css({display:'none'});
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.home_living  .tab li a').eq(i).addClass('on').parent().siblings().children('a').removeClass('on');
			$('.home_living .main'+i).css({display:'block'}).siblings().css({display:'none'});
		})
	})
	// 8楼
	$('.tools  .tab li').each(function(i){
		$('.tools  .tab li').eq(0).addClass('on');
		$('.tools  .main0').css({display:'block'}).siblings().css({display:'none'});
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.tools  .tab li a').eq(i).addClass('on').parent().siblings().children('a').removeClass('on');
			$('.tools .main'+i).css({display:'block'}).siblings().css({display:'none'});
		})
	})
	// 9楼
	$('.foods  .tab li').each(function(i){
		$('.foods  .tab li').eq(0).addClass('on');
		$('.foods  .main0').css({display:'block'}).siblings().css({display:'none'});
		$(this).hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.foods  .tab li a').eq(i).addClass('on').parent().siblings().children('a').removeClass('on');
			$('.foods .main'+i).css({display:'block'}).siblings().css({display:'none'});
		})
	})


})