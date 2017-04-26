(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 20,
	color: "#FFFFFF",
	manifest: [
		{src:"images/AB_V_1_1.jpg", id:"AB_V_1_1"},
		{src:"images/AB_V_2.jpg", id:"AB_V_2"},
		{src:"images/AB_V_3.jpg", id:"AB_V_3"},
		{src:"images/AB_V_4.jpg", id:"AB_V_4"},
		{src:"images/CTA.png", id:"CTA"},
		{src:"images/text1.png", id:"text1"},
		{src:"images/text2.png", id:"text2"},
		{src:"images/text3.png", id:"text3"},
		{src:"images/text4.png", id:"text4"}
	]
};



// symbols:



(lib.AB_V_1_1 = function() {
	this.initialize(img.AB_V_1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.AB_V_2 = function() {
	this.initialize(img.AB_V_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.AB_V_3 = function() {
	this.initialize(img.AB_V_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.AB_V_4 = function() {
	this.initialize(img.AB_V_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.CTA = function() {
	this.initialize(img.CTA);
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


(lib.text4 = function() {
	this.initialize(img.text4);
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


(lib.t4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
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
	this.shape.graphics.f("#000000").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape.setTransform(33.6,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_1.setTransform(54.7,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_2.setTransform(97.8,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_3.setTransform(75.1,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_4.setTransform(10.3,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F5F5F").s().p("AiDiZIAzAAIBCCcQAKAYAEAYQAFgWAKgaIBDicIAyAAIiEEzg");
	this.shape_5.setTransform(286.4,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F5F5F").s().p("AhMBHQgcgeAAgpQABgtAhgeQAggdAmAAQAqAAAfAfQAgAfAAAqIgDAPIifAAQAEAUAQAOQAQAPAVgBQAdAAAhgUIAaAgQgpAdgsABQgvgBggghgAgjgxQgQANgEAQIBvAAQgEgPgOgMQgQgPgWgBQgSABgRANg");
	this.shape_6.setTransform(254.6,20.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F5F5F").s().p("AhHB9QgdgeAAgtQgBgpAggcQAfgdAoAAIA3AAIAAhoIAsAAIAADKQAAArgdAeQgeAegqABQgqAAgdgdgAgmAKQgSARAAAZQAAAcATAQQAQAOAVAAQAYAAARgRQAQgSAAgZIAAg3Ig5AAQgWAAgQAPg");
	this.shape_7.setTransform(230.9,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F5F5F").s().p("AhLBHQgdgfAAgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAfAAAtIAABiIgtAAIAAgOQgaAVgiAAQgtgBgeghgAgqgpQgRASAAAXQAAAYAQASQASAUAZgBQAZAAARgSQASgRAAgaQAAgbgTgRQgSgQgXAAQgYAAgSATg");
	this.shape_8.setTransform(207.1,20.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F5F5F").s().p("AgVCWIAAkrIArAAIAAErg");
	this.shape_9.setTransform(191.2,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F5F5F").s().p("AhIB6QgcgeAAgqIAAjKIAsAAIAABoIA0AAQArAAAgAeQAeAbAAApQAAAtgdAeQgdAdgrAAQgrgBgdgfgAg4A4QAAATAOARQARASAZABQAagBARgSQAOgRAAgXQAAgXgPgRQgRgRgdAAIg0AAg");
	this.shape_10.setTransform(175.5,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F5F5F").s().p("Ag3BlIAAhhQAAgwAhgeQAbgaApAAIAKAAIAAAoIgRACQgyAJAAA2IAABgg");
	this.shape_11.setTransform(157,20);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5F5F5F").s().p("AgUCLIAAjDIAqAAIAADDgAgQhfQgIgHAAgLQAAgKAIgHQAHgIAJAAQAKAAAHAIQAHAHABAKQgBALgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_12.setTransform(145.5,16.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F5F5F").s().p("AhLBHQgcgfgBgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAeAAAuIAABiIgsAAIAAgOQgcAVghAAQgtgBgeghgAgqgpQgRASAAAXQAAAYARASQARAUAZgBQAYAAATgSQASgRAAgaQgBgbgTgRQgRgQgYAAQgXAAgTATg");
	this.shape_13.setTransform(129.1,20.3);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,299.6,40.9);


(lib.img4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.AB_V_4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.AB_V_3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.AB_V_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.AB_V_1_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cta = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CTA();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib.AB_V_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopNumber = 0;
	}
	this.frame_248 = function() {
		this.loopNumber = this.loopNumber + 1;
		
		if(this.loopNumber==3){
			this.stop();
		}
	}
	this.frame_299 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(248).call(this.frame_248).wait(51).call(this.frame_299).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	// white copy
	this.instance = new lib.white();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({alpha:1},5).wait(6).to({alpha:0},5).to({_off:true},1).wait(47).to({_off:false},0).to({alpha:1},5).wait(6).to({alpha:0},5).to({_off:true},1).wait(51).to({_off:false},0).to({alpha:1},6).wait(6).to({alpha:0},5).to({_off:true},1).wait(91).to({_off:false},0).to({alpha:1},5).wait(4));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(150,130,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(220).to({_off:false},0).to({alpha:1},9).wait(71));

	// text
	this.instance_2 = new lib.t1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.t2();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.t3();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.t4();
	this.instance_5.setTransform(150,130,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({alpha:1},8).to({_off:true},38).wait(244));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66).to({_off:false},0).to({alpha:1},8).to({_off:true},46).wait(180));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(130).to({_off:false},0).to({alpha:1},8).to({_off:true},51).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(220).to({_off:false},0).to({alpha:1},9).wait(71));

	// logo
	this.instance_6 = new lib.logo();
	this.instance_6.setTransform(149,153,0.529,0.529,0,0,0,149.8,20.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(203).to({_off:false},0).to({alpha:1},8).wait(89));

	// img
	this.instance_7 = new lib.img1();
	this.instance_7.setTransform(150,131,1.104,1.104,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.img2();
	this.instance_8.setTransform(140,131,1.12,1.12,0,0,0,150,125);
	this.instance_8._off = true;

	this.instance_9 = new lib.img3();
	this.instance_9.setTransform(150,125,0.912,0.912,0,0,0,150,125);
	this.instance_9._off = true;

	this.instance_10 = new lib.img4();
	this.instance_10.setTransform(150,115,1.079,1.079,0,0,0,150,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,y:125,alpha:1},20,cjs.Ease.get(1)).to({_off:true},35).wait(244));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(61).to({_off:false},0).to({scaleX:1,scaleY:1,x:150,y:125},24,cjs.Ease.get(1)).to({_off:true},35).wait(180));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(125).to({_off:false},0).to({scaleX:1,scaleY:1},17,cjs.Ease.get(1)).to({_off:true},47).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(194).to({_off:false},0).to({scaleX:1,scaleY:1,y:125},20,cjs.Ease.get(1)).wait(86));

	// white
	this.instance_11 = new lib.white();
	this.instance_11.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,301,251);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;