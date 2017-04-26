(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 23,
	color: "#FFFFFF",
	manifest: [
		{src:"images/cta.png", id:"cta"},
		{src:"images/img0.jpg", id:"img0"},
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"},
		{src:"images/img3.jpg", id:"img3"},
		{src:"images/t0.png", id:"t0"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"}
	]
};



// symbols:



(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img0 = function() {
	this.initialize(img.img0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t0 = function() {
	this.initialize(img.t0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.white = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t0();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A7A7A").s().p("AhkCRIAAi6QAAgqAdgeQAegfApAAQAqAAAdAcQAeAdAAAuQABAngeAcQgfAfgtAAIg0AAIAABYgAgohTQgQARAAAZIAAA3IA0AAQAcAAASgRQAPgRAAgXQAAgZgSgRQgQgQgXAAQgXAAgRASg");
	this.shape.setTransform(322.6,24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A7A7A").s().p("AhLBHQgdgfABgoQgBguAjgeQAegbAnAAQApAAAeAbQAhAeAAAuIAABiIgsAAIAAgOQgbAUghAAQgtAAgeghgAgpgpQgSASAAAXQAAAYARASQARATAZAAQAYAAASgRQASgSAAgaQAAgagUgSQgRgQgXAAQgYAAgRATg");
	this.shape_1.setTransform(298.9,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7A7A7A").s().p("AAxCRQgoAAgbgZQghgbAAgtIAAjAIAtAAIAABYIAsAAIAAAqIgsAAIAAA7QAAAWAGANQAMATAhAEIAHABIAAApg");
	this.shape_2.setTransform(282.1,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7A7A7A").s().p("AhLBHQgcgeAAgpQgBgtAigfQAfgbAnAAQAqAAAfAeQAfAfABAqIgCAPIifAAQADAUAQANQARAQAUAAQAdAAAhgWIAaAhQgoAdgtAAQgvAAgfghgAgjgxQgQAMgEARIBvAAQgEgPgNgNQgRgPgWAAQgSAAgRAOg");
	this.shape_3.setTransform(254.5,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7A7A7A").s().p("AhHB9QgdgeAAgsQAAgqAegbQAfgeApAAIA3AAIAAhpIAsAAIAADMQABAqgeAeQgeAfgqgBQgqAAgdgcgAgnAKQgRARgBAZQAAAcAUAQQAQAOAVAAQAYAAAQgRQARgRAAgZIAAg4Ig5AAQgWAAgRAPg");
	this.shape_4.setTransform(230.8,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7A7A7A").s().p("AhLBHQgdgfAAgoQABguAhgeQAfgcAnABQAogBAfAcQAiAeAAAuIAABiIgsAAIAAgOQgaAUgjAAQgsAAgfghgAgqgpQgRATAAAWQAAAYAQASQASATAZAAQAZABASgTQARgSABgZQAAgbgUgRQgSgQgXAAQgXAAgTATg");
	this.shape_5.setTransform(207,20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7A7A7A").s().p("AgVCWIAAkrIArAAIAAErg");
	this.shape_6.setTransform(191.1,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7A7A7A").s().p("AhIB6QgcgeAAgpIAAjMIAsAAIAABpIA0AAQArAAAgAeQAeAcAAApQABAsgdAeQgdAcgsAAQgrABgdgggAg4A4QAAASAOARQARAUAZgBQAaABARgUQAOgQAAgXQAAgWgOgRQgSgSgdAAIg0AAg");
	this.shape_7.setTransform(175.4,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7A7A7A").s().p("Ag3BlIAAhhQAAgwAggeQAbgaAqAAIAKAAIAAAoIgRACQgaAEgNARQgLARAAAZIAABgg");
	this.shape_8.setTransform(157,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7A7A7A").s().p("AgVCLIAAjDIArAAIAADDgAgQhfQgHgIAAgKQAAgKAHgIQAHgHAJAAQAKAAAHAHQAHAIAAAKQAAALgHAHQgHAHgKAAQgIAAgIgHg");
	this.shape_9.setTransform(145.4,16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7A7A7A").s().p("AhLBHQgcgfAAgoQAAguAhgeQAfgcAnABQApgBAeAcQAhAeAAAuIAABiIgsAAIAAgOQgaAUgiAAQgsAAgfghgAgpgpQgSASAAAXQAAAYAQASQASATAZAAQAZABARgTQASgSAAgZQABgbgUgRQgRgQgYAAQgYAAgRATg");
	this.shape_10.setTransform(129,20.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape_11.setTransform(33.6,25.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_12.setTransform(54.7,20.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_13.setTransform(97.8,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_14.setTransform(75.1,20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_15.setTransform(10.3,15.3);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,332.8,40.9);


(lib.img0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img0();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.image3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img1();
	this.instance.setTransform(0,20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,20,300,250);


(lib.cta_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cta();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.border = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(149.5,124.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,301,251);


(lib.i2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_73 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73).wait(13));

	// Layer 1
	this.instance = new lib.i12();
	this.instance.setTransform(150,145,1,1,0,0,0,150,125);
	this.instance.alpha = 0.09;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({alpha:1},19).wait(17));

	// img1
	this.instance_1 = new lib.i1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,300,250);


// stage content:
(lib.AB_tap_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopNumber = 0;
	}
	this.frame_84 = function() {
		this.mc2.gotoAndPlay(1);
	}
	this.frame_323 = function() {
		this.loopNumber = this.loopNumber + 1;
		
		if(this.loopNumber==3){
			this.stop();
		}
	}
	this.frame_344 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(84).call(this.frame_84).wait(239).call(this.frame_323).wait(21).call(this.frame_344).wait(1));

	// border
	this.instance = new lib.border();
	this.instance.setTransform(150,125,1,1,0,0,0,149.5,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(345));

	// white copy
	this.instance_1 = new lib.white();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.09},5).to({_off:true},1).wait(71).to({_off:false},0).to({alpha:1},6).wait(4).to({alpha:0.09},5).to({_off:true},1).wait(116).to({_off:false},0).to({alpha:1},8).wait(8).to({alpha:0.09},5).to({_off:true},1).wait(104).to({_off:false},0).to({alpha:1},6).wait(4));

	// cta
	this.instance_2 = new lib.cta_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(224).to({_off:false},0).wait(121));

	// logo
	this.instance_3 = new lib.logo();
	this.instance_3.setTransform(150.4,31.4,0.511,0.511,0,0,0,166.3,20.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(224).to({_off:false},0).wait(121));

	// t2
	this.instance_4 = new lib.t2_1();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(224).to({_off:false},0).wait(121));

	// t1
	this.instance_5 = new lib.t1_1();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0.09;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95).to({_off:false},0).to({alpha:1},9).wait(100).to({alpha:0.09},5).to({_off:true},1).wait(135));

	// t0
	this.instance_6 = new lib.text0();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0.09;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({alpha:1},5).wait(60).to({alpha:0.09},5).to({_off:true},1).wait(267));

	// img3
	this.instance_7 = new lib.image3();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(224).to({_off:false},0).wait(121));

	// img2
	this.mc2 = new lib.i2();
	this.mc2.setTransform(150,125,1,1,0,0,0,150,125);
	this.mc2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(84).to({_off:false},0).to({scaleX:1.13,scaleY:1.13},133).to({_off:true},1).wait(127));

	// img0
	this.instance_8 = new lib.img0_1();
	this.instance_8.setTransform(150,125.1,1.1,1.1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,y:125},82,cjs.Ease.get(0.1)).to({_off:true},2).wait(261));

	// white
	this.instance_9 = new lib.white();
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(345));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135.1,112.6,329.9,274.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;