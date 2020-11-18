$(document).ready(function(){

  var bio = "Biografia";

  var intro = "Lorem Ipsum is simply dummy text of the printing and <a>typesetting</a> industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  /*Open info panel*/


  $(".intro a").click(function () {
    $( ".info" ).css({"opacity":"100%"});
    $( ".info img" ).css({"opacity":"100%"});

    $( ".overview-project img" ).hide();

    $( "#exit img" ).show();
    $( "#left-side" ).addClass("left-side-bioIntro");
    $( ".projects-list" ).hide();

    $(".intro p").html(bio);
  });

    $("#exit img").click(function () {
      $( ".info" ).css({"opacity":"0%"});
      $( ".info img" ).css({"opacity":"0%"});

      $( ".overview-project img" ).show(0);

      $( "#left-side" ).removeClass("left-side-bioIntro");
      $( ".projects-list" ).show();

      $(".intro p").html(intro);
    });


  /*Highlight project row hover*/

  var i=0;

  $(".projects-list").mouseenter(function () {
    $( "#box" ).addClass("hidden");
    });


  $("#morph-title").mouseenter(function () {
    $( "#morph-hover" ).removeClass( "morph-thumbnail" );
    $( "#morph-hover" ).show();
    i = i+1;
    $( "#morph-hover img" ).css({"transform": "scale(1.5)"});
    $( "#morph-hover" ).css({"z-index": i});
  });

  $("#morph-title").mouseleave(function () {
    $( "#morph-hover" ).addClass( "morph-thumbnail" );
    $( "#morph-hover img" ).css({"transform": "scale(0.4)"});
    });


  $("#skgrrk-title").mouseenter(function () {
    $( "#skgrrk-hover" ).removeClass( "skgrrk-thumbnail" );
    $( "#skgrrk-hover" ).show();
    i = i+1;
    $( "#skgrrk-hover img" ).css({"transform": "scale(1.5)"});
    $( "#skgrrk-hover" ).css({"z-index": i});
  });

  $("#skgrrk-title").mouseleave(function () {
    $( "#skgrrk-hover" ).addClass( "skgrrk-thumbnail" );
    $( "#skgrrk-hover img" ).css({"transform": "scale(0.4)"});
    });

  $("#wmhh-title").mouseenter(function () {
    $( "#wmhh-hover" ).removeClass( "wmhh-thumbnail" );
    $( "#wmhh-hover" ).show();
    i = i+1;
    $( "#wmhh-hover img" ).css({"transform": "scale(1.5)"});
    $( "#wmhh-hover" ).css({"z-index": i});
  });

  $("#wmhh-title").mouseleave(function () {
    $( "#wmhh-hover" ).addClass( "wmhh-thumbnail" );
    $( "#wmhh-hover img" ).css({"transform": "scale(0.4)"});
    });

  $("#valpina-title").mouseenter(function () {
    $( "#valpina-hover" ).removeClass( "valpina-thumbnail" );
    $( "#valpina-hover" ).show();
    i = i+1;
    $( "#valpina-hover img" ).css({"transform": "scale(1.5)"});
    $( "#valpina-hover" ).css({"z-index": i});
  });

  $("#valpina-title").mouseleave(function () {
    $( "#valpina-hover" ).addClass( "valpina-thumbnail" );
    $( "#valpina-hover img" ).css({"transform": "scale(0.4)"});
    });

  $("#sono-title").mouseenter(function () {
    $( "#sono-hover" ).removeClass( "sono-thumbnail" );
    $( "#sono-hover" ).show();
    i = i+1;
    $( "#sono-hover img" ).css({"transform": "scale(1.5)"});
    $( "#sono-hover" ).css({"z-index": i});
  });

  $("#sono-title").mouseleave(function () {
    $( "#sono-hover" ).addClass( "sono-thumbnail" );
    $( "#sono-hover img" ).css({"transform": "scale(0.4)"});
    });

  $("#nhs-title").mouseenter(function () {
    $( "#nhs-hover" ).removeClass( "nhs-thumbnail" );
    $( "#nhs-hover" ).show();
    i = i+1;
    $( "#nhs-hover img" ).css({"transform": "scale(1.5)"});
    $( "#nhs-hover" ).css({"z-index": i});
  });

  $("#nhs-title").mouseleave(function () {
    $( "#nhs-hover" ).addClass( "nhs-thumbnail" );
    $( "#nhs-hover img" ).css({"transform": "scale(0.4)"});
    });


  /*Open project panel*/

  $(".projects-list tr").click(function () {

    $( "#right-side" ).css({"width":"75%"});
    $( "#right-side" ).css({"left":"25%"}, 250);
    $( "#right-side" ).css({"z-index":"4"});

    $( ".main-logo" ).hide();
    $( ".info" ).hide();
    $( ".overview-project img" ).hide();

    $( "#project-expanded" ).show();
    $( "#exit img" ).show();

    $( ".projects-list" ).hide();
    $( "#left-side" ).addClass("left-side-intro");
  });


  /*Close project panel*/

    $("#exit img").click(function () {

      $( "#right-side" ).css({"width":"50%"});
      $( "#right-side" ).css({"left":"50%"});

      $( ".main-logo" ).show();
      $( ".info" ).show();
      $( ".overview-project img" ).show();

      $( "#project-expanded" ).hide();
      $( "#exit img" ).hide();

      $( ".projects-list" ).show();
      $( "#left-side" ).removeClass("left-side-intro");
    });


















});
