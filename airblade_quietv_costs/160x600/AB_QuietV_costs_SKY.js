(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 23,
	color: "#FFFFFF",
	manifest: [
		{src:"images/AB_end.jpg", id:"AB_end"},
		{src:"images/AB_front.jpg", id:"AB_front"},
		{src:"images/dryer.jpg", id:"dryer"},
		{src:"images/quiet.png", id:"quiet"},
		{src:"images/start.jpg", id:"start"},
		{src:"images/text.png", id:"text"},
		{src:"images/towelDryer.jpg", id:"towelDryer"}
	]
};



// symbols:



(lib.AB_end = function() {
	this.initialize(img.AB_end);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,319);


(lib.AB_front = function() {
	this.initialize(img.AB_front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,275);


(lib.dryer = function() {
	this.initialize(img.dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,226);


(lib.quiet = function() {
	this.initialize(img.quiet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.start = function() {
	this.initialize(img.start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,600);


(lib.towelDryer = function() {
	this.initialize(img.towelDryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,251);


(lib.white = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.towelHolder = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.towelDryer();
	this.instance.setTransform(68,783);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(68,783,185,251);


(lib.textsub = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,300);


(lib.sting = function() {
	this.initialize();

	// black (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgQGAzpMgIchw8QAAAFYJgUQYVgUAlAFQAKABgoGwIhpRGQi7eBhNQeQhqWtBKTHIyGLag");
	mask.setTransform(81.6,203);

	// Layer 2
	this.instance = new lib.start();
	this.instance.setTransform(0,69);

	this.instance.mask = mask;

	// img
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsfVtMAAAgraIY/AAMAAAArag");
	this.shape.setTransform(80,-39);

	this.shape.mask = mask;

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-178,160,776.5);


(lib.quiet_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.quiet();
	this.instance.setTransform(-75,-10.2,0.344,0.344);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-10.2,110,412.5);


(lib.logopart2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2564AC").s().p("AiDiZIAzAAIBCCcQAKAYAEAYQAFgWAKgaIBDicIAyAAIiEEzg");
	this.shape.setTransform(79.5,7.3,0.474,0.474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#939598").s().p("AhMBHQgcgeAAgpQABgtAhgeQAggdAmAAQAqAAAfAfQAgAfAAAqIgDAPIifAAQAEAUAQAOQAQAPAVgBQAdAAAhgUIAaAgQgpAdgsABQgvgBggghgAgjgxQgQANgEAQIBvAAQgEgPgOgMQgQgPgWgBQgSABgRANg");
	this.shape_1.setTransform(64.4,9.6,0.474,0.474);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#939598").s().p("AhHB9QgdgeAAgtQgBgpAggcQAfgdAoAAIA3AAIAAhoIAsAAIAADKQAAArgdAeQgeAegqABQgqAAgdgdgAgmAKQgSARAAAZQAAAcATAQQAQAOAVAAQAYAAARgRQAQgSAAgZIAAg3Ig5AAQgWAAgQAPg");
	this.shape_2.setTransform(53.2,7.3,0.474,0.474);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#939598").s().p("AhLBHQgdgfAAgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAfAAAtIAABiIgtAAIAAgOQgaAVgiAAQgtgBgeghgAgqgpQgRASAAAXQAAAYAQASQASAUAZgBQAZAAARgSQASgRAAgaQAAgbgTgRQgSgQgXAAQgYAAgSATg");
	this.shape_3.setTransform(41.9,9.6,0.474,0.474);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#939598").s().p("AgVCWIAAkrIArAAIAAErg");
	this.shape_4.setTransform(34.4,7.1,0.474,0.474);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#939598").s().p("AhIB6QgcgeAAgqIAAjKIAsAAIAABoIA0AAQArAAAgAeQAeAbAAApQAAAtgdAeQgdAdgrAAQgrgBgdgfgAg4A4QAAATAOARQARASAZABQAagBARgSQAOgRAAgXQAAgXgPgRQgRgRgdAAIg0AAg");
	this.shape_5.setTransform(27,7.3,0.474,0.474);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#939598").s().p("Ag3BlIAAhhQAAgwAhgeQAbgaApAAIAKAAIAAAoIgRACQgyAJAAA2IAABgg");
	this.shape_6.setTransform(18.2,9.4,0.474,0.474);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#939598").s().p("AgUCLIAAjDIAqAAIAADDgAgQhfQgIgHAAgLQAAgKAIgHQAHgIAJAAQAKAAAHAIQAHAHABAKQgBALgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_7.setTransform(12.7,7.7,0.474,0.474);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#939598").s().p("AhLBHQgcgfgBgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAeAAAuIAABiIgsAAIAAgOQgcAVghAAQgtgBgeghgAgqgpQgRASAAAXQAAAYARASQARAUAZgBQAYAAATgSQASgRAAgaQgBgbgTgRQgRgQgYAAQgXAAgTATg");
	this.shape_8.setTransform(5,9.6,0.474,0.474);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85.8,14.6);


(lib.logop1white = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape.setTransform(15.9,12.1,0.474,0.474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_1.setTransform(25.9,9.6,0.474,0.474);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_2.setTransform(46.3,9.5,0.474,0.474);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_3.setTransform(35.6,9.6,0.474,0.474);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_4.setTransform(4.8,7.2,0.474,0.474);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,19.3);


(lib.logop1black = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape.setTransform(15.9,12.1,0.474,0.474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_1.setTransform(25.9,9.6,0.474,0.474);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_2.setTransform(46.3,9.5,0.474,0.474);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_3.setTransform(35.6,9.6,0.474,0.474);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_4.setTransform(4.8,7.2,0.474,0.474);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,19.3);


(lib.front = function() {
	this.initialize();

	// Layer 5
	this.instance = new lib.AB_front();
	this.instance.setTransform(-47.7,-88.9,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.7,-88.9,97.5,137.5);


(lib.CTA = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Find out more", "bold 12px 'Helvetica'");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(69,174.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmPCCQg1AAgngnQgmglABg2QgBg0AmgmQAngnA1ABIMeAAQA3gBAlAnQAnAmAAA0QAAA2gnAlQglAng3AAg");
	this.shape.setTransform(69,182);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16,169,107,26);


(lib.competitorFan = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.dryer();
	this.instance.setTransform(19,99,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(19,99,119,113);


(lib.blackbackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.textsub();
	this.instance.setTransform(80,150,1,1,0,0,0,80,150);

	this.text = new cjs.Text("² For calculations visit\nwww.dyson.co.uk/calcs", "8px 'Helvetica'", "#AAAAAA");
	this.text.textAlign = "center";
	this.text.lineHeight = 10;
	this.text.lineWidth = 156;
	this.text.setTransform(76.9,184);

	this.addChild(this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,161,300);


(lib.QuietText2 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfGAIAAr/IY/AAIAAL/g");
	mask.setTransform(80,261.5);

	// Layer 2
	this.instance = new lib.text_1();
	this.instance.setTransform(80,373,1,1,0,0,0,80,150);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,223,160,77);


(lib.cost3 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfCVIAAkpIY/AAIAAEpg");
	mask.setTransform(80,58);

	// Layer 2
	this.instance = new lib.textsub();
	this.instance.setTransform(80,-77,1,1,0,0,0,80,150);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,43,160,30);


(lib.cost2 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfCbIAAk0IY/AAIAAE0g");
	mask.setTransform(80,173.5);

	// Layer 4
	this.instance = new lib.textsub();
	this.instance.setTransform(80,67,1,1,0,0,0,80,150);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,158,160,31);


(lib.cost1 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AseCgIAAk/IY9AAIAAE/g");
	mask.setTransform(80,369);

	// Layer 4
	this.instance = new lib.textsub();
	this.instance.setTransform(80,293,1,1,0,0,0,80,150);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,353,160,32);


(lib.caveat2 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfCaIAAkzIY/AAIAAEzg");
	mask.setTransform(80,194.5);

	// Layer 2
	this.instance = new lib.text_1();
	this.instance.setTransform(80,150,1,1,0,0,0,80,150);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,179,160,31);


(lib.AB_end_1 = function() {
	this.initialize();

	// mask cav 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfCaIAAkzIY/AAIAAEzg");
	mask.setTransform(80,580.5);

	// Layer 3
	this.text = new cjs.Text("¹ Loudness reduction compared to the\n original Dyson Airblade V hand dryer.", "8px 'Helvetica'", "#AAAAAA");
	this.text.textAlign = "center";
	this.text.lineHeight = 10;
	this.text.lineWidth = 156;
	this.text.setTransform(79.9,570.8);

	this.text.mask = mask;

	// caveat 1
	this.instance = new lib.text_1();
	this.instance.setTransform(80,569,1,1,0,0,0,80,150);

	this.instance.mask = mask;

	// text mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AsfO1IAAsBIY/AAIAAMBg");
	mask_1.setTransform(80,95);

	// text
	this.instance_1 = new lib.text_1();
	this.instance_1.setTransform(80,190,1,1,0,0,0,80,150);

	this.instance_1.mask = mask_1;

	// cta
	this.instance_2 = new lib.CTA();
	this.instance_2.setTransform(80,486,1,1,0,0,0,69.5,182);

	// logo
	this.instance_3 = new lib.logop1black();
	this.instance_3.setTransform(34.7,84.1,1,1,0,0,0,25.6,9.7);

	this.instance_4 = new lib.logopart2();
	this.instance_4.setTransform(108.1,81.7,1,1,0,0,0,42.9,7.3);

	// Layer 2
	this.instance_5 = new lib.AB_end();
	this.instance_5.setTransform(0,171);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,74.4,160,521.7);


// stage content:
(lib.AB_QuietV_costs_SKY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_266 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(266).call(this.frame_266).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(267));

	// AB end frmae
	this.instance = new lib.AB_end_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(256).to({_off:false},0).to({alpha:1},9).wait(2));

	// white copy
	this.instance_1 = new lib.white();
	this.instance_1.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(236).to({_off:false},0).to({alpha:1},10).wait(21));

	// logo p2
	this.instance_2 = new lib.logopart2();
	this.instance_2.setTransform(109.1,551.7,1,1,0,0,0,42.9,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},247).wait(20));

	// logo p1 black
	this.instance_3 = new lib.logop1black();
	this.instance_3.setTransform(35.7,554.1,1,1,0,0,0,25.6,9.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({_off:true},222).wait(20));

	// logo p1 black
	this.instance_4 = new lib.logop1white();
	this.instance_4.setTransform(35.7,554.1,1,1,0,0,0,25.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},26).wait(241));

	// cost2
	this.instance_5 = new lib.cost2();
	this.instance_5.setTransform(150,270,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0.051;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(68).to({_off:false},0).to({alpha:1},10).wait(64).to({alpha:0.051},7).to({_off:true},1).wait(117));

	// competitor
	this.instance_6 = new lib.competitorFan();
	this.instance_6.setTransform(150,-125,1,1,0,0,0,150,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(58).to({_off:false},0).to({y:220},10).wait(74).to({alpha:0},7).to({_off:true},1).wait(117));

	// cost3
	this.instance_7 = new lib.cost3();
	this.instance_7.setTransform(152,223,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(96).to({_off:false},0).to({alpha:1},9).wait(37).to({alpha:0},7).to({_off:true},1).wait(117));

	// quiet text
	this.instance_8 = new lib.QuietText2();
	this.instance_8.setTransform(150,65,1,1,0,0,0,150,125);
	this.instance_8.alpha = 0.141;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(156).to({_off:false},0).to({alpha:1},4).to({_off:true},87).wait(20));

	// front
	this.instance_9 = new lib.front();
	this.instance_9.setTransform(151,-120,1,1,0,0,0,73,113);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(82).to({_off:false},0).to({y:223.2},14,cjs.Ease.get(0.3)).to({_off:true},151).wait(20));

	// quiet
	this.instance_10 = new lib.quiet_1();
	this.instance_10.setTransform(149,246.5,1,1,0,0,0,50,51.5);
	this.instance_10.alpha = 0.238;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(156).to({_off:false},0).to({alpha:1},4).to({_off:true},87).wait(20));

	// cost1
	this.instance_11 = new lib.cost1();
	this.instance_11.setTransform(150,255,1,1,0,0,0,150,125);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(42).to({_off:false},0).to({alpha:1},10).wait(90).to({alpha:0},7).to({_off:true},1).wait(117));

	// towel
	this.instance_12 = new lib.towelHolder();
	this.instance_12.setTransform(75,-437.5,0.5,0.5,0,0,0,150,125);
	this.instance_12.alpha = 0.238;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(32).to({_off:false},0).to({y:32.5,alpha:1},10).wait(100).to({alpha:0},7).to({_off:true},1).wait(117));

	// caveat 2
	this.instance_13 = new lib.caveat2();
	this.instance_13.setTransform(80,539,1,1,0,0,0,80,150);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(28).to({_off:false},0).to({alpha:1},9).to({_off:true},210).wait(20));

	// main
	this.instance_14 = new lib.sting();
	this.instance_14.setTransform(80,-302,1,1,0,0,0,80,300);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({y:900},27,cjs.Ease.get(-0.75)).to({_off:true},2).wait(234));

	// white
	this.instance_15 = new lib.white();
	this.instance_15.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(26).to({_off:false},0).wait(241));

	// black
	this.instance_16 = new lib.blackbackground();
	this.instance_16.setTransform(80,300,0.533,2.4,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(267));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.5,299.5,161,601);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;