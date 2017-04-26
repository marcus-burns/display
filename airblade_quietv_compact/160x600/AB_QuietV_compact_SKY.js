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
		{src:"images/quiet.png", id:"quiet"},
		{src:"images/side.jpg", id:"side"},
		{src:"images/start.jpg", id:"start"},
		{src:"images/text.png", id:"text"}
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
p.nominalBounds = new cjs.Rectangle(0,0,154,218);


(lib.quiet = function() {
	this.initialize(img.quiet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,103);


(lib.side = function() {
	this.initialize(img.side);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,310);


(lib.start = function() {
	this.initialize(img.start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,768);


(lib.white2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.text_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,384);


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


(lib.side_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.side();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,310);


(lib.quiet_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.quiet();
	this.instance.setTransform(-68,41);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,41,100,103);


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

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsUPJIAAwsIE/AAIAAALIOWAAIABAAIAAgLIFTAAIAAQsgAnVhYIAAgLIAAtlIOWAAIAANwg");
	mask.setTransform(4,194);

	// Layer 3
	this.instance = new lib.AB_front();
	this.instance.setTransform(-74,68);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74,97,154,189);


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


(lib.blackbackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text3 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfD/IAAn9IY/AAIAAH9g");
	mask.setTransform(80,242.5);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(80,192,1,1,0,0,0,80,192);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,217,160,51);


(lib.text1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfYNIAAn9IY/AAIAAH9g");
	mask.setTransform(80,155);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(80,372,1,1,0,0,0,80,192);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,259,160,51);


(lib.text_a = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfGVIAAspIY/AAIAAMpg");
	mask.setTransform(80,40.5);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(80,192,1,1,0,0,0,80,192);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,81);


(lib.QuietText2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfZYIAAszIY/AAIAAMzg");
	mask.setTransform(80,162.5);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(80,302,1,1,0,0,0,80,192);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,243,160,82);


(lib.AB_end_1 = function() {
	this.initialize();

	// logo
	this.instance = new lib.logop1black();
	this.instance.setTransform(34.7,81.1,1,1,0,0,0,25.6,9.7);

	this.instance_1 = new lib.logopart2();
	this.instance_1.setTransform(108.1,78.7,1,1,0,0,0,42.9,7.3);

	// cta
	this.instance_2 = new lib.CTA();
	this.instance_2.setTransform(80,487,1,1,0,0,0,69.5,182);

	// text mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfFsIAArYIY/AAIAALYg");
	mask.setTransform(80,156.5);

	// text
	this.instance_3 = new lib.text_1();
	this.instance_3.setTransform(80,34,1,1,0,0,0,80,192);

	this.instance_3.mask = mask;

	// img
	this.instance_4 = new lib.AB_end();
	this.instance_4.setTransform(0,177);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,71.4,160,428.6);


// stage content:
(lib.AB_QuietV_compact_SKY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_326 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(326).call(this.frame_326).wait(2));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(328));

	// caveat
	this.text = new cjs.Text("¹ Loudness reduction compared to the\n original Dyson Airblade V hand dryer.", "8px 'Helvetica'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 10;
	this.text.lineWidth = 156;
	this.text.setTransform(78.9,575);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(328));

	// logo p1 black
	this.instance = new lib.logop1white();
	this.instance.setTransform(35.7,554.1,1,1,0,0,0,25.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},43).wait(285));

	// logo p1 black
	this.instance_1 = new lib.logop1black();
	this.instance_1.setTransform(35.7,554.1,1,1,0,0,0,25.6,9.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(43).to({_off:false},0).wait(233).to({alpha:0},9).to({_off:true},1).wait(42));

	// logo p2
	this.instance_2 = new lib.logopart2();
	this.instance_2.setTransform(109.1,551.7,1,1,0,0,0,42.9,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(276).to({alpha:0},9).to({_off:true},1).wait(42));

	// AB end frmae
	this.instance_3 = new lib.AB_end_1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0.102;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(295).to({_off:false},0).to({alpha:1},11).wait(22));

	// white
	this.instance_4 = new lib.white2();
	this.instance_4.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(123).to({_off:false},0).to({alpha:0},8).to({_off:true},1).wait(144).to({_off:false},0).to({alpha:1},9).to({_off:true},1).wait(42));

	// front
	this.instance_5 = new lib.front();
	this.instance_5.setTransform(149,210,1,1,0,0,0,73,113);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(123).to({_off:false},0).wait(5).to({y:374},10,cjs.Ease.get(-1)).to({_off:true},148).wait(42));

	// text3
	this.instance_6 = new lib.text3();
	this.instance_6.setTransform(80,224,1,1,0,0,0,80,192);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(219).to({_off:false},0).to({alpha:1},5).to({_off:true},62).wait(42));

	// text2
	this.instance_7 = new lib.QuietText2();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(140).to({_off:false},0).to({alpha:1},6).wait(63).to({alpha:0},6).to({_off:true},1).wait(112));

	// quiet
	this.instance_8 = new lib.quiet_1();
	this.instance_8.setTransform(124.1,206.5,0.622,0.622,0,0,0,50.1,51.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(128).to({_off:false},0).to({regX:50,scaleX:1,scaleY:1,x:149,y:106.5},10,cjs.Ease.get(-1)).to({_off:true},148).wait(42));

	// text1
	this.instance_9 = new lib.text1();
	this.instance_9.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(53).to({_off:false},0).to({alpha:1},6).wait(56).to({alpha:0},6).to({_off:true},1).wait(206));

	// side 
	this.instance_10 = new lib.side_1();
	this.instance_10.setTransform(150,-125,1,1,0,0,0,150,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(49).to({_off:false},0).to({y:125},10,cjs.Ease.get(1)).wait(56).to({y:124,alpha:0},6).to({_off:true},1).wait(206));

	// main
	this.instance_11 = new lib.sting();
	this.instance_11.setTransform(80,-305,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(22).to({y:900},26,cjs.Ease.get(-1)).to({_off:true},1).wait(279));

	// text
	this.instance_12 = new lib.text_a();
	this.instance_12.setTransform(80,422,1,1,0,0,0,80,192);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(36).to({alpha:0},4).to({_off:true},1).wait(287));

	// white
	this.instance_13 = new lib.white2();
	this.instance_13.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(42).to({_off:false},0).wait(286));

	// black
	this.instance_14 = new lib.blackbackground();
	this.instance_14.setTransform(80,300,0.533,2.4,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(328));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,-498.1,315.2,1431.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;