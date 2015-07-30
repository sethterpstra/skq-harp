$(document).ready(function() {

	var body = $('html, body');
  var windowHeight = $(window).height()
  var subFooterOffset = $('.skq-subfooter').offset();

	// $(body).scrollTop(0);
	sizeChartArea();
  setCarouselHeight('#carousel');

  function sizeChartArea() {    
    $('.skq-chart-area-1, .skq-chart-area-2, .skq-chart-area-3').css({'height' : (windowHeight)});
    $('.comparison-chart').css({'height' : (windowHeight-120)})
  }

  function handleChartArea() {
    if ((document.body.scrollTop) == (subFooterOffset+windowHeight)) { console.log('hello') }
      console.log(document.body.scrollTop);
    console.log((subFooterOffset));
  }

  $('#logo-carousel').scrollingCarousel({
      scrollSpeed: 'slow'
    });

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
    } 
    if(pageScroll <= (initialOffset-50)) {
      $('.skq-tabs, .tabs-holder, .comparison-chart').removeClass('fixed-mode');
      $('.navbar').removeClass('navbar-inverse');
    }
  }

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