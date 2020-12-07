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

  $("#density2-title").mouseenter(function() {
    $("#density2-thumbnail img").show();
    $("#density2-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#density2-thumbnail img").css({
      "z-index": i
    });
  });
  $("#density2-title").mouseleave(function() {
    $("#density2-thumbnail img").removeClass("highlight-thumbnail");
  });

  $("#liquida-title").mouseenter(function() {
    $("#liquida-thumbnail img").show();
    $("#liquida-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#liquida-thumbnail img").css({
      "z-index": i
    });
  });
  $("#liquida-title").mouseleave(function() {
    $("#liquida-thumbnail img").removeClass("highlight-thumbnail");
  });

  $("#meta-title").mouseenter(function() {
    $("#meta-thumbnail img").show();
    $("#meta-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#meta-thumbnail img").css({
      "z-index": i
    });
  });
  $("#meta-title").mouseleave(function() {
    $("#meta-thumbnail img").removeClass("highlight-thumbnail");
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

  $("#dut-title").mouseenter(function() {
    $("#dut-thumbnail img").show();
    $("#dut-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#dut-thumbnail img").css({
      "z-index": i
    });
  });
  $("#dut-title").mouseleave(function() {
    $("#dut-thumbnail img").removeClass("highlight-thumbnail");
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

  $("#handsup-title").mouseenter(function() {
    $("#handsup-thumbnail img").show();
    $("#handsup-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#handsup-thumbnail img").css({
      "z-index": i
    });
  });
  $("#handsup-title").mouseleave(function() {
    $("#handsup-thumbnail img").removeClass("highlight-thumbnail");
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

  $("#nhg-title").mouseenter(function() {
    $("#nhg-thumbnail img").show();
    $("#nhg-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#nhg-thumbnail img").css({
      "z-index": i
    });
  });
  $("#nhg-title").mouseleave(function() {
    $("#nhg-thumbnail img").removeClass("highlight-thumbnail");
  });



});
