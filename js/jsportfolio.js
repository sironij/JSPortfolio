//questo codice viene eseguito quando la pagina è stata completamente caricata

$(document).ready(function(){

  $("#info-btn").mouseenter(function () {
   $( ".default-image img" ).fadeTo("slow", 1)();
  });

  $("#info-btn").mouseleave(function () {
   $( ".default-image img" ).fadeTo("slow", 0.15)();
  });

  $("#nhs").mouseenter(function () {
   $( ".overview-project" ).show();
  });

  $(".projects-list tr").click(function () {
    $( this ).css({"color":"black"});
    $( "#right-side" ).animate({"left":"20%"});
    $( ".overview-project" ).hide();
    $( ".default-image img" ).hide();
    $( "#right-side" ).load( "https://ixd.polimi.it" );
  });














});
