$(document).ready(function() {

	var body = $('html, body');

	// $(body).scrollTop(0);
	sizeChartArea();
  setCarouselHeight('#carousel');

  function sizeChartArea() {
    var windowHeight = $(window).height()
    $('.skq-chart-area-1, .skq-chart-area-2, .skq-chart-area-3').css({'height' : (windowHeight)});
    $('.comparison-chart').css({'height' : (windowHeight-200)})
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
    // console.log('scrolltop '+document.body.scrollTop);
  });

});