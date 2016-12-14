

	var canvas = document.getElementById('drawOrbit');
    var w = canvas.width = window.innerWidth-500;
    var h = canvas.height = window.innerHeight;
    var arcX = w/2-10;
    var arcY = h/2-70;
    var context = canvas.getContext('2d');
 
 for (let i=1;i<= 4;i++) {
  context.beginPath();
  context.lineWidth = 5;
  context.arc(arcX,arcY,i*70,0,Math.PI*2,true);
  context.closePath();
  context.strokeStyle = '#555';
  context.stroke();
 }
  

  context.beginPath();
  context.lineWidth = 5;
  context.arc(arcX,arcY,50,0,Math.PI*2,true);
  context.closePath();
  context.fillStyle = 'blue';
  context.fill();

  var createShip = function() {
  	 context.lineWidth = 2;
  	 context.strokeStyle = 'green';
  	 context.strokeRect(arcX-7,arcY-75,40,20);
  };
  

  
  
