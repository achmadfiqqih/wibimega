$(document).ready(function(){
  // ini header height
  var headerHight = $('header').outerHight();

  $('.nav-link').click(function(){
    var linkHref = $(this).attr('href');

    $('body').animete({
      scrollTop: $(linkHref).offset().top - headerHight
    }, 1000);
    
    // e.preventDefault();
  });
});