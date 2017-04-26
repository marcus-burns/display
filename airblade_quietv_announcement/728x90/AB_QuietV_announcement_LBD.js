(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 23,
	color: "#000000",
	manifest: [
		{src:"images/alphaV.png", id:"alphaV"},
		{src:"images/blackhero.jpg", id:"blackhero"},
		{src:"images/frontview.jpg", id:"frontview"},
		{src:"images/nsf.png", id:"nsf"},
		{src:"images/quiet.png", id:"quiet"},
		{src:"images/text.png", id:"text"},
		{src:"images/whitehero.jpg", id:"whitehero"}
	]
};



// symbols:



(lib.alphaV = function() {
	this.initialize(img.alphaV);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,69);


(lib.blackhero = function() {
	this.initialize(img.blackhero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,350);


(lib.frontview = function() {
	this.initialize(img.frontview);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,226);


(lib.nsf = function() {
	this.initialize(img.nsf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.quiet = function() {
	this.initialize(img.quiet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,440);


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


(lib.white = function() {
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
p.nominalBounds = new cjs.Rectangle(0,0,370,220);


(lib.quiet_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.quiet();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.nsf_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nsf();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.logowhte = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape.setTransform(15.4,11.7,0.457,0.457);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_1.setTransform(25,9.3,0.457,0.457);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_2.setTransform(44.7,9.2,0.457,0.457);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_3.setTransform(34.3,9.3,0.457,0.457);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_4.setTransform(4.7,7,0.457,0.457);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.4,18.7);


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


(lib.front = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.frontview();
	this.instance.setTransform(-319,13);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-319,13,800,226);


(lib.cveat = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("¹ Loudness reduction compared to the original Dyson Airblade V hand dryer.", "8px 'Helvetica'", "#999999");
	this.text.lineHeight = 10;
	this.text.lineWidth = 279;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,283,58);


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


(lib.blackbackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


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


(lib.AB_end = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.whitehero();
	this.instance.setTransform(109,31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(109,31,187,210);


(lib.text4 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bCqIAAlTMAu2AAAIAAFTg");
	mask.setTransform(150,46);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(185,-40,1,1,0,0,0,185,110);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,29,300,34);


(lib.text3 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bEEIAAoGMAu2AAAIAAIGg");
	mask.setTransform(150,42);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(185,0,1,1,0,0,0,185,110);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,16,300,52);


(lib.text2Blk = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bD6IAAnzMAu2AAAIAAHzg");
	mask.setTransform(150,44);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(185,50,1,1,0,0,0,185,110);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,19,300,50);


(lib.text1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bCQIAAkfMAu2AAAIAAEfg");
	mask.setTransform(150,40.5);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(370,250,1,1,0,0,0,370,220);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,30,300,25);


(lib.AB_frame1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.blackhero();
	this.instance.setTransform(0,209);

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtsSSMAAAgigMAh8AAAMAAAAigg");
	mask.setTransform(129.7,117);

	// Layer 4
	this.instance_1 = new lib.front();
	this.instance_1.setTransform(134.9,193.5,1.884,1.885,0,0,0,72.3,113);

	this.instance_1.mask = mask;

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eh26A8BMAAAh4BMDt1AAAMAAAB4Bg");
	this.shape.setTransform(143.9,175.3);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-617.3,-208.8,1522.3,768.2);


// stage content:
(lib.AB_QuietV_announcement_LBD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_331 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(331).call(this.frame_331).wait(5));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(336));

	// white
	this.instance = new lib.white();
	this.instance.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(296).to({_off:false},0).to({alpha:0},13).to({_off:true},1).wait(26));

	// logo whie
	this.instance_1 = new lib.logowhte();
	this.instance_1.setTransform(585.8,46.2,1,1,0,0,0,24.7,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({alpha:0},7).to({_off:true},1).wait(272));

	// logo black
	this.instance_2 = new lib.logoblack();
	this.instance_2.setTransform(585.8,46.2,1,1,0,0,0,24.7,9.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).to({alpha:1},8).wait(213).to({alpha:0},10).to({_off:true},1).wait(27).to({_off:false,x:541.8,y:29.2},0).to({alpha:1},9).wait(12));

	// logo airblade
	this.instance_3 = new lib.airbladevlogo();
	this.instance_3.setTransform(656.6,44,0.457,0.457,0,0,0,90.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(277).to({alpha:0},10).to({_off:true},1).wait(27).to({_off:false,x:612.6,y:27},0).to({alpha:1},9).wait(12));

	// CTA
	this.instance_4 = new lib.CTA();
	this.instance_4.setTransform(585,60,1,1,0,0,0,69.5,182);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(315).to({_off:false},0).to({alpha:1},9).wait(12));

	// alphaV
	this.instance_5 = new lib.alphaV_1();
	this.instance_5.setTransform(693,44.5,1,1,0,0,0,22,34.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(315).to({_off:false},0).to({alpha:1},9).wait(12));

	// caveat
	this.instance_6 = new lib.cveat();
	this.instance_6.setTransform(155,104,1,1,0,0,0,141.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(277).to({alpha:0},10).to({_off:true},1).wait(8).to({_off:false,alpha:1},0).wait(40));

	// text1
	this.instance_7 = new lib.text1();
	this.instance_7.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({alpha:0},5).to({_off:true},1).wait(280));

	// text2
	this.instance_8 = new lib.text2Blk();
	this.instance_8.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},0).to({alpha:1},7).wait(49).to({alpha:0},8).to({_off:true},1).wait(167).to({_off:false,alpha:1},0).wait(40));

	// AB end frmae
	this.instance_9 = new lib.AB_end();
	this.instance_9.setTransform(340,-48,1,1,0,0,0,150,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(296).to({_off:false},0).to({y:-26},13,cjs.Ease.get(1)).wait(27));

	// front
	this.instance_10 = new lib.front();
	this.instance_10.setTransform(383.1,90,1.527,1.527,0,0,0,81,167.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(54).to({_off:false},0).to({scaleX:1,scaleY:1,y:129,alpha:1},10).wait(64).to({regX:72.3,regY:113,x:374.4,y:74.5},0).to({y:182.3},11,cjs.Ease.get(-1)).to({_off:true},1).wait(196));

	// text4
	this.instance_11 = new lib.text4();
	this.instance_11.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(223).to({_off:false},0).to({alpha:1},8).wait(46).to({alpha:0},10).to({_off:true},1).wait(48));

	// text3
	this.instance_12 = new lib.text3();
	this.instance_12.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(145).to({_off:false},0).to({alpha:1},11).wait(51).to({alpha:0},10).to({_off:true},1).wait(118));

	// nsf
	this.instance_13 = new lib.nsf_1();
	this.instance_13.setTransform(364,-55,1,1,0,0,0,364,45);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(215).to({_off:false},0).to({y:45},10).wait(52).to({alpha:0},10).to({_off:true},1).wait(48));

	// quiet
	this.instance_14 = new lib.quiet_1();
	this.instance_14.setTransform(364,-45,1,1,0,0,0,364,45);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(138).to({_off:false},0).to({y:45},11,cjs.Ease.get(0.7)).wait(62).to({y:135},10).to({_off:true},1).wait(114));

	// fade
	this.instance_15 = new lib.whit();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(64).to({_off:false},0).wait(272));

	// AB frame1
	this.instance_16 = new lib.AB_frame1();
	this.instance_16.setTransform(384,-103,0.813,0.814,0,0,0,150,214.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regY:214.2,y:5.2},54,cjs.Ease.get(1)).to({regX:150.1,scaleX:0.56,scaleY:0.56,x:381.1,y:82.2},10).to({_off:true},1).wait(271));

	// background
	this.instance_17 = new lib.blackbackground();
	this.instance_17.setTransform(150,125,1,1,0,0,0,150,125);

	this.instance_18 = new lib.whitebg();
	this.instance_18.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17}]}).to({state:[{t:this.instance_17}]},122).to({state:[{t:this.instance_18}]},5).wait(209));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(122).to({_off:true},5).wait(209));

	// Layer 1
	this.instance_19 = new lib.white();
	this.instance_19.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(336));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(124,-402.3,1238.1,697.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;