//questo codice viene eseguito quando la pagina è stata completamente caricata

$(document).ready(function(){

  /*Toggle logo info hover*/

  $("#info-btn").mouseenter(function () {
   $( ".default-image img" ).fadeTo("slow", 1)();
  });

  $("#info-btn").mouseleave(function () {
   $( ".default-image img" ).fadeTo("slow", 0.15)();
  });

  /*Highlight project row hover*/

  $("#morph-title").mouseenter(function () {
   $( "#morph-hover" ).show();
  });

  $("#skgrrk-title").mouseenter(function () {
   $( "#skgrrk-hover" ).show();
  });

  $("#wmhh-title").mouseenter(function () {
   $( "#wmhh-hover" ).show();
  });

  $("#valpina-title").mouseenter(function () {
   $( "#valpina-hover" ).show();
  });

  $("#sono-title").mouseenter(function () {
   $( "#sono-hover" ).show();
  });

  $("#nhs-title").mouseenter(function () {
   $( "#nhs-hover" ).show();
  });

  /*Open project panel*/

  var projectOpen=false;

  $(".projects-list tr").click(function () {
    $( this ).css({"color":"black"});
    $( "#right-side" ).animate({"left":"20%"});
    $( "#right-side" ).css({"z-index":"4"});
    $( ".overview-project" ).hide();
    $( ".default-image img" ).hide();
    $( "#right-side" ).load( "https://ixd.polimi.it" );
    $( "#exit img" ).delay(400).fadeIn();
    projectOpen=true;
  });

  /*Close project panel*/
  if (projectOpen=true) {
    $("#exit img").click(function () {
      $( "#right-side" ).animate({"left":"50%"});
      $( ".overview-project" ).show();
      $( ".default-image img" ).show();
      $( "#exit img" ).fadeOut();
      projectOpen=false;
    });
  };

  /*Open info panel*/

  var infoOpen=false;

  $("#info-btn").click(function () {
    $( this ).css({"color":"black"});
    $( this ).css({"border":"solid black 1px"});
    $( ".info" ).show();
    $( "#exit img" ).fadeIn();
    infoOpen=true;
  });

  if (infoOpen=true) {
    $("#exit img").click(function () {
      $( ".info" ).hide();
      infoOpen=false;
    });
  };
















});
