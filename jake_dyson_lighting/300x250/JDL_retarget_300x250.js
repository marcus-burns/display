(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
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
p.nominalBounds = new cjs.Rectangle(0,0,126,57);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,71);


(lib.text2_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.text1();
	this.instance.setTransform(35,33);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,29,194,99);


(lib.text1_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.text2();
	this.instance.setTransform(61,17);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,101);


(lib.mainmc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,792,698);


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


(lib.dysonlgo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOC6IgrgbIAjgwIAXANQAaAMATAAQAwABAVgqQAMgZgBgfQgKALgUAHQgSAHgOAAQg3AAgngmQgoglAAg4IAAiEIBHABIAACDQAAAbATASQATATAZAAQAaAAASgTQATgSAAgbIAAiDIBHgBIAACEQAAB5gLArQgVBQhMASQgUAFgRAAQgiAAghgOg");
	this.shape.setTransform(346.7,15.3,0.95,0.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNCGQg7gKgogfIAiguQAQAMAcAIQAiAKAXgFQAQgEAEgKQAEgJgMgHQgGgDgogMQgqgLgTgMQgigTAAgkIAHggQAUglAvgKQAXgFARADQA7AEAiAaIgiAuQgYgKgZgEQgXgDgRAEQgMAEgDAHQgDAIAIAFQAIAFAlALQApAMASAJQAqAUgBApQgCAagNARQgaAgguAGg");
	this.shape_1.setTransform(373,8.6,0.95,0.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA/CDIAAiBQAAgYgSgTQgTgTgaABQgZgBgTATQgSATAAAYIAACBIhHAAIAAiBQAAg2AngnQAogoA2AAQA4AAAnAoQAnAnAAA2IAACBg");
	this.shape_2.setTransform(426.8,8.4,0.95,0.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AheBfQgngnAAg4QAAg3AngnQAognA2AAQA4AAAnAnQAnAnAAA3QAAA4gnAnQgnAog4AAQg2AAgogogAgsgsQgTATAAAZQAAAaATATQATATAZAAQAaAAATgTQATgTAAgaQAAgZgTgTQgTgTgaAAQgZAAgTATg");
	this.shape_3.setTransform(398.4,8.6,0.95,0.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AheChQgogoAAg4QAAg4AogmQAngnA3AAIA/AAIAAiDIBIAAIAAEIQAAA4goAoQgoAng3AAQg3AAgngngAgsATQgTATAAAbQAAAbATASQASATAaAAQAaAAATgTQASgSAAgbIAAhAIg/AAQgaAAgSASg");
	this.shape_4.setTransform(317.5,2.4,0.95,0.95);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(304.7,-16.6,134.9,50.9);


(lib.CTAmc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CTA();
	this.instance.setTransform(33,-25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(33,-25,121,28);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#669966").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.border = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(149.5,124.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,301,251);


(lib.black = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo = function() {
	this.initialize();

	// FlashAICB
	this.instance = new lib.JDL();
	this.instance.setTransform(85.5,37,0.248,0.248);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(85.5,37,180.6,24.4);


// stage content:
(lib.JDL_retarget_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopNumber = 0;
	}
	this.frame_293 = function() {
		this.stop();
		/*this.loopNumber = this.loopNumber + 1;
		
		if(this.loopNumber==3){
			this.stop();
		}*/
	}
	this.frame_381 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(293).call(this.frame_293).wait(88).call(this.frame_381).wait(5));

	// border
	this.instance = new lib.border();
	this.instance.setTransform(150,125,1,1,0,0,0,149.5,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(386));

	// button
	this.instance_1 = new lib.button();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(386));

	// black
	this.instance_2 = new lib.black();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(365).to({_off:false},0).to({alpha:1},11).to({_off:true},3).wait(7));

	// CTA
	this.instance_3 = new lib.CTAmc();
	this.instance_3.setTransform(160.5,206,1,1,0,0,0,60.5,14);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(266).to({_off:false},0).to({alpha:1},7).to({_off:true},106).wait(7));

	// dyson logo
	this.instance_4 = new lib.dysonlgo();
	this.instance_4.setTransform(59,227.9,0.456,0.456,0,0,0,70.9,26.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(285).to({_off:false},0).to({alpha:1},7).to({_off:true},87).wait(7));

	// JDL logo
	this.instance_5 = new lib.logo();
	this.instance_5.setTransform(95,48,1,1,0,0,0,81,34);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(157).to({_off:false},0).to({alpha:1},7).to({_off:true},215).wait(7));

	// text2
	this.instance_6 = new lib.text2_1();
	this.instance_6.setTransform(196,178.5,1,1,0,0,0,97,49.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(179).to({_off:false},0).to({alpha:1},7).wait(57).to({alpha:0},7).to({_off:true},1).wait(135));

	// text1
	this.instance_7 = new lib.text1_1();
	this.instance_7.setTransform(150,158.5,1,1,0,0,0,150,49.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({_off:false},0).to({alpha:1},8).wait(78).to({alpha:0},8).to({_off:true},1).wait(260));

	// lightblock
	this.instance_8 = new lib.black();
	this.instance_8.setTransform(150,156,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({alpha:0},7).to({_off:true},1).wait(361));

	// main
	this.instance_9 = new lib.mainmc();
	this.instance_9.setTransform(85,63,1,1,0,0,0,396,349);
	this.instance_9.alpha = 0.488;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({x:105,alpha:1},9,cjs.Ease.get(1)).wait(118).to({regX:396.1,scaleX:0.57,scaleY:0.57,x:169,y:130},22,cjs.Ease.get(-1)).to({_off:true},229).wait(7));

	// black
	this.instance_10 = new lib.black();
	this.instance_10.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(386));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,281);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;