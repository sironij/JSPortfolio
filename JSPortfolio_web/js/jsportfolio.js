$(document).ready(function(){




  /*Open info panel*/


  $(".intro a").click(function () {
    $( ".info" ).css({"opacity":"100%"});
    $( ".info img" ).css({"opacity":"100%"});

    $( "#intro-general" ).hide();
    $( ".overview-project img" ).hide();

    $( ".expanded-bio" ).show();
    $( "#exit img" ).show();
    $( ".projects-list" ).hide();

  });

    $("#exit img").click(function () {
      $( ".info" ).css({"opacity":"0%"});
      $( ".info img" ).css({"opacity":"0%"});

      $( ".overview-project img" ).show(0);

      $( ".expanded-bio" ).hide();
      $( "#exit img" ).hide();
      $( "#intro-general" ).show();
      $( ".projects-list" ).show();

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


});
