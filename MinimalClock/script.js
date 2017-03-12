var textTime = document.getElementById("textTime");
var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");

setInterval(function(){
  var seconds = new Date().getSeconds();
  var minutes = new Date().getMinutes();
  var  hours  = new Date().getHours();
  textTime.innerHTML = hours+":"+minutes+"<span id='seconds'>+"+seconds+"</span>";
  second.style.transform = 'rotate(' + seconds/60*360 + 'deg)';
  minute.style.transform = 'rotate(' + minutes/60*360 + 'deg)';
  hour  .style.transform = 'rotate(' +   hours/60*360 + 'deg)';
}, 1000);
