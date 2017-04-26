(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/AB.png", id:"AB"},
		{src:"images/alphaV.png", id:"alphaV"},
		{src:"images/competitor.png", id:"competitor"},
		{src:"images/noisy.png", id:"noisy"},
		{src:"images/quiet.png", id:"quiet"},
		{src:"images/quietGraphic.png", id:"quietGraphic"},
		{src:"images/start.jpg", id:"start"},
		{src:"images/text.png", id:"text"},
		{src:"images/whitehero.jpg", id:"whitehero"}
	]
};



// symbols:



(lib.AB = function() {
	this.initialize(img.AB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,90);


(lib.alphaV = function() {
	this.initialize(img.alphaV);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,69);


(lib.competitor = function() {
	this.initialize(img.competitor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.noisy = function() {
	this.initialize(img.noisy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,40);


(lib.quiet = function() {
	this.initialize(img.quiet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.quietGraphic = function() {
	this.initialize(img.quietGraphic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,15);


(lib.start = function() {
	this.initialize(img.start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,640);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,200);


(lib.whitehero = function() {
	this.initialize(img.whitehero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,210);


(lib.whitebg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.whit = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,370,100);


(lib.quiet_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.quiet();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.noisy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.noisy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,40);


(lib.logoblack = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape.setTransform(15.4,11.7,0.457,0.457);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_1.setTransform(25,9.3,0.457,0.457);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_2.setTransform(44.7,9.2,0.457,0.457);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_3.setTransform(34.3,9.3,0.457,0.457);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_4.setTransform(4.7,7,0.457,0.457);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.4,18.7);


(lib.halfstart = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.start();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,182,640);


(lib.CTA = function() {
	this.initialize();

	// Layer 3
	this.text = new cjs.Text("Find out more", "bold 12px 'Helvetica'");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(69,174.6);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmPCCQg1AAgngnQgmglABg2QgBg0AmgmQAngnA1ABIMeAAQA3gBAlAnQAnAmAAA0QAAA2gnAlQglAng3AAg");
	this.shape.setTransform(69,182);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16,169,107,26);


(lib.competitor_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.competitor();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.caveatEnd = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("¹ Loudness reduction compared to the original Dyson Airblade V hand dryer.", "8px 'Helvetica'", "#999999");
	this.text.lineHeight = 10;
	this.text.lineWidth = 279;
	this.text.setTransform(15.5,75.5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15.5,75.5,283,58);


(lib.alphaV_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.alphaV();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44,69);


(lib.airbladevlogo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2564AC").s().p("AiDiZIAzAAIBCCcQAKAYAEAYQAFgWAKgaIBDicIAyAAIiEEzg");
	this.shape.setTransform(167.8,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#939598").s().p("AhMBHQgcgeAAgpQABgtAhgeQAggdAmAAQAqAAAfAfQAgAfAAAqIgDAPIifAAQAEAUAQAOQAQAPAVgBQAdAAAhgUIAaAgQgpAdgsABQgvgBggghgAgjgxQgQANgEAQIBvAAQgEgPgOgMQgQgPgWgBQgSABgRANg");
	this.shape_1.setTransform(136.1,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#939598").s().p("AhHB9QgdgeAAgtQgBgpAggcQAfgdAoAAIA3AAIAAhoIAsAAIAADKQAAArgdAeQgeAegqABQgqAAgdgdgAgmAKQgSARAAAZQAAAcATAQQAQAOAVAAQAYAAARgRQAQgSAAgZIAAg3Ig5AAQgWAAgQAPg");
	this.shape_2.setTransform(112.3,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#939598").s().p("AhLBHQgdgfAAgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAfAAAtIAABiIgtAAIAAgOQgaAVgiAAQgtgBgeghgAgqgpQgRASAAAXQAAAYAQASQASAUAZgBQAZAAARgSQASgRAAgaQAAgbgTgRQgSgQgXAAQgYAAgSATg");
	this.shape_3.setTransform(88.6,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#939598").s().p("AgVCWIAAkrIArAAIAAErg");
	this.shape_4.setTransform(72.6,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#939598").s().p("AhIB6QgcgeAAgqIAAjKIAsAAIAABoIA0AAQArAAAgAeQAeAbAAApQAAAtgdAeQgdAdgrAAQgrgBgdgfgAg4A4QAAATAOARQARASAZABQAagBARgSQAOgRAAgXQAAgXgPgRQgRgRgdAAIg0AAg");
	this.shape_5.setTransform(57,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#939598").s().p("Ag3BlIAAhhQAAgwAhgeQAbgaApAAIAKAAIAAAoIgRACQgyAJAAA2IAABgg");
	this.shape_6.setTransform(38.5,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#939598").s().p("AgUCLIAAjDIAqAAIAADDgAgQhfQgIgHAAgLQAAgKAIgHQAHgIAJAAQAKAAAHAIQAHAHABAKQgBALgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_7.setTransform(26.9,16.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#939598").s().p("AhLBHQgcgfgBgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAeAAAuIAABiIgsAAIAAgOQgcAVghAAQgtgBgeghgAgqgpQgRASAAAXQAAAYARASQARAUAZgBQAYAAATgSQASgRAAgaQgBgbgTgRQgRgQgYAAQgXAAgTATg");
	this.shape_8.setTransform(10.5,20.3);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,181.1,30.9);


(lib.AB_quiet = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.quietGraphic();
	this.instance.setTransform(59,3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(59,3,44,15);


(lib.AB_end = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.whitehero();
	this.instance.setTransform(109,31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(109,31,187,210);


(lib.AB_1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlEGZIAAlAIBQAAIHzAAIBGAAIAAFAgAj0BZIAAnxIHzAAIAAHxg");
	mask.setTransform(377.5,47);

	// Layer 1
	this.instance = new lib.AB();
	this.instance.setTransform(338,0);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(345,6,65,82);


(lib.text5 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5iETIAAokMAzEAAAIAAIkg");
	mask.setTransform(163.5,43.5);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(150,18,1,1,0,0,0,150,50);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,16,327,52);


(lib.text3 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+dD5IAAnxMA86AAAIAAHxg");
	mask.setTransform(96,50);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(191,133,1,1,0,0,0,300,100);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99,33,360,42);


(lib.start_1 = function() {
	this.initialize();

	// Layer 2 copy
	this.instance = new lib.halfstart();
	this.instance.setTransform(546,640,2,2,0,0,180,91,320);

	// Layer 2
	this.instance_1 = new lib.halfstart();
	this.instance_1.setTransform(182,640,2,2,0,0,0,91,320);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,1280);


(lib.noisytext = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.noisy_1();
	this.instance.setTransform(51,20,1,1,0,0,0,51,20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,40);


(lib.noisyanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.noisytext();
	this.instance.setTransform(51,19.9,0.948,0.948,0,0,0,51,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9,scaleY:0.9,y:20},0).wait(2).to({regX:51.1,regY:20.1,scaleX:0.89,scaleY:0.89},0).wait(1).to({regX:51,regY:19.9,scaleX:0.9,scaleY:0.9,x:50.2},0).wait(1).to({y:20.8},0).wait(1).to({x:51},0).wait(1).to({x:50.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:19.9},0).wait(1).to({regX:51.1,regY:20.1,scaleX:1.06,scaleY:1.06,y:20.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.7,1.1,96.7,37.9);


// stage content:



(lib.AB_QuietV_comparative_LBD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_297 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(297).call(this.frame_297).wait(9));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(306));

	// sting
	this.instance = new lib.start_1("synched",0);
	this.instance.setTransform(364,-1145,1,1,0,0,0,364,45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({regY:640,y:-525.9},0).wait(1).to({y:-500.2},0).wait(1).to({y:-472.7},0).wait(1).to({y:-443.7},0).wait(1).to({y:-413.1},0).wait(1).to({y:-381},0).wait(1).to({y:-347.6},0).wait(1).to({y:-312.9},0).wait(1).to({y:-277},0).wait(1).to({y:-240.1},0).wait(1).to({y:-202.1},0).wait(1).to({y:-163.4},0).wait(1).to({y:-123.8},0).wait(1).to({y:-83.7},0).wait(1).to({y:-43},0).wait(1).to({y:-2},0).wait(1).to({y:39.3},0).wait(1).to({y:80.7},0).wait(1).to({y:122},0).wait(1).to({y:163.2},0).wait(1).to({y:204.1},0).wait(1).to({y:244.4},0).wait(1).to({y:284.2},0).wait(1).to({y:323.2},0).wait(1).to({y:361.3},0).wait(1).to({y:398.3},0).wait(1).to({y:434.2},0).wait(1).to({y:468.6},0).wait(1).to({y:501.6},0).wait(1).to({y:532.9},0).wait(1).to({y:562.4},0).wait(1).to({y:590},0).wait(1).to({y:615.5},0).wait(1).to({y:638.8},0).wait(1).to({y:659.8},0).wait(1).to({y:678.4},0).wait(1).to({y:694.3},0).wait(1).to({y:707.6},0).wait(1).to({y:718.2},0).wait(1).to({y:725.8},0).wait(1).to({y:730.4},0).wait(1).to({regY:45,y:137,mode:"independent"},0).to({_off:true},1).wait(258));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_136 = new cjs.Graphics().p("AroG8IAAt3IXRAAIAAN3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(136).to({graphics:mask_graphics_136,x:527.5,y:45}).wait(170));

	// quietGraphic
	this.instance_1 = new lib.quiet_1();
	this.instance_1.setTransform(404,45,1,1,0,0,0,364,45);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(136).to({_off:false},0).to({x:494},11).wait(72).to({y:135},7,cjs.Ease.get(-0.5)).to({_off:true},1).wait(79));

	// quiet
	this.instance_2 = new lib.AB_quiet();
	this.instance_2.setTransform(428.5,38.5,1,1,0,0,0,13.5,4.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(87).to({_off:false},0).wait(2).to({alpha:0.699},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.539},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.641},0).wait(2).to({regX:0,regY:0,x:415,y:34,alpha:1},0).to({_off:true},48).wait(159));

	// airblade
	this.instance_3 = new lib.AB_1();
	this.instance_3.setTransform(414,-50,1,1,0,0,0,364,45);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({_off:false},0).to({y:45},8).wait(132).to({y:135},7,cjs.Ease.get(-0.5)).to({_off:true},1).wait(79));

	// noisy
	this.instance_4 = new lib.noisyanimation();
	this.instance_4.setTransform(209,46.9,0.752,0.752,0,0,0,51,19.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(61).to({_off:false},0).wait(75).to({y:146.9},10).to({_off:true},1).wait(159));

	// competitor
	this.instance_5 = new lib.competitor_1();
	this.instance_5.setTransform(374,-55,1,1,0,0,0,364,45);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(51).to({_off:false},0).to({y:45},10).wait(75).to({y:145},10).to({_off:true},1).wait(159));

	// AB end frmae
	this.instance_6 = new lib.AB_end();
	this.instance_6.setTransform(330,-118,1,1,0,0,0,150,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(240).to({_off:false},0).to({y:-26},16,cjs.Ease.get(1)).wait(50));

	// logo black
	this.instance_7 = new lib.logoblack();
	this.instance_7.setTransform(530.8,28.2,1,1,0,0,0,24.7,9.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(263).to({_off:false},0).to({alpha:1},9).wait(34));

	// logo airblade
	this.instance_8 = new lib.airbladevlogo();
	this.instance_8.setTransform(601.6,26,0.457,0.457,0,0,0,90.5,15.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(263).to({_off:false},0).to({alpha:1},9).wait(34));

	// CTA
	this.instance_9 = new lib.CTA();
	this.instance_9.setTransform(574,59,1,1,0,0,0,69.5,182);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(263).to({_off:false},0).to({alpha:1},9).wait(34));

	// alphaV
	this.instance_10 = new lib.alphaV_1();
	this.instance_10.setTransform(685,44.5,1,1,0,0,0,22,34.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(263).to({_off:false},0).to({alpha:1},9).wait(34));

	// text5
	this.instance_11 = new lib.text5();
	this.instance_11.setTransform(364,47,1,1,0,0,0,364,45);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(247).to({_off:false},0).to({alpha:1},10).wait(49));

	// caveatEnd
	this.instance_12 = new lib.caveatEnd();
	this.instance_12.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(247).to({_off:false},0).to({alpha:1},10).wait(49));

	// text3
	this.instance_13 = new lib.text3();
	this.instance_13.setTransform(474,45,1,1,0,0,0,364,45);
	this.instance_13.alpha = 0.129;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(150).to({_off:false},0).to({alpha:1},11).wait(55).to({alpha:0},10).to({_off:true},1).wait(79));

	// fade
	this.instance_14 = new lib.whit();
	this.instance_14.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(65).to({_off:false},0).wait(241));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},13).wait(293));

	// background
	this.instance_15 = new lib.whitebg();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(306));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,44.5,729,91);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;