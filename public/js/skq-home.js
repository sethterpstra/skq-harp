$(document).ready(function() {

	var body = $('html, body');
  var windowHeight = $(window).height()
  var scrollPos = document.body.scrollTop
  var mobileBreak = 992

	// $(body).scrollTop(0);
	sizeChartArea();
  handleChartArea();
  positionChartArea();
  setCarouselHeight('#carousel');

  function sizeChartArea() {    
    // var chartWidth = $('.list:not(.col-inactive .list)').width();
    var chartWidth = $('.width-reference').width();
    var chartsHeight = $('.charts-wrapper').height()
    var rowCount = $('.key li').length;
    var rowHeight = (chartsHeight / rowCount);

    if ($(window).width() > mobileBreak) { 
      $('.comparison-chart').css({'height' : (windowHeight-120)});
      $('.col-mask .list').css({'width' : chartWidth});
      $('.list li').css({'height' : rowHeight});
      $('.key li').css({'height' : rowHeight});
      $('.product').css({'height' : (windowHeight/2)});
      $('#enterprise').css({'height' : (windowHeight)});
    }
  }

  function setCarouselHeight(id) {
      var slideHeight = [];
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

  function handleChartArea() {
    var initialOffset = $('.tabs-holder').offset().top;
    var tabsOffset = $('.skq-tabs').offset().top;
    var pageScroll = $(this).scrollTop()+100;
    var activeOffset = (tabsOffset-pageScroll);
    var copyHeight = $('.skq-copy-wrapper').height()

    if ($(window).width() > mobileBreak) {
      if(activeOffset < 151) {
        $('.skq-tabs, .tabs-holder, .comparison-chart').addClass('fixed-mode');
        $('.navbar').addClass('navbar-inverse');
        // $('.comparison-chart').addClass('viewing-oss');
      }

      if(pageScroll <= (initialOffset+50)) {
        $('.skq-tabs, .tabs-holder, .comparison-chart').removeClass('fixed-mode');
        $('.navbar').removeClass('navbar-inverse');
      }

      $('main').addClass('viewing-oss');


      if( (pageScroll < initialOffset+(windowHeight/2)) ) {
        $('.comparison-chart').addClass('viewing-oss');

        $('.col-oss').removeClass('col-inactive').addClass('col-active');
        $('.col-pro').addClass('col-inactive').removeClass('col-active');
        $('.col-ent').addClass('col-inactive').removeClass('col-active');
        sizeChartArea();
      } else { $('main, .comparison-chart').removeClass('viewing-oss'); }

      if( (pageScroll >= (initialOffset+((windowHeight/2)))) && (pageScroll < (initialOffset+((windowHeight/2)*2))) ) {
        $('main, .comparison-chart').addClass('viewing-pro');

        $('.col-oss').addClass('col-inactive').removeClass('col-active');;
        $('.col-pro').removeClass('col-inactive').addClass('col-active');;
        $('.col-ent').addClass('col-inactive').removeClass('col-active');;
        sizeChartArea();
      } else { $('main, .comparison-chart').removeClass('viewing-pro'); }

      if( (pageScroll >= (initialOffset+((windowHeight/2)*2))) && (pageScroll < (initialOffset+((windowHeight)*3))) ) {
        $('main, .comparison-chart').addClass('viewing-ent');

        $('.col-oss').addClass('col-inactive').removeClass('col-active');;
        $('.col-pro').addClass('col-inactive').removeClass('col-active');;
        $('.col-ent').removeClass('col-inactive').addClass('col-active');;
        sizeChartArea();
      } else { $('main, .comparison-chart').removeClass('viewing-ent'); }
    }
  }

  var subFooterOffset = $('.skq-subfooter').offset().top;

  function positionChartArea() {
    if ($(window).width() > mobileBreak) {
      if (((document.body.scrollTop)+windowHeight) >= (subFooterOffset)) { 
        $('.comparison-chart').css({'margin-top' : ( -(((document.body.scrollTop) + windowHeight)-subFooterOffset) ) });
      } else {
        $('.comparison-chart').css({'margin-top' : 0});
      }
    }
  }

  function hoverInactive(id) {
    if ( ($(id).hasClass('col-inactive'))) {
      $(id).addClass('hover');
      $(id).siblings('.col-inactive').addClass('minimize');
    }
  }
  function leaveInactive(id) {
    $(id).removeClass('hover');
    $(id).siblings('.col-inactive').removeClass('minimize');
  }

  $('.col-inactive').click(function(){ 
    $(this).siblings('minimize').removeClass('minimize');
  });

  $('.chart-area').mouseover(function( event ) {
    $('.col-inactive').hover(function(){ hoverInactive(this); }, function(){ leaveInactive(this); });
  });


  $(document).scrollsnap({
    snaps: '.product',
    proximity: 80,
    duration: 200,
    latency: 250
  });

  $('.charts-wrapper').mouseover(function(){
    sizeChartArea();
  });

  $(window).scroll(function(){
    handleChartArea();
    positionChartArea();
    hoverInactive();
    // console.log(($('.skq-subfooter').offset().top));
    // console.log(document.body.scrollTop);
  });

  $(window).resize(function(){
    sizeChartArea();
    positionChartArea();
  });

});