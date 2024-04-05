$(document).ready(function() {
    $(".buttonA").click(function() {
        let get_text = $(".target_textA").text();
        alert(get_text);
    });

    $(".buttonB").click(function() {
        $(".target_textB").text("文章が変更された!");
    });
    
    $(".buttonC").click(function() {
        $(".target_textB").text("文章が変わったぞ!");
    });
});

$(document).ready(function() {
    $("#boxA").mouseover(function() {
        $("#boxA").css("background-color", "red");
    });

    $("#boxB").mouseout(function() {
        $(this).css("background-color", "blue");
    });

    $("#boxC").hover(
        function() {
            $(this).css("font-size", "30px");
        },
        function(){
            $(this).css("font-size", "14px");
        }
    );

    $(".boxD").mouseover(function() {
        $("#boxA,#boxB").css("background-color", "white");
    });
});

$(document).ready(function(){
    $(".button_a").click(function() {
        $(".box_a").addClass("add_color_yellow");
    });

    $(".button_b").click(function() {
        $(".box_a").removeClass("add_color_yellow");
    });

    $(".button_c").click(function() {
        $(".box_b").addClass("add_hidden");
    });

    $(".button_d").click(function() {
        $(".box_b").removeClass("add_hidden");
    });
});

function eventA() {
    alert("onclickイベントが発火しました");
  }
  
  function eventB() {
    alert("oninputイベントが発火しました");
  }
  
  function eventC() {
    alert("onmouseoutイベントが発火しました");
  }
  
  function eventD() {
    alert("onmouseoverイベントが発火しました");
  }
  