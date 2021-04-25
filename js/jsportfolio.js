$(document).ready(function() {




  /*Open info panel*/
  /*
  $(".intro a").click(function() {
     $("#project-list").hide();
     $("#bio").show();
     $("#exit-bio").show();

     $(".left-side").css({"background-color":"black"});
     $("p , a").css({"color":"white"})
   });
  */

/*

$("#enter").click(function() {
  $("#home_left-side").show();
  $("#landing").hide();
    });

    */


  /*Close info panel
  $("#exit-bio").click(function() {
    $("#project-list").show();
    $("#bio").hide();
    $("#exit-bio").hide();

    $(".left-side").css({
      "background-color": "white"
    });
    $("p , a").css({
      "color": "black"
    });
    $(".intro a").css({
      "color": "blue"
    });
  });*/

  /*Highlight project row hover*/

  $(".item-list").hover(function() {
    $("canvas").toggle();
  });

  $("#mediazioni-algoritmiche-title").hover(function() {
    $("#mediazioni-algoritmiche-thumbnail img").toggle();
  });

  $("#density3-title").hover(function() {
    $("#density3-thumbnail img").toggle();
  });

  $("#density1-title").hover(function() {
    $("#density1-thumbnail img").toggle();
  });

  $("#density2-title").hover(function() {
    $("#density2-thumbnail img").toggle();
  });

  $("#liquida-title").hover(function() {
    $("#liquida-thumbnail img").toggle();
  });

  $("#meta-title").hover(function() {
    $("#meta-thumbnail img").toggle();
  });

  $("#morph-title").hover(function() {
    $("#morph-thumbnail img").toggle();
  });

  $("#dut-title").hover(function() {
    $("#dut-thumbnail img").toggle();
  });

  $("#wmhh-title").hover(function() {
    $("#wmhh-thumbnail img").toggle();
  });

  $("#handsup-title").hover(function() {
    $("#handsup-thumbnail img").toggle();
  });

  $("#sono-title").hover(function() {
    $("#sono-thumbnail img").toggle();
  });

  $("#nhg-title").hover(function() {
    $("#nhg-thumbnail img").toggle();
  });

});
