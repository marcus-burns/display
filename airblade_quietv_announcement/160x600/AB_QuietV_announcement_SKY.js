(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 23,
	color: "#FFFFFF",
	manifest: [
		{src:"images/endimage.jpg", id:"endimage"},
		{src:"images/frontimage.jpg", id:"frontimage"},
		{src:"images/NSF.png", id:"NSF"},
		{src:"images/quietlogo.png", id:"quietlogo"},
		{src:"images/start.jpg", id:"start"},
		{src:"images/text0.png", id:"text0"},
		{src:"images/text1.png", id:"text1"}
	]
};



// symbols:



(lib.endimage = function() {
	this.initialize(img.endimage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,319);


(lib.frontimage = function() {
	this.initialize(img.frontimage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,184);


(lib.NSF = function() {
	this.initialize(img.NSF);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,103);


(lib.quietlogo = function() {
	this.initialize(img.quietlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,104);


(lib.start = function() {
	this.initialize(img.start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,600);


(lib.text0 = function() {
	this.initialize(img.text0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,60);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,428);


(lib.white = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.text0_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,214);


(lib.starttext = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text0();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,30);


(lib.quietMarkLogo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.quietlogo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101,104);


(lib.NSF_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.NSF();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103,103);


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


(lib.half = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.start();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,600);


(lib.front = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.frontimage();
	this.instance.setTransform(-1,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,130,184);


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


(lib.black = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgMeAu4MAAAhdvIY9AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.text4 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfFoIAArOIY/AAIAALOg");
	mask.setTransform(80,106);

	// Layer 1
	this.instance = new lib.text0_1();
	this.instance.setTransform(80,107,1,1,0,0,0,80,107);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,70,160,72);


(lib.text3 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfFoIAArPIY/AAIAALPg");
	mask.setTransform(80,36);

	// Layer 1
	this.instance = new lib.text0_1();
	this.instance.setTransform(80,107,1,1,0,0,0,80,107);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,72);


(lib.text2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfFeIAAq7IY/AAIAAK7g");
	mask.setTransform(80,316);

	// Layer 1
	this.instance = new lib.text0_1();
	this.instance.setTransform(80,248,1,1,0,0,0,80,107);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,281,160,70);


(lib.sting = function() {
	this.initialize();

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgSaAynMAAAhwoQgBgESbgBQSbAAABgEMgApBwxIyGLkg");
	mask.setTransform(82.5,131.5);

	// white gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFFFFF"],[0,0.282],0,-129.6,0,129.6).s().p("AsfUQMAAAgoeIY/AAMAAAAoeg");
	this.shape.setTransform(80,-124.4);

	this.shape.mask = mask;

	// img
	this.instance = new lib.half();
	this.instance.setTransform(80,300,1,1,0,0,180,80,300);

	this.instance_1 = new lib.half();
	this.instance_1.setTransform(80,300,1,1,0,0,0,80,300);

	this.instance.mask = this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-254,160,783.5);


// stage content:
(lib.AB_QuietV_announcement_SKY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_325 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(325).call(this.frame_325).wait(5));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(330));

	// white
	this.instance = new lib.white();
	this.instance.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance.alpha = 0.102;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(292).to({_off:false},0).to({alpha:1},9).wait(9).to({alpha:0.051},11).to({_off:true},1).wait(8));

	// caveat
	this.text = new cjs.Text("¹ Loudness reduction compared to the\n original Dyson Airblade V hand dryer.", "8px 'Helvetica'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 10;
	this.text.lineWidth = 156;
	this.text.setTransform(79.9,572.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(330));

	// cta
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(160.5,434,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(303).to({_off:false},0).wait(27));

	// logo p1 black
	this.instance_2 = new lib.logop1white();
	this.instance_2.setTransform(35.7,554.1,1,1,0,0,0,25.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},55).wait(275));

	// logo p1 black
	this.instance_3 = new lib.logop1black();
	this.instance_3.setTransform(35.7,554.1,1,1,0,0,0,25.6,9.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({_off:false},0).wait(248).to({x:34.7,y:81.1},0).wait(27));

	// logo p2
	this.instance_4 = new lib.logopart2();
	this.instance_4.setTransform(109.1,551.7,1,1,0,0,0,42.9,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(303).to({x:108.1,y:78.7},0).wait(27));

	// NSF
	this.instance_5 = new lib.NSF_1();
	this.instance_5.setTransform(81.5,151.5,1,1,0,0,0,51.5,51.5);
	this.instance_5.alpha = 0.102;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(218).to({_off:false},0).to({alpha:1},6).to({_off:true},79).wait(27));

	// text4
	this.instance_6 = new lib.text4();
	this.instance_6.setTransform(80,272,1,1,0,0,0,80,107);
	this.instance_6.alpha = 0.102;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(218).to({_off:false},0).to({alpha:1},6).to({_off:true},79).wait(27));

	// text3
	this.instance_7 = new lib.text3();
	this.instance_7.setTransform(80,340,1,1,0,0,0,80,107);
	this.instance_7.alpha = 0.102;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(141).to({_off:false},0).to({alpha:1},6).wait(60).to({alpha:0.102},6).to({_off:true},1).wait(116));

	// text2
	this.instance_8 = new lib.text2();
	this.instance_8.setTransform(80,83,1,1,0,0,0,80,107);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(67).to({_off:false},0).to({alpha:1},6).wait(45).to({alpha:0.102},6).to({_off:true},1).wait(178).to({_off:false,y:-61,alpha:1},0).wait(27));

	// front
	this.instance_9 = new lib.front();
	this.instance_9.setTransform(80,-181,1,1,0,0,0,65,92);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({_off:false},0).to({y:149},8,cjs.Ease.get(1)).wait(60).to({y:439},12,cjs.Ease.get(0.5)).to({_off:true},163).wait(27));

	// quiet
	this.instance_10 = new lib.quietMarkLogo();
	this.instance_10.setTransform(80.5,149,0.788,0.788,0,0,0,50.5,52);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(128).to({_off:false},0).to({scaleX:1,scaleY:1},12,cjs.Ease.get(-0.49)).wait(67).to({alpha:0.102},6).to({_off:true},1).wait(116));

	// main
	this.instance_11 = new lib.sting();
	this.instance_11.setTransform(80,-305,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(33).to({y:900},26,cjs.Ease.get(-1)).to({_off:true},1).wait(270));

	// starttext
	this.instance_12 = new lib.starttext();
	this.instance_12.setTransform(80,269,1,1,0,0,0,80,15);
	this.instance_12.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},5).to({_off:true},44).wait(281));

	// black
	this.instance_13 = new lib.black();
	this.instance_13.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},54).wait(276));

	// hero
	this.instance_14 = new lib.endimage();
	this.instance_14.setTransform(0,180);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(303).to({_off:false},0).wait(27));

	// white
	this.instance_15 = new lib.white();
	this.instance_15.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(330));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44,-572,237,1502.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;