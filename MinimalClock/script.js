setInterval(function(){
  var seconds = new Date().getSeconds();
  var minutes = new Date().getMinutes();
  var  hours  = new Date().getHours();
  $(".textTime").html(hours+":"+minutes+"<span class='seconds'>"+seconds+"</span>" );
  $('.second').css({ 'transform': 'rotate(' + seconds/60*360 + 'deg)' });
  $('.minute').css({ 'transform': 'rotate(' + minutes/60*360 + 'deg)' });
  $( '.hour' ).css({ 'transform': 'rotate(' +   hours/60*360 + 'deg)' });
}, 1000);