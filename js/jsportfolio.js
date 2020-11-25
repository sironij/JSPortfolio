$(document).ready(function() {




  /*Open info panel*/
  $(".intro a").click(function() {
    $("#project-list").hide();
  });



  /*Highlight project row hover*/

  var i = 0;

  $("#project-list").mouseenter(function() {
    $(".main-logo").addClass("hidden");
  });

  $("#morph-title").mouseenter(function() {
    $("#morph-thumbnail img").show();
    $("#morph-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#morph-thumbnail img").css({
      "z-index": i
    });
  });
  $("#morph-title").mouseleave(function() {
    $("#morph-thumbnail img").removeClass("highlight-thumbnail");
  });

  $("#skgrrk-title").mouseenter(function() {
    $("#skgrrk-thumbnail img").show();
    $("#skgrrk-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#skgrrk-thumbnail img").css({
      "z-index": i
    });
  });
  $("#skgrrk-title").mouseleave(function() {
    $("#skgrrk-thumbnail img").removeClass("highlight-thumbnail");
  });

  $("#wmhh-title").mouseenter(function() {
    $("#wmhh-thumbnail img").show();
    $("#wmhh-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#wmhh-thumbnail img").css({
      "z-index": i
    });
  });
  $("#wmhh-title").mouseleave(function() {
    $("#wmhh-thumbnail img").removeClass("highlight-thumbnail");
  });

  $("#valpina-title").mouseenter(function() {
    $("#valpina-thumbnail img").show();
    $("#valpina-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#valpina-thumbnail img").css({
      "z-index": i
    });
  });
  $("#valpina-title").mouseleave(function() {
    $("#valpina-thumbnail img").removeClass("highlight-thumbnail");
  });

  $("#sono-title").mouseenter(function() {
    $("#sono-thumbnail img").show();
    $("#sono-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#sono-thumbnail img").css({
      "z-index": i
    });
  });
  $("#sono-title").mouseleave(function() {
    $("#sono-thumbnail img").removeClass("highlight-thumbnail");
  });

  $("#nhs-title").mouseenter(function() {
    $("#nhs-thumbnail img").show();
    $("#nhs-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#nhs-thumbnail img").css({
      "z-index": i
    });
  });
  $("#nhs-title").mouseleave(function() {
    $("#nhs-thumbnail img").removeClass("highlight-thumbnail");
  });



});
