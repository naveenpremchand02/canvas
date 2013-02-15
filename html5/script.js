var context;
var dx= 4;
var dy=4;
var y=ran(100,150);
var x=ran(10,20);

function ran(min, max)  
    {  
        return Math.floor(Math.random() * (max - min + 1)) + min;  
    } 

 	
function draw(){
	context= myCanvas.getContext('2d');
	context.clearRect(0,0,300,300);
	context.beginPath();
	context.fillStyle="#0000ff";
	context.arc(x,y,20,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	if( x<0 || x>300)
	dx=-dx;
	if( y<0 || y>300)
		dy=-dy;
		x+=dx;
		y+=dy;
	}
setInterval(draw,ran(6,10));
