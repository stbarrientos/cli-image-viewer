$(document).ready(function(){

  var imgSrc;
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var imageObj = new Image();
  var jsondataResource = JSON.stringify({message: 'hello world'});

  $.ajax({
    url: "/image",
    method: "GET",
    dataType: "json",
    success: function(data){
      imgSrc = data;
      imageObj.onload = function() {
        context.drawImage(imageObj, 50, 50);
      };
      imageObj.src = imgSrc;
    }
  });

  $.ajax({
    url: "/converter", 
    dataType: "json", 
    method: "POST",
    contentType: "application/json",
    data: jsondataResource, 
    success: function(data){
      console.log(data);
    }
  });
});
