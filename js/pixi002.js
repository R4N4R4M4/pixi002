var renderer;
var stage;
var width,height;
var ball;
var dx=5;

function pixi002()
  {
	app.receivedEvent('deviceready');
	GAME_WIDTH = 800;
	GAME_HEIGHT = 600;
	width = window.outerWidth,
	height = window.outerHeight/2;
	
	var rendererOptions = {antialias:true, transparent:false, resolution:1,autoresize:true,backgroundColor: 0x008000}
	renderer = PIXI.autoDetectRenderer(width, height, rendererOptions);
	document.getElementById("test").appendChild(renderer.view);
	stage = new PIXI.Container();
	
	ball = new PIXI.Graphics();
	ball.beginFill(0xff2200); // Red
	ball.drawCircle(0, 0, 40); // drawCircle(x, y, radius)
	ball.position.x = width/2;
	ball.position.y = height/2;
	ball.endFill();
	stage.addChild(ball);
	renderer.render(stage);
	animate();
	}

function animate() 
	{
	ball.position.x+=dx;
	if(ball.position.x>width+40)ball.position.x=-40;
	else if(ball.position.x<-40)ball.position.x=width+40;
	renderer.render(stage);
	requestAnimationFrame(animate);
	}

function position()
	{
	//document.getElementById("ok").setAttribute('style','display:none;');
	dx=-dx;
	}
