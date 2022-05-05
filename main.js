var mouseEvent =  "empty";
var last_position_of_x,last_position_of_y;
var current_position_of_mouse_x,current_position_of_mouse_y;
canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
 color = "blue";
 width_of_line = 1;


 canvas.addEventListener("mousedown", my_mousedown);

 function my_mousedown(e){
     mouseEvent = "mouseDown";
 }

 canvas.addEventListener("mouseleave", my_mouseleave);

 function my_mouseleave(e){
    mouseEvent = "mouseLeave";
 }

 function my_mouseup(e){
    mouseEvent = "mouseUp";
 }

 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.arc(last_position_of_x,last_position_of_y,40,0,2 * Math.PI);
      ctx.stroke();
      
      
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
 }



function clearCanvas(){
ctx.clearRect(0,0,canvas.width,canvas.height)
 }
