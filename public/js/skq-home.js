$(document).ready(function() {

  $('.products').snapscroll();

	var body = $('html, body');
  var windowHeight = $(window).height()
  var scrollPos = document.body.scrollTop

	// $(body).scrollTop(0);
	sizeChartArea();
  setCarouselHeight('#carousel');  

  function sizeChartArea() {    
    var chartWidth = $('.mask-active .panel').width();
    var chartsHeight = $('.charts-wrapper').height()
    var rowCount = $('.key li').length;
    var totalHeight = (chartsHeight / rowCount);

    $('.skq-chart-area-1, .skq-chart-area-2, .skq-chart-area-3').css({'height' : (windowHeight)});
    $('.comparison-chart').css({'height' : (windowHeight-120)});
    $('.mask-inactive .panel').css({'width' : chartWidth});
    $('.panel li').css({'height' : totalHeight});
    $('.key li').css({'height' : totalHeight});
  }

  function setCarouselHeight(id) {
      var slideHeight = [];
      // console.log('slideheight');
      $(id+' .carousel-inner .item').each(function() {
      // add all slide heights to an array
          slideHeight.push($(this).height());
      });
      // find the tallest item
      max = (Math.max.apply(null, slideHeight) + 30);
      // set the slide's height
      $(id+' .carousel-inner', '.rule-left').each(function() {
          $(this).css({'height' : max+'px'});
      });
  }

  function dockTabNav() {
    var initialOffset = $('.tabs-holder').offset().top;
    var tabsOffset = $('.skq-tabs').offset().top;
    var pageScroll = $(this).scrollTop();
    var activeOffset = (tabsOffset-pageScroll);

    if(activeOffset < 51) {
      $('.skq-tabs, .tabs-holder, .comparison-chart').addClass('fixed-mode');
      $('.navbar').addClass('navbar-inverse');
      $('body').addClass('viewing-oss');
    }

    if(pageScroll <= (initialOffset-50)) {
      $('.skq-tabs, .tabs-holder, .comparison-chart').removeClass('fixed-mode');
      $('.navbar').removeClass('navbar-inverse');
    }

    if( (pageScroll >= initialOffset) && (pageScroll < initialOffset+windowHeight) ) {
      $('body').addClass('viewing-oss');
    } else { $('body').removeClass('viewing-oss'); }

    if( (pageScroll >= (initialOffset+(windowHeight))) && (pageScroll < (initialOffset+(windowHeight*2))) ) {
      $('body').addClass('viewing-pro');
    } else { $('body').removeClass('viewing-pro'); }

    if( (pageScroll >= (initialOffset+(windowHeight*2))) && (pageScroll < (initialOffset+(windowHeight*3))) ) {
      $('body').addClass('viewing-ent');
    } else { $('body').removeClass('viewing-ent'); }
  }

  var subFooterOffset = $('.skq-subfooter').offset().top;

  function handleChartArea() {
    if (((document.body.scrollTop)+windowHeight) >= (subFooterOffset)) { 
      $('.comparison-chart').css({'margin-top' : (-(((document.body.scrollTop)+windowHeight)-(subFooterOffset)))});
    } else {
      $('.comparison-chart').css({'margin-top' : 0});
    }
    // console.log(((document.body.scrollTop)+windowHeight));
    // console.log((subFooterOffset));
  }


  // $('.panel-2').mouseover(function(){
  //   $(this).closest('mask-active').removeClass('mask-active');
  //   $(this).parent().removeClass('mask-inactive');
  //   $(this).parent().addClass('mask-active');
  // });

  // $('.panel-2').mouseout(function(){
  //   $(this).parent().removeClass('mask-active');
  //   $(this).parent().addClass('mask-inactive');
  // });

  $(window).scroll(function(){
    dockTabNav();
    handleChartArea();
    // console.log(($('.skq-subfooter').offset().top));
    // console.log(document.body.scrollTop);
  });

  $(window).resize(function(){
    sizeChartArea();
  });

});