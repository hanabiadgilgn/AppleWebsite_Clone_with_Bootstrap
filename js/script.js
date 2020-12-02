
$( document ).ready(function() {
	if ($(window).width() <= 768){	
		$('.footer-links-wrapper').addClass("someClass");
	}else{
		$('.footer-links-wrapper').removeClass("someClass");
	}
	$(window).on('resize', function(event){
		if ($(window).width() <= 768){	
			$('.footer-links-wrapper').addClass("someClass");
		}else{
			$('.footer-links-wrapper').removeClass("someClass");
			$('.footer-links-wrapper ul').show();
		}	
	});

    // Footer collapse functionality
    $(document).on ("click", ".someClass h3", function(){
        $(this).next('ul').slideToggle();
        $(this).toggleClass("expanded");

    });
    //Search bar
    $('.search-link').click(function(event){
		event.preventDefault();
		$(".navbar-collapse.collapse").removeClass("show");
		$(".searchbox").slideToggle();
	});

});












// $(document).ready(function(){

// $(".links-wrapper-1 h3").click(function(){
//     $(".links-wrapper-1 ul").toggle();
// });

// $(".links-wrapper-2  .ser" ).click(function(){
//     $(".links-wrapper-2 .service").toggle()
// });

// $(".links-wrapper-2  .acc" ).click(function(){
//     $(".links-wrapper-2 .account").toggle()
// });

// $(".links-wrapper-3  h3" ).click(function(){
//     $(".links-wrapper-3 ul").toggle()
// });

// $(".links-wrapper-4  .business" ).click(function(){
//     $(".links-wrapper-4 .business-ul").toggle()
// });

// $(".links-wrapper-4 .education").click(function(){
//     $(".links-wrapper-4  .edu").toggle();
// });

// $(".links-wrapper-4 .healthcare").click(function(){
//     $(".links-wrapper-4 .health").toggle();
// });
// $(".links-wrapper-4 .government").click(function(){
//     $(".links-wrapper-4 .gov").toggle();
// });


// $(".links-wrapper-5  .apple" ).click(function(){
//     $(".links-wrapper-5 .value").toggle()
// });

// $(".links-wrapper-5  .about" ).click(function(){
//     $(".links-wrapper-5 .apple").toggle()
// });
// });


























