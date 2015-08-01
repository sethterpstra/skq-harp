$(document).ready(function() {

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

    $('.product').css({'height' : (windowHeight)});
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
      $('.comparison-chart').css({'margin-top' : ( -(((document.body.scrollTop) + windowHeight)-subFooterOffset) ) });
    } else {
      $('.comparison-chart').css({'margin-top' : 0});
    }
    // console.log(((document.body.scrollTop)+windowHeight));
    // console.log((subFooterOffset));

    if ( $('body').hasClass('viewing-pro') ) {

      $('.oss .panel').removeClass('panel-1').addClass('panel-2');
      $('.pro .panel').removeClass('.panel-2').addClass('panel-1');
      $('.ent .panel').addClass('panel-2').removeClass('.panel-3');

    }
  }

  $(document).scrollsnap({
    snaps: '.product',
    proximity: (windowHeight/3),
    duration: 500,
    latency: 200
  });

  // $('.oss').mouseover(function(){
  //   $(this).addClass('panel-focus');
  //   $(this).siblings('.mask-inactive').addClass('panel-minimize');
  // });

  // $('.oss').mouseout(function(){
  //   $(this).removeClass('panel-focus');
  //   $(this).siblings('.mask-inactive').removeClass('panel-minimize');
  // });

  $('.pro').mouseover(function(){
    $(this).addClass('panel-focus');
    $(this).siblings('.mask-inactive').addClass('panel-minimize');
  });

  $('.pro').mouseout(function(){
    $(this).removeClass('panel-focus');
    $(this).siblings('.mask-inactive').removeClass('panel-minimize');
  });

  $('.ent').mouseover(function(){
    $(this).addClass('panel-focus');
    $(this).siblings('.mask-inactive').addClass('panel-minimize');
  });

  $('.ent').mouseout(function(){
    $(this).removeClass('panel-focus');
    $(this).siblings('.mask-inactive').removeClass('panel-minimize');
  });

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