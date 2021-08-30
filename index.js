var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    
ctx.strokeStyle = '#89E894'; //outline of the canvas//
ctx.lineWidth = 15;
ctx.lineCap = 'round';
ctx.shadowBlur = 15;
ctx.shadowColor = '#89E894';
    
 //this function will convert degree to radian 
function degToRad(degree) {
 var factor = Math.PI/180;
 return degree*factor;
}
    
function showTime(){
   var now = new Date();
   var today = now.toDateString();
   var time = now.toLocaleTimeString();
   var hours = now.getHours();       
   if(hours>12){
       hours=hours-12;
   }
   var minutes = now.getMinutes();
   var seconds = now.getSeconds();
   var milliseconds = now.getMilliseconds();
   //we will use newSeconds to give a smooth transition while seconds arc moves
   var newSeconds = seconds+ (milliseconds/1000);
   
    // Background
 gradient = ctx.createRadialGradient(250,250,5,250,250,300);
 gradient.addColorStop(0,'#09303a');
 gradient.addColorStop(1,'#000000');
 ctx.fillStyle = gradient;     
 ctx.fillRect(0,0,500,500);
  
  //Creating Hours Circle
  ctx.beginPath();
  ctx.arc(250, 250, 200, degToRad(270), degToRad((hours*30)-90));
  ctx.stroke();
   
    //Creating Minutes Circle
 ctx.beginPath();
 ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes*6)-90));
 ctx.stroke();

 //Creating Seconds Circle
 ctx.beginPath();
 ctx.arc(250, 250, 140, degToRad(270), degToRad((newSeconds*6)-90));
 ctx.stroke();
   
   // Date 
ctx.font = "25px Arial bold";
ctx.fillStyle = '#89E894';
ctx.fillText(today, 155, 250);

// Time
ctx.font = "15px Arial";
ctx.fillStyle = '#89E894';
ctx.fillText(time, 200, 280);
      
}
 //showTime method will be called after 40 milliseconds 
setInterval(showTime, 40);