function pixi002()
  {
	app.receivedEvent('deviceready');
	GAME_WIDTH = 800;
	GAME_HEIGHT = 600;
	width = window.outerWidth,
	height = window.outerHeight/2;
	
	var rendererOptions = {antialias:true, transparent:false, resolution:1,autoresize:true,backgroundColor: 0x008000}
	var renderer = PIXI.autoDetectRenderer(width, height, rendererOptions);
	document.getElementById("test").appendChild(renderer.view);
	var stage = new PIXI.Container();
	
	var ball = new PIXI.Graphics();
	ball.beginFill(0xff2200); // Red
	ball.drawCircle(width/2, height/2, 40); // drawCircle(x, y, radius)
	ball.endFill();
	stage.addChild(ball);
	renderer.render(stage);
	requestAnimFrame(animate);
	}

function animate() {requestAnimFrame(animate); renderer.render(stage);}

function position()
	{
	//document.getElementById("ok").setAttribute('style','display:none;');
	}
