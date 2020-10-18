$(document).ready(function(){

  /*Toggle logo info hover*/

  $(".intro a").mouseenter(function () {
   $( ".axes" ).animate({"background-color":"#E1FF29"}, 100);
   $( "#v" ).animate({"top":"25%"});
   $( "#ol" ).animate({"top":"35%"});
   $( "#h" ).animate({"top":"45%"});
   $( "#or" ).animate({"top":"55%"});
  });

  $(".intro a").mouseleave(function () {
   $( ".axes" ).animate({"top":"40%"});
   $( ".axes" ).animate({"background-color":"black"});
  });




  /*Open info panel*/

  $(".intro a").click(function () {
    $( this ).css({"color":"black"});
    $( ".overview-project img" ).hide();
    $( ".info" ).animate({"left":"0%"},300);
    $( "#exit img" ).fadeIn();
  });

    $("#exit img").click(function () {
      $( ".info" ).animate({"left":"-100%"},300);
      $( ".intro a" ).css({"color":"white"});
      $( ".overview-project img" ).fadeIn(300);
    });


  /*Highlight project row hover*/

  var i=0;

  $("#morph-title").mouseenter(function () {
   $( "#morph-hover" ).show();
   i = i+1;
   $( "#morph-hover" ).css({"z-index": i });
  });

  $("#skgrrk-title").mouseenter(function () {
   $( "#skgrrk-hover" ).show();
   i = i+1;
   $( "#skgrrk-hover" ).css({"z-index": i });
  });

  $("#wmhh-title").mouseenter(function () {
   $( "#wmhh-hover" ).show();
   i = i+1;
   $( "#wmhh-hover" ).css({"z-index": i });
  });

  $("#valpina-title").mouseenter(function () {
   $( "#valpina-hover" ).show();
   i = i+1;
   $( "#valpina-hover" ).css({"z-index": i });
  });

  $("#sono-title").mouseenter(function () {
   $( "#sono-hover" ).show();
   i = i+1;
   $( "#sono-hover" ).css({"z-index": i });
  });

  $("#nhs-title").mouseenter(function () {
   $( "#nhs-hover" ).show();
   i = i+1;
   $( "#nhs-hover" ).css({"z-index": i });
  });


  /*Open project panel*/

  $(".projects-list tr").click(function () {

    $( this ).css({"color":"black"});

    $( "#right-side" ).animate({"width":"80%"});
    $( "#right-side" ).animate({"left":"20%"});
    $( "#right-side" ).css({"z-index":"4"});

    $( ".main-logo" ).hide();
    $( ".info" ).hide();
    $( ".overview-project img" ).hide();

    $( "#project-expanded" ).delay(400).fadeIn();
    $( "#exit img" ).delay(400).fadeIn();

  });


  /*Close project panel*/

    $("#exit img").click(function () {

      $( "#right-side" ).animate({"left":"50%"});
      $( "#right-side" ).animate({"width":"50%"});
      $( ".projects-list tr" ).css({"color":"white"});

      $( ".main-logo" ).show();
      $( ".info" ).delay(800).show();
      $( ".overview-project img" ).fadeIn(300);

      $( "#project-expanded" ).fadeOut();
      $( "#exit img" ).fadeOut();

    });


















});
