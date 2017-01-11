$(function() {
    var upDown = []


  $(".col-md-2").click(function() {
    $(this).children().toggle();

    var classSelect = $(this).children().attr("class");

    if (classSelect === ("col-md-2 up")) {
      $(this).removeClass("up");
    }
    else if (classSelect !== ("col-md-2 up")) {
      $(this).addClass("up");
      upDown.push($(this).attr("class").split(" ")[1]);
    };
    if (upDown.length === 2) {
      if (verify(upDown) === true) {
        $(".up").off("click");
        $(".up").addClass("solved")
        clearArray();
        if (12 === $(".solved").length) {
          alert("you win!")
          $("body").addClass("applause");
        }
      }
      else {
        alert("get ready to start over");
        setTimeout("location.reload()", 300);
      };
    };
  });

  var clearArray = function() {
    upDown = [];
    return upDown;
  }

  var verify = function() {
     if (upDown[0] === upDown[1]) {
      alert("a match!");
      return true
    }
    else {
      return false
    }
  }
});
