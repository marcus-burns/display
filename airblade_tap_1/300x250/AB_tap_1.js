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
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"},
		{src:"images/img3.png", id:"img3"},
		{src:"images/img4.png", id:"img4"},
		{src:"images/img5.png", id:"img5"},
		{src:"images/img6.jpg", id:"img6"},
		{src:"images/txt1.png", id:"txt1"},
		{src:"images/txt2.png", id:"txt2"},
		{src:"images/txt3.png", id:"txt3"},
		{src:"images/txt4.png", id:"txt4"},
		{src:"images/txt5.png", id:"txt5"}
	]
};



// symbols:



(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,30);


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


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img6 = function() {
	this.initialize(img.img6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt3 = function() {
	this.initialize(img.txt3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt4 = function() {
	this.initialize(img.txt4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt5 = function() {
	this.initialize(img.txt5);
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


(lib.t5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt1();

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


(lib.img6_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i2 = function() {
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

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cta_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cta();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87,30);


(lib.border = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(149.5,124.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,301,251);


// stage content:
(lib.AB_tap_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopNumber = 0;
	}
	this.frame_313 = function() {
		this.loopNumber = this.loopNumber + 1;
		
		if(this.loopNumber==3){
			this.stop();
		}
	}
	this.frame_344 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(313).call(this.frame_313).wait(31).call(this.frame_344).wait(1));

	// border
	this.instance = new lib.border();
	this.instance.setTransform(150,125,1,1,0,0,0,149.5,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(345));

	// white copy
	this.instance_1 = new lib.white();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.09},5).to({_off:true},1).wait(184).to({_off:false},0).to({alpha:1},8).wait(4).to({alpha:0.09},5).to({_off:true},1).wait(49).to({_off:false},0).to({alpha:1},8).wait(7).to({alpha:0.09},5).to({_off:true},1).wait(58).to({_off:false},0).to({alpha:1},6).wait(3));

	// end copy
	this.instance_2 = new lib.t4();
	this.instance_2.setTransform(150,122,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(267).to({_off:false},0).wait(78));

	// logo
	this.instance_3 = new lib.logo();
	this.instance_3.setTransform(151.6,187.5,0.51,0.51,0,0,0,166.3,20.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(267).to({_off:false},0).wait(78));

	// cta
	this.instance_4 = new lib.cta_1();
	this.instance_4.setTransform(151.5,223,1,1,0,0,0,43.5,15);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(267).to({_off:false},0).wait(78));

	// t5
	this.instance_5 = new lib.t5();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(200).to({_off:false},0).to({_off:true},65).wait(80));

	// t3
	this.instance_6 = new lib.t3();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0.09;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(134).to({_off:false},0).to({alpha:1},7).to({_off:true},57).wait(147));

	// t2
	this.instance_7 = new lib.t2();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0.09;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(55).to({_off:false},0).to({alpha:1},8).wait(52).to({alpha:0.09},8).to({_off:true},1).wait(221));

	// t1
	this.instance_8 = new lib.t1();
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_8.alpha = 0.09;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({alpha:1},5).wait(32).to({alpha:0.09},6).to({_off:true},1).wait(297));

	// img6
	this.instance_9 = new lib.img6_1();
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(267).to({_off:false},0).wait(78));

	// img4
	this.instance_10 = new lib.i4();
	this.instance_10.setTransform(450,125,1,1,0,0,0,150,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(117).to({_off:false},0).to({x:150},10,cjs.Ease.get(1)).to({_off:true},71).wait(147));

	// img3
	this.instance_11 = new lib.img3_1();
	this.instance_11.setTransform(-150,125,1,1,0,0,0,150,125);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(117).to({_off:false},0).to({x:150},10,cjs.Ease.get(1)).to({_off:true},71).wait(147));

	// img5
	this.instance_12 = new lib.i5();
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(200).to({_off:false},0).to({_off:true},65).wait(80));

	// img1
	this.instance_13 = new lib.i1();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(42).to({alpha:0.09},9).to({_off:true},1).wait(293));

	// img2
	this.instance_14 = new lib.i2();
	this.instance_14.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(119).to({y:295,alpha:0.09},10,cjs.Ease.get(1)).to({_off:true},1).wait(215));

	// white
	this.instance_15 = new lib.white();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(345));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;