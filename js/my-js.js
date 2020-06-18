$(document).ready(function() {

  var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#001F3F', '#001F3F', '#001F3F', '#001F3F', '#001F3F'],
    scrollOverflowOptions:{scrollbars:true,fadeScrollbars:false,interactiveScrollbars:true},
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: false,
    responsiveWidth: 1100,
    afterResponsive: function(isResponsive){

      }
  });

  $(function() {
    $('[data-toggle="tooltip"]').tooltip()
  });

  var typed = new Typed('.typewriter', {
    strings: ["Web Design.", "Web development.", "Pop Culture.", "Digital Humanities.","fantasy games."],
    typeSpeed: 100,
    smartBackspace: true,
    loop: true,
    backSpeed: 100
  });



});
