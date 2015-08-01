$(document).ready(function() {

	var body = $('html, body');
  var windowHeight = $(window).height()
  var scrollPos = document.body.scrollTop

	// $(body).scrollTop(0);
	sizeChartArea();
  handleChartArea();
  setCarouselHeight('#carousel');  

  function sizeChartArea() {    
    var chartWidth = $('.col-oss .list').width();
    var chartsHeight = $('.charts-wrapper').height()
    var rowCount = $('.key li').length;
    var totalHeight = (chartsHeight / rowCount);

    $('.product').css({'height' : (windowHeight)});
    $('.comparison-chart').css({'height' : (windowHeight-120)});
    $('.list').css({'width' : chartWidth});
    $('.list li').css({'height' : totalHeight});
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
      // $('.comparison-chart').addClass('viewing-oss');
    }

    if(pageScroll <= (initialOffset-50)) {
      $('.skq-tabs, .tabs-holder, .comparison-chart').removeClass('fixed-mode');
      $('.navbar').removeClass('navbar-inverse');
    }

    if( (pageScroll < initialOffset+windowHeight) ) {
      $('.comparison-chart').addClass('viewing-oss');
    } else { $('.comparison-chart').removeClass('viewing-oss'); }

    if( (pageScroll >= (initialOffset+(windowHeight))) && (pageScroll < (initialOffset+(windowHeight*2))) ) {
      $('.comparison-chart').addClass('viewing-pro');
    } else { $('.comparison-chart').removeClass('viewing-pro'); }

    if( (pageScroll >= (initialOffset+(windowHeight*2))) && (pageScroll < (initialOffset+(windowHeight*3))) ) {
      $('.comparison-chart').addClass('viewing-ent');
    } else { $('.comparison-chart').removeClass('viewing-ent'); }
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

    // if ( $(body).hasClass('viewing-pro') ) {
    //   $('.oss .panel').removeClass('panel-1').addClass('panel-2').parent('.col-mask').addClass('mask-inactive');
    //   $('.pro .panel').removeClass('panel-2').addClass('panel-1').parent('.col-mask').removeClass('mask-inactive');
    //   $('.ent .panel').removeClass('panel-3').addClass('panel-2');
    //   sizeChartArea();
    // }
    // if ( $(body).hasClass('viewing-ent') ) {
    //   $('.oss .panel').removeClass('panel-2').addClass('panel-3').parent('.col-mask').addClass('mask-inactive');
    //   $('.pro .panel').removeClass('panel-1').addClass('panel-2').parent('.col-mask').addClass('mask-inactive');
    //   $('.ent .panel').removeClass('panel-2').addClass('panel-3').parent('.col-mask').removeClass('mask-inactive');
    //   sizeChartArea();
    // }
  }

  // $(document).scrollsnap({
  //   snaps: '.product',
  //   proximity: (windowHeight/3),
  //   duration: 300,
  //   latency: 200
  // });

  $('.oss.col-mask.mask-inactive').mouseover(function(){
    $(this).addClass('list-focus');
    $(this).siblings('.mask-inactive').addClass('list-minimize');
  });

  $('.oss.col-mask.mask-inactive').mouseout(function(){
    $(this).removeClass('list-focus');
    $(this).siblings('.mask-inactive').removeClass('list-minimize');
  });

  $('.pro.col-mask.mask-inactive').mouseover(function(){
    $(this).addClass('list-focus');
    $(this).siblings('.mask-inactive').addClass('list-minimize');
  });

  $('.pro.col-mask.mask-inactive').mouseout(function(){
    $(this).removeClass('list-focus');
    $(this).siblings('.mask-inactive').removeClass('list-minimize');
  });

  $('.ent.col-mask.mask-inactive').mouseover(function(){
    $(this).addClass('list-focus');
    $(this).siblings('.mask-inactive').addClass('list-minimize');
  });

  $('.ent.col-mask.mask-inactive').mouseout(function(){
    $(this).removeClass('list-focus');
    $(this).siblings('.mask-inactive').removeClass('list-minimize');
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