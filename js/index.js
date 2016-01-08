/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
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
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
		//document.getElementById("ok").setAttribute('style','display:inline;');
		//position();

        console.log('Received Event: ' + id);
    }
};

function position()
	{
	//document.getElementById("ok").setAttribute('style','display:none;');
	}
app.initialize();
