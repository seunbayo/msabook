(function($){"use strict";var $bgSection=$(".bg-section");$bgSection.each(function(){var bgSrc=$(this).children("img").attr("src");var bgUrl='url('+bgSrc+')';$(this).parent().css("backgroundImage",bgUrl);$(this).parent().addClass("bg-section");$(this).remove();});$(window).scroll(function(){if($(document).scrollTop()>$(window).height()||$(document).scrollTop()>105){$(".navbar-sticky").addClass("navbar-fixed");}else{$(".navbar-sticky").removeClass("navbar-fixed");}});$('.mailchimp').ajaxChimp({url:"http://wplly.us5.list-manage.com/subscribe/post?u=91b69df995c1c90e1de2f6497&id=aa0f2ab5fa",callback:chimpCallback});function chimpCallback(resp){if(resp.result==='success'){$('.subscribe-alert').html('<h5 class="alert alert-success">'+resp.msg+'</h5>').fadeIn(1000);}else if(resp.result==='error'){$('.subscribe-alert').html('<h5 class="alert alert-danger">'+resp.msg+'</h5>').fadeIn(1000);}}
$('#campaignmonitor').submit(function(e){e.preventDefault();$.getJSON(this.action+"?callback=?",$(this).serialize(),function(data){if(data.Status===400){alert("Error: "+data.Message);}else{alert("Success: "+data.Message);}});});$(".owl-carousel").each(function(){var $Carousel=$(this);$Carousel.owlCarousel({loop:$Carousel.data('loop'),autoplay:$Carousel.data("autoplay"),margin:$Carousel.data('space'),nav:$Carousel.data('nav'),dots:$Carousel.data('dots'),dotsSpeed:$Carousel.data('speed'),responsive:{0:{items:1},600:{items:$Carousel.data('slide-res')},1000:{items:$Carousel.data('slide'),}}});});var $section=$('section'),$bodyScroll=$('.body-scroll');if($bodyScroll.length>0){$(window).on("scroll",function(){$section.each(function(){var sectionID=$(this).attr("id"),sectionTop=$(this).offset().top-100,sectionHight=$(this).outerHeight(),wScroll=$(window).scrollTop(),$navHref=$("a[href='#"+sectionID+"']"),$nav=$('.navbar-nav').find($navHref).parent();if(wScroll>sectionTop-1&&wScroll<sectionTop+sectionHight-1){$nav.addClass('active');$nav.siblings().removeClass('active');}});});}
var aScroll=$('.nav-item .nav-link'),$navbarCollapse=$('.navbar-collapse');aScroll.on('click',function(event){var target=$($(this).attr('href'));$(this).parent(".nav-item").siblings().removeClass('active');$(this).parent('.nav-item').addClass('active');if(target.length>0){event.preventDefault();$('html, body').animate({scrollTop:target.offset().top-100},1000);}
if($('.navbar-collapse').hasClass('show')){$('.navbar-collapse').toggleClass('show');$('.navbar-toggler-icon').toggleClass('active');$('.navbar-toggler').toggleClass('collapsed');}});$('.navbar-toggler').click(function(){$('.navbar-toggler-icon').toggleClass('active');});var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:50,mobile:false,live:true});wow.init();$(".bg-ytvideo").each(function(){var vidId=$(this).data("vid-id"),vidAutoPlay=$(this).data("autoplay"),vidStartAt=$(this).data("start-at"),vidMute=$(this).data("mute"),vidOpacity=$(this).data("opacity"),vidShowPluginLogo=$(this).data("plugin-logo"),vidShowControls=$(this).data("controls"),vidFallBackImg=$(this).data("fall-cover");if(vidAutoPlay===""||vidAutoPlay===null||vidAutoPlay===undefined){vidAutoPlay=true;}
if(vidStartAt===""||vidStartAt===null||vidStartAt===undefined){vidStartAt=0;}
if(vidMute===""||vidMute===null||vidMute===undefined){vidMute=true;}
if(vidOpacity===""||vidOpacity===null||vidOpacity===undefined){vidOpacity=1;}
if(vidShowPluginLogo===""||vidShowPluginLogo===null||vidShowPluginLogo===undefined){vidShowPluginLogo=false;}
if(vidShowControls===""||vidShowControls===null||vidShowControls===undefined){vidShowControls=false;}
if(vidFallBackImg===""||vidFallBackImg===null||vidFallBackImg===undefined){vidFallBackImg="";}
$(this).data("property","{videoURL:'http://youtu.be/"+vidId+"',containment:'self',autoPlay:"+vidAutoPlay+", mute:"+vidMute+", startAt:"+vidStartAt+", opacity:"+vidOpacity+",showYTLogo:"+vidShowPluginLogo+",showControls:"+vidShowControls+",stopMovieOnBlur:false,mobileFallbackImage:'"+vidFallBackImg+"'}");});if($(".bg-ytvideo").length>0){$(".bg-ytvideo").YTPlayer();}}(jQuery));