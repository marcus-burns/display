(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 21,
	color: "#000000",
	manifest: [
		{src:"images/CTA.png", id:"CTA"},
		{src:"images/main.jpg", id:"main"},
		{src:"images/text1.png", id:"text1"},
		{src:"images/text2.png", id:"text2"}
	]
};



// symbols:



(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,28);


(lib.main = function() {
	this.initialize(img.main);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,792,698);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,93);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,93);


(lib.text2_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.text1();
	this.instance.setTransform(-87,151);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87,151,137,93);


(lib.text1_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.text2();
	this.instance.setTransform(13,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13,0,137,93);


(lib.lightbloc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgxHAelIAA4iIG4AAIAAloIHMAAIAAFAQAfASAGAFQAGAFACAFIODgCQAKgKASgPIAHgFIAAjGImVAAQgMgBAAgMIgCAAIAA+SIGjAAIAAibMBE4AAAMAAAA9Jg");
	this.shape.setTransform(108.5,195.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-205.9,0,628.9,391.5);


(lib.JDL = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E53B48").s().p("AB5FzIAAj3QAAhXgSgfQgWglhBAAQglAAgfAOQgeAOgRAYQgOAUgEAhQgEAaAAA0IAADbIhuAAIAArlIBuAAIAAFVQAigzApgXQAqgWA9AAQBsAAArBEQAQAZAFAiQADAWAAA3IAAEkg");
	this.shape.setTransform(671.6,38.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E53B48").s().p("ABbFzIjWj4IAAD4IhuAAIAArlIBuAAIAAHMIDIjGICIAAIjZDSIDuENg");
	this.shape_1.setTransform(123.7,38.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E53B48").s().p("Ag2FLIAAl/IhUAAIAAhgIBUAAIAAi2IBsAAIAAC2IBVAAIAABgIhVAAIAAF/g");
	this.shape_2.setTransform(714.1,42.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E53B48").s().p("AihE/Qg6gqgBhFIB2AAQADAfAaAQQAbAQAuAAQBJABAegiQAcgfABhHIABg/Qg7BShhAAQhmAAg7hFQg7hGAAh4QAAh0A8hGQA9hHBfAAQA6AAAqAZQApAZATAuIAAhPIBvAAIAAHBQAACKg1A6Qg5A9iHAAQhlAAg7grgAhcjcQgjArgBBMQABBNAiAoQAjAqA9AAQA6AAAlgsQAngsAAhLQgBhMgigpQgkgpg+AAQg8AAgkArg");
	this.shape_3.setTransform(615.7,62.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E53B48").s().p("Ag1F6IAAnfIBsAAIAAHfgAgvkEQgVgVAAgcQAAgcAVgVQAUgTAbgBQAdAAAUAUQAUATAAAeQAAAegUATQgUAVgdgBQgaAAgVgUg");
	this.shape_4.setTransform(578.7,37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E53B48").s().p("AjCFzIAArlIB5AAIAAJ5IEMAAIAABsg");
	this.shape_5.setTransform(546.1,38.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E53B48").s().p("AB5D5IAAj4QAAhVgSggQgWgmhBAAQglAAgeAOQgeAOgSAaQgOAUgEAiQgEAZAAAyIAADcIhuAAIAAngIBoAAIAABPQAhgyAtgXQAtgXA9AAQBsAAArBEQAQAZAFAkQADAXAAA2IAAEjg");
	this.shape_6.setTransform(470.1,50.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E53B48").s().p("AhkDvQgwgUgmglQhOhMAAhqQAAg0AUgvQAUgvAmgkQAmglAwgUQAwgTA0AAQBtAABOBNQAmAlAUAuQAUAuAAA0QAABthNBIQhQBOhsAAQg0AAgwgUgAhohxQgrAvAABCQAABDArAvQAsAuA8AAQA9AAArguQAsgvAAhDQAAhCgrgvQgrgug+AAQg8AAgsAug");
	this.shape_7.setTransform(413.9,51.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E53B48").s().p("Ah2DoQgwgZgag3IBcgyQAUBKBWAAQAkAAAWgSQAUgRAAgdQAAgfgfgRIhQgiQhJgegfgdQgjgiAAgyQAAhAAxgoQAzgpBSAAQA4AAAoAVQAoAUASAmIhOA3QgIgYgWgNQgVgOgdABQgeAAgSAPQgUAOABAZQgBAfAkASQAUAMBFAXQBBAbAcAeQAfAhAAAzQAABIgzApQg1AphaAAQhHAAgugbg");
	this.shape_8.setTransform(364,51.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E53B48").s().p("AjOFiICDkNIiwm2IB5AAIBZD6QAPAqAIA0QAGgYAag/IB3kBIB3AAIlZLDg");
	this.shape_9.setTransform(320.7,63.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E53B48").s().p("Ak6FzIAArlICjAAQCEAAA1AIQBZAOA9AvQBAAxAiBNQAhBNAABiQAABjghBNQgiBMhAAxQg7AthRAPQg1AKhuAAgAjBEGIBlAAQBJAAAjgIQA0gKAlgfQBUhIAAiNQAAiOhUhHQglggg4gKQgmgHhQAAIhXAAg");
	this.shape_10.setTransform(260,38.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E53B48").s().p("Ai0C8QhEhHAAh1QAAhwBGhIQBHhJBugBQB0AABBBDQBBBDAAB3IAAATIl/AAQAFBEAkAlQAkAnA6AAQA0gBAkgWQAkgWAagyIBdA0QhQCQihAAQhyAAhFhHgAh/g5IEFAAQgGg0ghgbQghgbg5AAQhpAAgbBqg");
	this.shape_11.setTransform(170.1,51.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E53B48").s().p("Ai3C9Qg8hFAAh4QAAh0A9hHQA8hHBfAAQA5AAAqAZQAqAaAUAtIAAhPIBuAAIAAHgIhuAAIAAg+Qg7BShiAAQhmgBg6hFgAhch1QgjAsAABJQAABNAiAqQAjAqA9AAQA6AAAlgsQAnguAAhIQAAhMgjgpQgjgpg+gBQg9ABgkAqg");
	this.shape_12.setTransform(65.8,51.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E53B48").s().p("AhbFqQgngSgjgoIBNhOQAjArAlAAQAlgBAOgbQAMgXAAg7IAAobIB3AAIAAJCQAABdgpAtQgpAthXAAQgxAAgngTg");
	this.shape_13.setTransform(16.7,39.6);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728.1,98.5);


(lib.gradient_lighter = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#969696","#000000"],[0,1],0,0,0,0,0,86.5).s().p("ApdJdQj7j6AAljQAAliD7j7QD7j7FiAAQFjAAD7D7QD7D7AAFiQAAFjj7D6Qj7D8ljAAQliAAj7j8g");
	this.shape.setTransform(85.8,85.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,171.5,171.5);


(lib.dysonlgo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOC6IgrgbIAjgwIAXANQAaAMATAAQAwABAVgqQAMgZgBgfQgKALgUAHQgSAHgOAAQg3AAgngmQgoglAAg4IAAiEIBHABIAACDQAAAbATASQATATAZAAQAaAAASgTQATgSAAgbIAAiDIBHgBIAACEQAAB5gLArQgVBQhMASQgUAFgRAAQgiAAghgOg");
	this.shape.setTransform(89.3,745);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNCGQg7gKgogfIAiguQAQAMAcAIQAiAKAXgFQAQgEAEgKQAEgJgMgHQgGgDgogMQgqgLgTgMQgigTAAgkIAHggQAUglAvgKQAXgFARADQA7AEAiAaIgiAuQgYgKgZgEQgXgDgRAEQgMAEgDAHQgDAIAIAFQAIAFAlALQApAMASAJQAqAUgBApQgCAagNARQgaAgguAGg");
	this.shape_1.setTransform(117,737.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA/CDIAAiBQAAgYgSgTQgTgTgaABQgZgBgTATQgSATAAAYIAACBIhHAAIAAiBQAAg2AngnQAogoA2AAQA4AAAnAoQAnAnAAA2IAACBg");
	this.shape_2.setTransform(173.6,737.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AheBfQgngnAAg4QAAg3AngnQAognA2AAQA4AAAnAnQAnAnAAA3QAAA4gnAnQgnAog4AAQg2AAgogogAgsgsQgTATAAAZQAAAaATATQATATAZAAQAaAAATgTQATgTAAgaQAAgZgTgTQgTgTgaAAQgZAAgTATg");
	this.shape_3.setTransform(143.8,738);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AheChQgogoAAg4QAAg4AogmQAngnA3AAIA/AAIAAiDIBIAAIAAEIQAAA4goAoQgoAng3AAQg3AAgngngAgsATQgTATAAAbQAAAbATASQASATAaAAQAaAAATgTQASgSAAgbIAAhAIg/AAQgaAAgSASg");
	this.shape_4.setTransform(58.6,731.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(45.1,711.4,142,53.6);


(lib.CTAmc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CTA();
	this.instance.setTransform(-80,185);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,185,121,28);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#669966").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.border = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(79.5,299.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,161,601);


(lib.black = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.mainmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_168 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(168).call(this.frame_168).wait(43));

	// Layer 2
	this.instance = new lib.lightbloc();
	this.instance.setTransform(474.6,422.4,1,1,0,0,0,220.5,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(151).to({alpha:0},8).to({_off:true},1).wait(51));

	// Layer 1
	this.instance_1 = new lib.main();
	this.instance_1.setTransform(-50,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,0,792,708.9);


(lib.logo = function() {
	this.initialize();

	// FlashAICB
	this.instance = new lib.JDL();
	this.instance.setTransform(-6.5,37,0.201,0.201);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.5,37,146.6,19.8);


(lib.lightspil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_125 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(125).call(this.frame_125).wait(2));

	// Layer 2
	this.instance = new lib.gradient_lighter();
	this.instance.setTransform(85.8,85.8,1,1,0,0,0,85.8,85.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({scaleX:3.92,scaleY:3.92,x:86,y:86,alpha:1},54).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#434343","#000000"],[0.106,1],0,0,0,0,0,86.5).s().p("ApdJdQj7j6AAljQAAliD7j7QD7j7FiAAQFjAAD7D7QD7D7AAFiQAAFjj7D6Qj7D8ljAAQliAAj7j8g");
	this.shape.setTransform(85.8,85.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.5,171.5);


// stage content:
(lib.JDL_retarget_160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopNumber = 0;
	}
	this.frame_248 = function() {
		this.stop();
		/*this.loopNumber = this.loopNumber + 1;
		
		if(this.loopNumber==3){
			this.stop();
		}*/
	}
	this.frame_376 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(248).call(this.frame_248).wait(128).call(this.frame_376).wait(19));

	// border
	this.instance = new lib.border();
	this.instance.setTransform(150,125,1,1,0,0,0,149.5,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},381).wait(14));

	// button
	this.instance_1 = new lib.button();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},381).wait(14));

	// black
	this.instance_2 = new lib.black();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(360).to({_off:false},0).to({alpha:1},11).to({_off:true},3).wait(21));

	// CTA
	this.instance_3 = new lib.CTAmc();
	this.instance_3.setTransform(160.5,206,1,1,0,0,0,60.5,14);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(228).to({_off:false},0).to({alpha:1},7).to({_off:true},139).wait(21));

	// dyson logo
	this.instance_4 = new lib.dysonlgo();
	this.instance_4.setTransform(59,227.9,0.456,0.456,0,0,0,70.9,26.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(239).to({_off:false},0).to({alpha:1},7).to({_off:true},128).wait(21));

	// JDL logo
	this.instance_5 = new lib.logo();
	this.instance_5.setTransform(95,48,1,1,0,0,0,81,34);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},7).to({_off:true},367).wait(21));

	// text2
	this.instance_6 = new lib.text2_1();
	this.instance_6.setTransform(196,178.5,1,1,0,0,0,97,49.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(178).to({_off:false},0).to({alpha:1},6).to({_off:true},190).wait(21));

	// text1
	this.instance_7 = new lib.text1_1();
	this.instance_7.setTransform(150,158.5,1,1,0,0,0,150,49.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({alpha:1},13).wait(72).to({alpha:0},15).to({_off:true},1).wait(284));

	// light
	this.instance_8 = new lib.lightspil();
	this.instance_8.setTransform(-179.1,288.8,2.085,2.085,0,0,0,85.8,85.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(23).to({_off:false},0).wait(1).to({regX:85.7,regY:85.7,x:-177.6,y:288.6},0).wait(1).to({x:-174.1},0).wait(1).to({x:-169.3},0).wait(1).to({x:-163.5},0).wait(1).to({x:-157},0).wait(1).to({x:-149.9},0).wait(1).to({x:-142.3},0).wait(1).to({x:-134.3},0).wait(1).to({x:-126.1},0).wait(1).to({x:-117.5},0).wait(1).to({x:-108.8},0).wait(1).to({x:-99.9},0).wait(1).to({x:-90.9},0).wait(1).to({x:-81.8},0).wait(1).to({x:-72.7},0).wait(1).to({x:-63.5},0).wait(1).to({x:-54.4},0).wait(1).to({x:-45.2},0).wait(1).to({x:-36.2},0).wait(1).to({x:-27.2},0).wait(1).to({x:-18.3},0).wait(1).to({x:-9.5},0).wait(1).to({x:-0.8},0).wait(1).to({x:7.7},0).wait(1).to({x:16},0).wait(1).to({x:24.1},0).wait(1).to({x:32},0).wait(1).to({x:39.6},0).wait(1).to({x:47},0).wait(1).to({x:54},0).wait(1).to({x:60.8},0).wait(1).to({x:67.1},0).wait(1).to({x:73.1},0).wait(1).to({x:78.6},0).wait(1).to({x:83.6},0).wait(1).to({x:88.1},0).wait(1).to({x:92.1},0).wait(1).to({x:95.3},0).wait(1).to({x:97.9},0).wait(1).to({regX:85.8,regY:85.8,x:99.9,y:288.8},0).to({scaleX:1.42,scaleY:1.42,x:99.8},14).wait(1).to({regX:86,regY:85.7,scaleX:5.08,scaleY:5.08,x:100.6,y:288.7},28).to({regX:85.9,scaleX:6.83,scaleY:6.83,x:100.3,y:288.9,alpha:0},23).to({_off:true},1).wait(265));

	// black
	this.instance_9 = new lib.black();
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(131).to({alpha:0},7).to({_off:true},1).wait(256));

	// main
	this.instance_10 = new lib.mainmc();
	this.instance_10.setTransform(111,171,0.318,0.318,0,0,0,396.2,349.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},388).wait(7));

	// black
	this.instance_11 = new lib.black();
	this.instance_11.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},381).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49,300,252.1,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;