var text = document.querySelector('#newmsg');
var send = document.querySelector('#send');
var chatbox = document.querySelector('.chat');

var Fake = [
  'en kısa sürede cevap vereceğim',
  'en kısa sürede cevap vereceğim',
  'en kısa sürede cevap vereceğim',
  'en kısa sürede cevap vereceğim',
  'en kısa sürede cevap vereceğim',
  'en kısa sürede cevap vereceğim',
  'en kısa sürede cevap vereceğim',
  'en kısa sürede cevap vereceğim',
  'en kısa sürede cevap vereceğim',
  'en kısa sürede cevap vereceğim',
  'en kısa sürede cevap vereceğim',
  'It was a pleasure chat with you',
  'en kısa sürede cevap vereceğim',
  'en kısa sürede cevap vereceğim',
  'en kısa sürede cevap vereceğim'
]

var i=0;

send.addEventListener("click", function(){
  
  var d = new Date();
var n = d.toLocaleTimeString();
  
  var msg = text.value;
  
  if(msg)
    {
  chatbox.innerHTML += ("<section class='send message'><section class='box'>" + msg + "</section><section class='time'>"+ n +"</section></section>");
  text.value='';
      
      setTimeout(function(){
        
        var d = new Date();
var n = d.toLocaleTimeString();
        
        chatbox.innerHTML += ("<section class='reci message'><section class='box'>" + Fake[i] + "</section><section class='time'>"+ n +"</section></section>");
  text.value='';
        i++;
      }, Math.ceil(Math.random()*2000)+1000);
    }
    });



/*
<section class="send message">
        <section class="box">
          Let's meet tonight for dinner. Do you have any prior engagements?
        </section>
        <section class="time">9:41AM</section>
      </section>
      */