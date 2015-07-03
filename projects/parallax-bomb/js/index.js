var fromTheTop = $(window).scrollTop();
$("#counter").text(fromTheTop);


$(window).scroll(function() {

  fromTheTop = $(window).scrollTop();

  $("#counter").text(fromTheTop);

  $("#bomb").css({
    "top": 400 + fromTheTop * 1.01 + "px",
  });


  $("#plane1").css({
    "left": fromTheTop * -0.5 + "px",
    "top": 100 + fromTheTop * 0.3 + "px",
  });

  $("#plane2").css({
    "right": 7900 + fromTheTop * -1 + "px",
  });

  $("#bird").css({
    "left": 8900 + fromTheTop * -1 + "px",
  });

  //clouds
  $("#cloud1").css({
    "top": 1000 + fromTheTop * 0.7 + "px",
  });
  $("#cloud2").css({
    "top": 1200 + fromTheTop * 0.5 + "px",
  });
  $("#cloud3").css({
    "top": 2000 + fromTheTop * 0.4 + "px",
  });
  $("#cloud4").css({
    "top": 2300 + fromTheTop * 0.1 + "px",
  });
  $("#cloud5").css({
    "top": 1600 + fromTheTop * 0.2 + "px",
  });
  $("#cloud6").css({
    "top": 3400 + fromTheTop * 0.2 + "px",
  });


  $("#message1").css({
    "top": 1700 + fromTheTop * 0.4 + "px",
  });
  $("#message2").css({
    "top": 2700 + fromTheTop * 0.4 + "px",
  });
  $("#message3").css({
    "top": 3700 + fromTheTop * 0.4 + "px",
  });
  $("#message4").css({
    "top": 4700 + fromTheTop * 0.4 + "px",
  });
  $("#message5").css({
    "top": 5700 + fromTheTop * 0.4 + "px",
  });
  $("#message6").css({
    "top": 6700 + fromTheTop * 0.4 + "px",
  });
  $("#message7").css({
    "top": 7700 + fromTheTop * 0.4 + "px",
  });
  $("#message8").css({
    "top": 8700 + fromTheTop * 0.4 + "px",
  });
  $("#message9").css({
    "top": 9000 + fromTheTop * 0.4 + "px",
  });
  $("#message10").css({
    "top": 11500 + fromTheTop * 0.4 + "px",
  });


  //planes
  if (fromTheTop >= 500) {
    $("#plane1").css({
      "display": "none"
    })
  } else {
    $("#plane1").css({
      "display": "block"
    });
  }

  if (fromTheTop <= 6800) {
    $("#plane2").css({
      "display": "none"
    });
  } else {
    $("#plane2").css({
      "display": "block"
    });
  }

  if (fromTheTop >= 8400) {
    $("#plane2").css({
      "display": "none"
    })
  }

  //bird
  if (fromTheTop <= 7800) {
    $("#bird").css({
      "display": "none"
    });
  } else {
    $("#bird").css({
      "display": "block"
    });
  }

  if (fromTheTop >= 9200) {
    $("#bird").css({
      "display": "none"
    })
  }

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
  }

  var cloud4 = $("#cloud4");
  var mymessage1 = $("#message1");
  $(window).scroll(function() {
    if (isScrolledIntoView(cloud4)) {
      mymessage1.fadeIn(400);
    } else {
      mymessage1.fadeOut(200)
    }
  });

  var cloud6 = $("#cloud6");
  var mymessage2 = $("#message2");
  $(window).scroll(function() {
    if (isScrolledIntoView(cloud6)) {
      mymessage2.fadeIn(400);
    } else {
      mymessage2.fadeOut(200)
    }
  });

  var dummy1 = $("#dummy1");
  var mymessage3 = $("#message3");
  $(window).scroll(function() {
    if (isScrolledIntoView(dummy1)) {
      mymessage3.fadeIn(400);
    } else {
      mymessage3.fadeOut(200)
    }
  });

  var dummy2 = $("#dummy2");
  var mymessage4 = $("#message4");
  $(window).scroll(function() {
    if (isScrolledIntoView(dummy2)) {
      mymessage4.fadeIn(400);
    } else {
      mymessage4.fadeOut(200)
    }
  });

  var dummy3 = $("#dummy3");
  var mymessage5 = $("#message5");
  $(window).scroll(function() {
    if (isScrolledIntoView(dummy3)) {
      mymessage5.fadeIn(400);
    } else {
      mymessage5.fadeOut(200)
    }
  });

  var dummy4 = $("#dummy4");
  var mymessage6 = $("#message6");
  $(window).scroll(function() {
    if (isScrolledIntoView(dummy4)) {
      mymessage6.fadeIn(400);
    } else {
      mymessage6.fadeOut(200)
    }
  });

  var dummy5 = $("#dummy5");
  var mymessage7 = $("#message7");
  $(window).scroll(function() {
    if (isScrolledIntoView(dummy5)) {
      mymessage7.fadeIn(400);
    } else {
      mymessage7.fadeOut(200)
    }
  });

  var dummy6 = $("#dummy6");
  var mymessage8 = $("#message8");
  var mymessage9 = $("#message9");
  $(window).scroll(function() {
    if (isScrolledIntoView(dummy6)) {
      mymessage8.fadeIn(400);
      mymessage9.fadeIn(400);
    } else {
      mymessage8.fadeOut(200)
      mymessage9.fadeOut(400);
    }
  });

  var dummyflash = $("#dummyflash");
  var flash = $("#flash");
  $(window).scroll(function() {
    if (isScrolledIntoView(dummyflash)) {
      flash.fadeIn(0)
    } else {
      flash.fadeOut(0)
    }
  });

  var explosion = $("#explosion");
  var bomb = $("#bomb");
  $(window).scroll(function() {
    if (isScrolledIntoView(explosion)) {
      bomb.fadeOut(0)
    } else {
      bomb.fadeIn(0)
    }
  });
});
