
$(document).ready(function () {  
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 20
            }, 900);
            return false;
          }
        }
      });


    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });

  $('#contactForm').submit(function (event) {
    event.preventDefault()
    var extraData = {}
    $('#contactForm').ajaxSubmit({
      data: extraData,
      dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
      error: function () {
        // Success message
        $('#success').html("<div class='alert alert-success'>");
        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
        $('#success > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
        $('#success > .alert-success')
            .append('</div>');

        //clear all fields
        $('#contactForm').trigger("reset");
      }
    })
  })

  /*When clicking on Full hide fail/success boxes */
  $('#name').on(function() {
    $('#success').html('');
  });	
	
  // Nivo Lightbox 
  $('.portfolio-item a').topbox({
    effect: 'slideUp',  
    keyboardNav: true,
    //skin: 'lightbox'                   
  });
		
});