/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

//Jquery for the document
$(document).ready(function(){
  
  //When mouse moves over button
  $("button").hover(function(){
    $(this).css({"background-color":"#FFBF00", "font-size":"20px","color":"black"});
    $(this).text("Submit");
    }, function(){
    $(this).css({"background-color":"teal", "font-size":"16px", "color":"white"});
    $(this).text("Send");
  });
  
  //When input field is in focus and loses focus
  $("input").on({
  focus: function(){
    $(this).css({"font-size":"20px", "box-shadow": "5px 10px 8px 10px teal","padding":"15px"})
  },
  blur: function(){
    $(this).css({"font-size":"14px", "box-shadow":"none", "padding":"10px"})
  }
});
  
  //When textarea is in focus and loses focus
  $("textarea").on({
  focus: function(){
    $(this).css({"font-size":"20px", "box-shadow": "5px 10px 8px 10px teal"})
    $("button").css({"font-size":"20px", "right":"-10%"})
  },
  blur: function(){
    $(this).css({"font-size":"initial", "box-shadow":"none"})
    $("button").css({"font-size":"initial", "right":"5%"})
  }
});
  
  $("form").validate();
  
});
