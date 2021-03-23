$(document).ready(function() {




  /*Open info panel*/
  $(".intro a").click(function() {
    $("#project-list").hide();
  });

  /*Change background project row hover*/

  $("#project-list").mouseenter(function() {
    $(".right-side").addClass("inverted");
  });

  $("#project-list").mouseleave(function() {
    $(".right-side").removeClass("inverted");
  });

  /*Highlight project row hover*/

  var i = 0;


  $("#project-list").mouseenter(function() {
    $(".main-logo").addClass("hidden");
    $("canvas").addClass("hidden");
  });

  $("#mediazioni-algoritmiche-title").mouseenter(function() {
    $("#mediazioni-algoritmiche-thumbnail img").show();
    $("#mediazioni-algoritmiche-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#mediazioni-algoritmiche-thumbnail img").css({
      "z-index": i
    });
  });
  $("#mediazioni-algoritmiche-title").mouseleave(function() {
    $("#mediazioni-algoritmiche-thumbnail img").removeClass("highlight-thumbnail");
  });

  $("#density3-title").mouseenter(function() {
    $("#density3-thumbnail img").show();
    $("#density3-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#density3-thumbnail img").css({
      "z-index": i
    });
  });
  $("#density3-title").mouseleave(function() {
    $("#density3-thumbnail img").removeClass("highlight-thumbnail");
  });

  $("#density1-title").mouseenter(function() {
    $("#density1-thumbnail img").show();
    $("#density1-thumbnail img").addClass("highlight-thumbnail");
    i = i + 1;
    $("#density1-thumbnail img").css({
      "z-index": i
    });
  });
  $("#density1-title").mouseleave(function() {
    $("#density1-thumbnail img").removeClass("highlight-thumbnail");
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


  /*Highlight project row hover*/

  function animatethis(targetElement, speed) {
    var scrollWidth = $(targetElement).get(0).scrollWidth;
    var clientWidth = $(targetElement).get(0).clientWidth;
    $(targetElement).animate({
      scrollLeft: scrollWidth - clientWidth
    }, {
      duration: speed,
      complete: function() {
        stop(), {
          duration: speed,
          complete: function() {
            animatethis(targetElement, speed);
          }
        };
      }
    });
  };


  animatethis($(".project-gallery"), 10000);

  $(".project-gallery").mouseenter(function() {
    $(this).stop();
  });

  $(".project-gallery").mouseleave(function() {
    animatethis($(this), 10000);
  });


});
