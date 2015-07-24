$(document).ready(function() {

	var body = $("html, body");
	// $(body).scrollTop(0);
	collapseHeader();

	function collapseHeader() {
    var pageScroll = $(this).scrollTop();
    var elementPadding = $('a.skq').css('padding-top').replace(/[^-\d\.]/g, '');

    if(pageScroll > 0 && pageScroll < 120 ) {
        $(".navbar, .navbar-header, .skq-header").css({'height' : 120-(pageScroll*0.58333333)});
        $(".navbar").css({'min-height' : 50});

        $(".skq, .skq-nav-link").css({'padding-top' : 49-(pageScroll*0.28333333)});
        $(".navbar-toggle").css({'margin-top' : 43-(pageScroll*0.28333333)});

        $(".skq").css({'font-size' : 47-(pageScroll*0.18333333)});
        $(".skq-tagline").css({'opacity' : 1-(pageScroll*0.058333333)});
    }
    if(pageScroll > 120) {
        $(".navbar, .navbar-header, .skq-header").css({'height' : 50});
        $(".skq, .skq-nav-link").css({'padding-top' : 15});
        $(".navbar-toggle").css({'margin-top' : 9});

        $(".skq").css({'font-size' : 25});
        $(".skq-tagline").css({'opacity' : 0});
        $(".navbar").addClass('nav-mini');
        $(".navbar").css({'min-height' : 50});
        
    }
    if(pageScroll < 5) {
        $(".navbar, .navbar-header, .skq-header").css({'height' : 120});
        $(".skq, .skq-nav-link").css({'padding-top' : 49});
        $(".navbar-toggle").css({'margin-top' : 43});

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