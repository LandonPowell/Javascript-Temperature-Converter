var textTime = document.getElementById("textTime");
var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");

setInterval(function(){
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours   = date.getHours();
  textTime.innerHTML = hours+":"+minutes+"<span id='seconds'>+"+seconds+"</span>";
  second.style.transform = 'rotate(' + seconds/60*360 + 'deg)';
  minute.style.transform = 'rotate(' + minutes/60*360 + 'deg)';
  hour  .style.transform = 'rotate(' +   hours/24*360 + 'deg)';
}, 1000);
