$(document).ready(function() {

	var body = $("html, body");
	$(body).scrollTop(0);

	function collapseHeader() {
    var pageScroll = $(this).scrollTop();
    var elementPadding = $('a.skq').css('padding-top').replace(/[^-\d\.]/g, '');

    if(pageScroll > 0 && pageScroll < 120 ) {
        $(".navbar, .navbar-header, .skq-header").css({'height' : 120-(pageScroll*0.58333333)});
        $(".navbar").css({'min-height' : 50});

        $(".skq, .skq-nav-link").css({'padding-top' : 49-(pageScroll*0.28333333)});

        $(".skq").css({'font-size' : 47-(pageScroll*0.18333333)});
        $(".skq-tagline").css({'opacity' : 1-(pageScroll*0.058333333)});
    }
    if(pageScroll > 120) {
        $(".navbar, .navbar-header, .skq-header").css({'height' : 50});
        $(".skq, .skq-nav-link").css({'padding-top' : 15});
        $(".skq").css({'font-size' : 25});
        $(".navbar").addClass('nav-mini');
    }
    if(pageScroll < 5) {
        $(".skq").css({'padding-top' : 49});
        $(".skq").css({'font-size' : 47});
        $(".skq-tagline").css({'opacity' : 1});
        $(".navbar").removeClass('nav-mini');
    }
	};


  $('#client-carousel').scrollingCarousel({
      scrollSpeed: 'slow'
    });

  $(window).scroll(function(){
  	collapseHeader();
    // console.log(document.body.scrollTop);
  });

});