jQuery(document).ready(function ($) {
  // jQuery mask plugin
  $('#tel').mask("+38(000)000-00-00", {placeholder: "+38(___)___-__-__"});

  /* Scroll Magic */
  // init scroll magic
  var controller = new ScrollMagic.Controller();

  // build a scene
  /* HIDE MAIN SECTION */
  var ourScene_001 = new ScrollMagic.Scene({
    triggerElement: '.leave-request',
    duration: '100%'
  })
    .setClassToggle('.main', 'fade-out')
    .addTo(controller);


  // build a scene
  /* SHOW LEAVE REQUEST */
  var ourScene_002 = new ScrollMagic.Scene({
    triggerElement: '.leave-request',
    duration: '100%'
  })
    .setClassToggle('.leave-request', 'fade-in') // add class to caption
    .addTo(controller);

  // build a scene
  /* SHOW MY SERVICES SECTION */
  var ourScene_003 = new ScrollMagic.Scene({
    triggerElement: '.my-services'
  })
    .setClassToggle('.my-services', 'fade-in')
    .addTo(controller);

  /* SHOW MY SERVICES SECTION */
  var ourScene_003 = new ScrollMagic.Scene({
    triggerElement: '.my-services'
  })
    .setClassToggle('.my-services', 'fade-in')
    .addTo(controller);

  // PIN MY SERVICES
  // var pinIntroScene_004 = new ScrollMagic.Scene({
  // 	triggerElement: '.my-services',
  // 	triggerHook: 2
  // })
  // .setPin('.my-services')
  // .addTo(controller);

});

/* preloader */
$(window).on('load', function () {
  this.setTimeout(function () {
    var $preloader = $('#page-preloader'),
      $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  }, 5000);
});
