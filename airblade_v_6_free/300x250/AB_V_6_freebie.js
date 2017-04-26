(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 23,
	color: "#000000",
	manifest: [
		{src:"images/Bitmap1.jpg", id:"Bitmap1"},
		{src:"images/Bitmap10.jpg", id:"Bitmap10"},
		{src:"images/cta.png", id:"cta"},
		{src:"images/text1.png", id:"text1"},
		{src:"images/text2.png", id:"text2"},
		{src:"images/text3.png", id:"text3"},
		{src:"images/v61.jpg", id:"v61"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,167);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,42);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.v61 = function() {
	this.initialize(img.v61);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOC9IgtgbIAkgxQALAIAMAGQAZALAVABQAwABAVgrQANgZAAggQgLALgUAHQgTAHgOAAQg4AAgognQgoglAAg5IAAiGIBJABIAACFQAAAbATATQATATAZAAQAaAAATgTQATgTAAgbIAAiFIBJgBIgBCGQAAB7gLArQgWBShMASQgUAFgSAAQgiAAghgOg");
	this.shape.setTransform(45,34.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOCIQg7gKgpgfIAjgvQAQAMAcAIQAjAKAXgFQARgEAEgKQADgJgLgHQgGgDgqgMQgqgLgTgNQgjgTAAglIAHggQAUgmAwgKQAYgFARADQAgACAbAKQAWAIANALIgiAuQgZgLgZgDQgYgEgQAFQgNADgDAIQgCAIAIAFQAIAGAmALQApALASAKQArAUgCAqQgBAagOASQgZAggwAGg");
	this.shape_1.setTransform(73.2,27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABACGIAAiEQAAgYgTgTQgTgTgaAAQgZAAgUATQgSATgBAYIAACEIhHAAIAAiEQgBg2AogpQAogoA4AAQA4AAAoAoQAoApAAA2IAACEg");
	this.shape_2.setTransform(130.7,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhfBgQgpgoAAg4QAAg3ApgoQAogpA3AAQA4AAApApQAoAoAAA3QAAA4goAoQgpAog4ABQg3gBgogogAgtgtQgTAUAAAZQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgZgTgUQgTgTgbAAQgaAAgTATg");
	this.shape_3.setTransform(100.4,27.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhgCjQgogoAAg5QAAg4AognQApgoA3AAIBBAAIAAiFIBIAAIAAEMQAAA5goAoQgoAog5AAQg3AAgpgogAgtAUQgTATAAAbQAAAbATAUQATATAaAAQAaAAAUgTQASgUABgbIAAhBIhBAAQgaAAgTATg");
	this.shape_4.setTransform(13.8,20.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,144.4,54.6);


(lib.imgv = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106,167);


(lib.imghh2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(265,16,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15,16,250,42);


(lib.imghh1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.v61();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cta_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cta();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.black = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib.AB_V_6_freebie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopNumber = 0;
	}
	this.frame_228 = function() {
		this.loopNumber = this.loopNumber + 1;
		
		if(this.loopNumber==3){
			this.stop();
		}
	}
	this.frame_343 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(228).call(this.frame_228).wait(115).call(this.frame_343).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(344));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(251,223.5,0.416,0.416,0,0,0,72.2,27.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(344));

	// black copy
	this.instance_1 = new lib.black();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).to({_off:true},1).wait(189).to({_off:false},0).to({alpha:1},8).wait(11).to({alpha:0},8).to({_off:true},1).wait(106).to({_off:false},0).to({alpha:1},8).wait(3));

	// cta
	this.instance_2 = new lib.cta_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(218).to({_off:false},0).wait(126));

	// text3
	this.instance_3 = new lib.t3();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(218).to({_off:false},0).wait(126));

	// airblade v small copy 3
	this.instance_4 = new lib.imgv();
	this.instance_4.setTransform(24.9,21,0.688,0.688);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(218).to({_off:false},0).wait(126));

	// hh img 2
	this.instance_5 = new lib.imghh2();
	this.instance_5.setTransform(108.5,195,1,1,0,0,0,91.5,45);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(218).to({_off:false},0).wait(126));

	// text2
	this.instance_6 = new lib.t2();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(106).to({_off:false},0).to({alpha:1},7).to({_off:true},105).wait(126));

	// text1
	this.instance_7 = new lib.t1();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({alpha:1},6).wait(75).to({alpha:0},12).to({_off:true},1).wait(242));

	// airblade v small
	this.instance_8 = new lib.imgv();
	this.instance_8.setTransform(-250.9,150,0.419,0.419,0,0,0,53,83.5);
	this.instance_8.alpha = 0.891;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:49.1},12).wait(80).to({x:339.1},8).to({_off:true},1).wait(243));

	// airblade v small copy
	this.instance_9 = new lib.imgv();
	this.instance_9.setTransform(-203,150,0.419,0.419,0,0,0,53,83.5);
	this.instance_9.alpha = 0.891;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:97},11).wait(80).to({x:387},8).to({_off:true},1).wait(244));

	// airblade v small copy 2
	this.instance_10 = new lib.imgv();
	this.instance_10.setTransform(-155,150,0.419,0.419,0,0,0,53,83.5);
	this.instance_10.alpha = 0.891;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:145},10).wait(80).to({x:435},8).to({_off:true},1).wait(245));

	// airblade v large
	this.instance_11 = new lib.imgv();
	this.instance_11.setTransform(-71,101.5,1,1,0,0,0,53,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:229},9).wait(80).to({x:519},8).to({_off:true},1).wait(246));

	// hh img 1
	this.instance_12 = new lib.imghh1();
	this.instance_12.setTransform(443.5,58.5,1,1,0,0,0,133.5,58.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(96).to({_off:false},0).to({x:133.5},8).to({_off:true},114).wait(126));

	// black
	this.instance_13 = new lib.black();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(344));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.1,124.5,573.7,251);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;